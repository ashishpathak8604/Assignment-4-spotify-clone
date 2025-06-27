import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Topbar() {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);
  const goForward = () => navigate(1);

  return (
    <header className="flex items-center justify-between px-8 py-4 bg-transparent">
      <div className="flex gap-2">
        <button
          onClick={goBack}
          className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition"
        >
          &lt;
        </button>
        <button
          onClick={goForward}
          className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition"
        >
          &gt;
        </button>
      </div>
      <div className="relative flex-1 max-w-md ml-8">
        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60" />
        <input
          type="text"
          placeholder="Search for songs, artists, or playlists..."
          className="w-full pl-10 pr-4 py-2 rounded-full bg-white/10 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>
      <div>{/* User avatar or profile dropdown here */}</div>
    </header>
  );
}
