import { FaHome, FaSearch, FaBook, FaPlus, FaHeart } from "react-icons/fa";
import React from "react";
import logo1 from '../assets/logo1.png';
const playlists = [
  "Daily Mix 1",
  "Discover Weekly",
  "Release Radar",
  "Summer Hits",
  "Chill Vibes",
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gradient-to-b from-indigo-800 to-purple-900 p-6 flex flex-col min-h-screen">
      <div className="flex items-center mb-10">
        <img src={logo1} alt="Musify" className="w-10 h-10 mr-2" />
        <span className="text-2xl font-bold text-white">Musify</span>
      </div>
      <nav className="flex flex-col gap-4 mb-8">
        <a href="/" className="flex items-center gap-3 text-white/90 hover:text-white font-medium">
          <FaHome /> Home
        </a>
        <a href="/search" className="flex items-center gap-3 text-white/90 hover:text-white font-medium">
          <FaSearch /> Search
        </a>
        <a href="/library" className="flex items-center gap-3 text-white/90 hover:text-white font-medium">
          <FaBook /> Your Library
        </a>
        <a href="#" className="flex items-center gap-3 text-white/90 hover:text-white font-medium">
          <FaPlus /> Create Playlist
        </a>
        <a href="#" className="flex items-center gap-3 text-white/90 hover:text-white font-medium">
          <FaHeart /> Liked Songs
        </a>
      </nav>
      <div className="text-white/70 text-xs uppercase tracking-wider mb-2">Playlists</div>
      <ul className="flex flex-col gap-2">
        {playlists.map((name, idx) => (
          <li key={idx} className="hover:text-white cursor-pointer">{name}</li>
        ))}
      </ul>
    </aside>
  );
}
