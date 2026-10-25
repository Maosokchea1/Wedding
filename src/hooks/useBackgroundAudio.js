// src/hooks/useBackgroundAudio.js
import { useState, useEffect, useRef, useCallback } from 'react';
import { WEDDING_DATA } from '../data/wedding';

/**
 * Custom hook to manage wedding background music via YouTube IFrame API
 * Plays "ភ្ជាប់និស្ស័យ | OLICA speed up [ SDAB SONG ]" (ID: Mn_qLC7_ueA)
 * Supports play/pause toggling, auto-looping, and mobile user-gesture unlock.
 */
export function useBackgroundAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const ytPlayerRef = useRef(null);
  const audioFallbackRef = useRef(null);
  const pendingPlayRef = useRef(false);

  // Initialize YouTube Player
  useEffect(() => {
    const videoId = WEDDING_DATA.music.youtubeId || "Mn_qLC7_ueA";

    const initYouTubePlayer = () => {
      if (!window.YT || !window.YT.Player) return;

      const container = document.getElementById('yt-player-container');
      if (!container) return;

      try {
        ytPlayerRef.current = new window.YT.Player('yt-player-container', {
          height: '1',
          width: '1',
          videoId: videoId,
          playerVars: {
            autoplay: 0,
            loop: 1,
            playlist: videoId,
            controls: 0,
            showinfo: 0,
            rel: 0,
            modestbranding: 1,
            playsinline: 1,
            enablejsapi: 1,
            origin: window.location.origin
          },
          events: {
            onReady: (event) => {
              try {
                event.target.setVolume(100);
                if (pendingPlayRef.current) {
                  event.target.playVideo();
                  setIsPlaying(true);
                }
              } catch (e) {
                console.warn('YT ready error:', e);
              }
            },
            onStateChange: (event) => {
              // 1 = PLAYING, 2 = PAUSED, 0 = ENDED
              if (event.data === 1) {
                setIsPlaying(true);
              } else if (event.data === 2) {
                setIsPlaying(false);
              } else if (event.data === 0) {
                // Loop song
                event.target.playVideo();
              }
            },
            onError: (err) => {
              console.warn('YouTube Player Error, switching to fallback audio:', err);
              if (pendingPlayRef.current && audioFallbackRef.current) {
                audioFallbackRef.current.play().catch(() => {});
              }
            }
          }
        });
      } catch (err) {
        console.warn('Error creating YT player:', err);
      }
    };

    // If YT API is already loaded
    if (window.YT && window.YT.Player) {
      initYouTubePlayer();
    } else {
      // Wait for YT API to trigger callback
      const prevCallback = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (typeof prevCallback === 'function') prevCallback();
        initYouTubePlayer();
      };
    }

    // HTML5 Audio Fallback instance
    const audio = new Audio(WEDDING_DATA.music.src);
    audio.loop = true;
    audio.preload = 'auto';
    audioFallbackRef.current = audio;

    return () => {
      if (ytPlayerRef.current && typeof ytPlayerRef.current.destroy === 'function') {
        try {
          ytPlayerRef.current.destroy();
        } catch (e) {}
      }
      if (audioFallbackRef.current) {
        audioFallbackRef.current.pause();
        audioFallbackRef.current = null;
      }
    };
  }, []);

  const playAudio = useCallback(() => {
    pendingPlayRef.current = true;

    // Try YouTube Player
    if (ytPlayerRef.current && typeof ytPlayerRef.current.playVideo === 'function') {
      try {
        ytPlayerRef.current.unMute();
        ytPlayerRef.current.setVolume(100);
        ytPlayerRef.current.playVideo();
        setIsPlaying(true);
        return;
      } catch (e) {
        console.warn('YT play failed, attempting fallback audio:', e);
      }
    }

    // Fallback HTML5 Audio
    if (audioFallbackRef.current) {
      audioFallbackRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn('Audio play restricted by browser:', err);
      });
    }
  }, []);

  const pauseAudio = useCallback(() => {
    pendingPlayRef.current = false;

    if (ytPlayerRef.current && typeof ytPlayerRef.current.pauseVideo === 'function') {
      try {
        ytPlayerRef.current.pauseVideo();
      } catch (e) {}
    }

    if (audioFallbackRef.current) {
      audioFallbackRef.current.pause();
    }

    setIsPlaying(false);
  }, []);

  const toggleAudio = useCallback(() => {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  }, [isPlaying, pauseAudio, playAudio]);

  return {
    isPlaying,
    playAudio,
    pauseAudio,
    toggleAudio
  };
}
