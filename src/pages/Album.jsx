import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import SongCard from '../components/SongCard';
import AudioPlayer from '../components/AudioPlayer';
import { useParams } from 'react-router-dom';

export default function Album() {
  const { id } = useParams();
  // Fetch album details by id
  const album = {
    title: "Album Title",
    artist: "Artist Name",
    year: 2025,
    cover: "/assets/album-cover.jpg",
    tracks: [
      { name: "Song 1", artist: "Artist Name", image: "/assets/track1.jpg" },
      { name: "Song 2", artist: "Artist Name", image: "/assets/track2.jpg" },
    ],
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="flex-1 overflow-y-auto p-8">
          <div className="flex items-center gap-8 mb-8">
            <img src={album.cover} alt={album.title} className="w-40 h-40 rounded-xl shadow-lg" />
            <div>
              <h2 className="text-4xl font-bold text-white mb-2">{album.title}</h2>
              <p className="text-white/80">{album.artist} • {album.year}</p>
              <button className="mt-4 px-6 py-2 bg-pink-500 text-white rounded-full font-semibold hover:bg-pink-600">
                Play
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Tracks</h3>
            <div className="flex flex-col gap-4">
              {album.tracks.map((track, idx) => (
                <SongCard key={idx} name={track.name} artist={track.artist} image={track.image} />
              ))}
            </div>
          </div>
        </main>
        <AudioPlayer />
      </div>
    </div>
  );
}
