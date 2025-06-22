import { FaPlay, FaPause, FaStepForward, FaStepBackward, FaRandom, FaRedo, FaVolumeUp } from "react-icons/fa";

export default function AudioPlayer() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-600 p-4 flex items-center justify-between shadow-2xl z-50">
      <div className="flex items-center gap-4">
        <img src="/assets/track1.jpg" alt="Current Track" className="w-14 h-14 rounded-lg" />
        <div>
          <div className="text-white font-semibold">Current Track</div>
          <div className="text-white/70 text-xs">Artist Name</div>
        </div>
      </div>
      <div className="flex flex-col items-center flex-1">
        <div className="flex items-center gap-6 mb-2">
          <button className="text-white/80 hover:text-white"><FaRandom /></button>
          <button className="text-white/80 hover:text-white"><FaStepBackward /></button>
          <button className="bg-pink-500 text-white p-3 rounded-full shadow-lg hover:bg-pink-600 mx-2">
            <FaPlay />
          </button>
          <button className="text-white/80 hover:text-white"><FaStepForward /></button>
          <button className="text-white/80 hover:text-white"><FaRedo /></button>
        </div>
        <div className="w-96 h-1 bg-white/30 rounded-full overflow-hidden">
          <div className="h-full bg-pink-400" style={{ width: "40%" }}></div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <FaVolumeUp className="text-white/70" />
        <input type="range" min="0" max="100" className="w-24 accent-pink-400" />
      </div>
    </div>
  );
}
