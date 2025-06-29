import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import SongCard from '../components/SongCard'; // retained if needed
import AudioPlayer from '../components/AudioPlayer';
import { FaPlay, FaHeart, FaEllipsisH } from 'react-icons/fa';

export default function Playlist() {
  // TODO: Replace with real fetch based on useParams()
  const playlist = {
    title: "Discover Weekly",
    desc: "Your weekly mixtape of fresh music.",
    cover: "/assets/discover-weekly.jpg",
    tracks: [
      { id: 1, name: "Song 1", artist: "Artist A", album: "Album X", duration: "3:45", image: "/assets/track1.jpg" },
      { id: 2, name: "Song 2", artist: "Artist B", album: "Album Y", duration: "4:12", image: "/assets/track2.jpg" },
      // Add more tracks...
    ],
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />

        <main className="flex-1 overflow-y-auto p-8 space-y-8">
          {/* 🎧 Playlist Header */}
          <div className="flex items-center gap-8">
            <img
              src={playlist.cover}
              alt={playlist.title}
              className="w-48 h-48 rounded-xl shadow-xl"
            />
            <div className="space-y-4">
              <h2 className="text-5xl font-bold text-white">
                {playlist.title}
              </h2>
              <p className="text-white/70">{playlist.desc}</p>
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full transition">
                  <FaPlay /> Play All
                </button>
                <button className="text-white/80 hover:text-white">
                  <FaHeart size={24} />
                </button>
                <button className="text-white/80 hover:text-white">
                  <FaEllipsisH size={24} />
                </button>
              </div>
            </div>
          </div>

          {/* 🎶 Track List */}
          <table className="min-w-full text-left text-gray-300">
            <thead className="border-b border-gray-700">
              <tr>
                <th className="px-4 py-2">#</th>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Album</th>
                <th className="px-4 py-2">Duration</th>
              </tr>
            </thead>
            <tbody>
              {playlist.tracks.map((track, idx) => (
                <tr
                  key={track.id}
                  className="hover:bg-white/10 transition cursor-pointer"
                  onClick={() => {
                    /* Optionally trigger playTrack from SongCard/context */
                  }}
                >
                  <td className="px-4 py-3">{idx + 1}</td>
                  <td className="px-4 py-3 flex items-center gap-4">
                    <img
                      src={track.image}
                      alt={track.name}
                      className="w-10 h-10 rounded-lg"
                    />
                    <div>
                      <div className="text-white">{track.name}</div>
                      <div className="text-gray-400 text-sm">
                        {track.artist}
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">{track.album}</td>
                  <td className="px-4 py-3">{track.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>

        <AudioPlayer />
      </div>
    </div>
  );
}
