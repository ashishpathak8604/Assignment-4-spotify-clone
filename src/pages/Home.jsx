// src/pages/Home.jsx
import { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import PlaylistCard from '../components/PlaylistCard';
import GenreCard from '../components/GenreCard';
import SongCard from '../components/SongCard';
import AudioPlayer from '../components/AudioPlayer';
import { fetchAlbumsByIds } from '../api/musicApi';

const trendingPlaylists = [
  { title: "Today's Hits", desc: "The hottest tracks right now", image: '/assets/todays-hits.jpg' },
  { title: "Viral Hits", desc: "Top trending songs worldwide", image: '/assets/viral-hits.jpg' },
  { title: "Mood Booster", desc: "Feel good with these tracks", image: '/assets/mood-booster.jpg' },
];

const genres = [
  { name: 'Pop', color: 'from-pink-500 to-purple-500' },
  { name: 'Hip-Hop', color: 'from-blue-400 to-blue-600' },
  { name: 'Rock', color: 'from-orange-400 to-orange-600' },
  { name: 'Electronic', color: 'from-green-400 to-green-600' },
  { name: 'Jazz', color: 'from-yellow-400 to-yellow-600' },
];

export default function Home() {
  const [recentlyPlayed, setRecentlyPlayed] = useState([]);

  useEffect(() => {
    const loadAlbums = async () => {
      const accessToken = import.meta.env.VITE_SPOTIFY_TOKEN; // or hardcode it for testing
      const ids = [
        '382ObEPsp2rxGrnsizN5TX',
        '1A2GTWGtFfWp7KSQTwWOyo',
        '2noRn2Aes5aoNVsU6iWThc',
      ];
      const albums = await fetchAlbumsByIds(ids, accessToken);
      setRecentlyPlayed(albums);
    };

    loadAlbums();
  }, []);

  return (
    <div className="flex h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="flex-1 overflow-y-auto p-8">
          {/* Weekly Discovery */}
          <section className="mb-8">
            <div
              className="relative rounded-xl overflow-hidden p-8 shadow-lg h-64 flex items-end bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(124,58,237,0.4), rgba(236,72,153,0.4), rgba(59,130,246,0.4)), url('/assets/weekly-discovery.jpg')",
                backgroundSize: 'cover',
              }}
            >
              <span className="absolute top-4 left-4 bg-green-400 text-xs px-3 py-1 rounded-full text-white font-bold">FEATURED</span>
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">Weekly Discovery</h2>
                <p className="text-white text-lg">Your personalized mix of fresh music</p>
              </div>
            </div>
          </section>

          {/* Trending Now */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">Trending Now</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {trendingPlaylists.map((pl, idx) => (
                <PlaylistCard key={idx} title={pl.title} desc={pl.desc} image={pl.image} />
              ))}
            </div>
          </section>

          {/* Browse All Genres */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">Browse All</h3>
            <div className="flex flex-wrap gap-4">
              {genres.map((genre, idx) => (
                <GenreCard key={idx} name={genre.name} gradient={genre.color} />
              ))}
            </div>
          </section>

          {/* Recently Played */}
          <section>
            <h3 className="text-xl font-semibold text-white mb-4">Recently Played</h3>
            <div className="flex gap-4 overflow-x-auto">
              {recentlyPlayed.map((album, idx) => (
                <SongCard
                  key={album.id}
                  name={album.name}
                  artist={album.artists.map(a => a.name).join(', ')}
                  image={album.images?.[0]?.url}
                  circle
                />
              ))}
            </div>
          </section>
        </main>
        <AudioPlayer />
      </div>
    </div>
  );
}
