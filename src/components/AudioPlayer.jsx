import { useEffect, useRef, useState } from "react";
import {
  FaPlay,
  FaPause,
  FaStepForward,
  FaStepBackward,
  FaRandom,
  FaRedo,
  FaVolumeUp,
} from "react-icons/fa";
import { usePlayer } from "../context/PlayerContext";

export default function AudioPlayer() {
  const { currentTrack, isPlaying, pauseTrack, resumeTrack } = usePlayer();
  const audioRef = useRef();
  const [volume, setVolume] = useState(50);
  const [progress, setProgress] = useState(0);

  // ✅ Sync Play/Pause
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentTrack]);

  // ✅ Update Progress
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const percent =
        (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(percent || 0);
    }
  };

  // ✅ Seek Position
  const handleSeek = (e) => {
    if (audioRef.current) {
      const newTime =
        (e.target.value * audioRef.current.duration) / 100;
      audioRef.current.currentTime = newTime;
      setProgress(e.target.value);
    }
  };

  // ✅ Handle Volume
  const handleVolume = (e) => {
    const vol = e.target.value;
    setVolume(vol);
    if (audioRef.current) {
      audioRef.current.volume = vol / 100;
    }
  };

  if (!currentTrack) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-600 p-4 flex items-center justify-between shadow-2xl z-50">
      {/* 🎵 Left - Track Info */}
      <div className="flex items-center gap-4">
        <img
          src={currentTrack.image}
          alt={currentTrack.name}
          className="w-14 h-14 rounded-lg"
        />
        <div>
          <div className="text-white font-semibold">{currentTrack.name}</div>
          <div className="text-white/70 text-xs">{currentTrack.artist}</div>
        </div>
      </div>

      {/* 🎧 Center - Controls */}
      <div className="flex flex-col items-center flex-1">
        <div className="flex items-center gap-6 mb-2">
          <button className="text-white/80 hover:text-white">
            <FaRandom />
          </button>
          <button className="text-white/80 hover:text-white">
            <FaStepBackward />
          </button>
          <button
            className="bg-pink-500 text-white p-3 rounded-full shadow-lg hover:bg-pink-600 mx-2"
            onClick={isPlaying ? pauseTrack : resumeTrack}
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button className="text-white/80 hover:text-white">
            <FaStepForward />
          </button>
          <button className="text-white/80 hover:text-white">
            <FaRedo />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-96 flex items-center gap-2">
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={handleSeek}
            className="w-full accent-pink-400"
          />
        </div>
      </div>

      {/* 🔊 Right - Volume */}
      <div className="flex items-center gap-2">
        <FaVolumeUp className="text-white/70" />
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={handleVolume}
          className="w-24 accent-pink-400"
        />
      </div>

      {/* 🎶 Hidden Audio Element */}
      <audio
        ref={audioRef}
        src={currentTrack.trackUrl}
        onTimeUpdate={handleTimeUpdate}
      />
    </div>
  );
}
