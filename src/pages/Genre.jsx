import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import PlaylistCard from '../components/PlaylistCard';
import AudioPlayer from '../components/AudioPlayer';
import { useParams } from 'react-router-dom';

export default function Genre() {
  const { name } = useParams();
  // Fetch genre playlists/albums
  const playlists = [
    { title: "Pop Essentials", desc: "Best of Pop", image: "/assets/pop.jpg" },
    { title: "Pop Party", desc: "Party hits", image: "/assets/pop-party.jpg" },
  ];

  return (
    <div className="flex h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="flex-1 overflow-y-auto p-8">
          <h2 className="text-3xl font-bold text-white mb-8">{name} Playlists</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {playlists.map((pl, idx) => (
              <PlaylistCard key={idx} title={pl.title} desc={pl.desc} image={pl.image} />
            ))}
          </div>
        </main>
        <AudioPlayer />
      </div>
    </div>
  );
}
