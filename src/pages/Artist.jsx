import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import SongCard from '../components/SongCard';
// import AlbumCard from '../components/AlbumCard';
import AudioPlayer from '../components/AudioPlayer';
import { useParams } from 'react-router-dom';

export default function Artist() {
  const { id } = useParams();
  // Fetch artist info by id
  const artist = {
    name: "Artist Name",
    image: "/assets/artist.jpg",
    bio: "Short artist bio goes here.",
    topTracks: [
      { name: "Top Track 1", artist: "Artist Name", image: "/assets/track1.jpg" },
      { name: "Top Track 2", artist: "Artist Name", image: "/assets/track2.jpg" },
    ],
    albums: [
      { title: "Album 1", image: "/assets/album1.jpg" },
      { title: "Album 2", image: "/assets/album2.jpg" },
    ],
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="flex-1 overflow-y-auto p-8">
          <div className="flex items-center gap-8 mb-8">
            <img src={artist.image} alt={artist.name} className="w-40 h-40 rounded-full shadow-lg" />
            <div>
              <h2 className="text-4xl font-bold text-white mb-2">{artist.name}</h2>
              <p className="text-white/80 mb-4">{artist.bio}</p>
              <button className="px-6 py-2 bg-pink-500 text-white rounded-full font-semibold hover:bg-pink-600">
                Follow
              </button>
            </div>
          </div>
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">Top Tracks</h3>
            <div className="flex gap-4 overflow-x-auto">
              {artist.topTracks.map((track, idx) => (
                <SongCard key={idx} name={track.name} artist={track.artist} image={track.image} circle />
              ))}
            </div>
          </section>
          <section>
            <h3 className="text-xl font-semibold text-white mb-4">Albums</h3>
            <div className="flex gap-4 overflow-x-auto">
              {artist.albums.map((album, idx) => (
                <AlbumCard key={idx} title={album.title} image={album.image} />
              ))}
            </div>
          </section>
        </main>
        <AudioPlayer />
      </div>
    </div>
  );
}
