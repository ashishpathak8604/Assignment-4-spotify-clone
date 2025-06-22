import { FaSearch } from "react-icons/fa";

export default function Topbar() {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-transparent">
      <div className="flex gap-2">
        <button className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white">
          &lt;
        </button>
        <button className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white">
          &gt;
        </button>
      </div>
      <div className="relative flex-1 max-w-md ml-8">
        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60" />
        <input
          type="text"
          placeholder="Search for songs, artists, or playlists..."
          className="w-full pl-10 pr-4 py-2 rounded-full bg-white/10 text-white placeholder:text-white/60 focus:outline-none"
        />
      </div>
      <div>
        {/* User avatar or profile dropdown can go here */}
      </div>
    </header>
  );
}
