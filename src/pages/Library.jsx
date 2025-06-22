import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import PlaylistCard from '../components/PlaylistCard';
import SongCard from '../components/SongCard';
import AudioPlayer from '../components/AudioPlayer';

export default function Library() {
  // Replace with user data from context or API
  const playlists = [
    { title: "Discover Weekly", desc: "Your weekly mixtape", image: "/assets/discover-weekly.jpg" },
    { title: "Release Radar", desc: "New releases just for you", image: "/assets/release-radar.jpg" },
  ];
  const likedSongs = [
    { name: "Song 1", artist: "Artist 1", image: "/assets/track1.jpg" },
    { name: "Song 2", artist: "Artist 2", image: "/assets/track2.jpg" },
  ];

  return (
    <div className="flex h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="flex-1 overflow-y-auto p-8">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Your Playlists</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {playlists.map((pl, idx) => (
                <PlaylistCard key={idx} title={pl.title} desc={pl.desc} image={pl.image} />
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Liked Songs</h2>
            <div className="flex gap-4 overflow-x-auto">
              {likedSongs.map((song, idx) => (
                <SongCard key={idx} name={song.name} artist={song.artist} image={song.image} circle />
              ))}
            </div>
          </section>
        </main>
        <AudioPlayer />
      </div>
    </div>
  );
}
