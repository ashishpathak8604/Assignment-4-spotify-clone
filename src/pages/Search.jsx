import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import SongCard from '../components/SongCard';
import PlaylistCard from '../components/PlaylistCard';
import AlbumCard from '../components/AlbumCard';
import ArtistCard from '../components/ArtistCard';
import AudioPlayer from '../components/AudioPlayer';
import { useState } from 'react';

const mockResults = {
  songs: [
    { name: "Track Name 1", artist: "Artist 1", image: "/assets/track1.jpg" },
    { name: "Track Name 2", artist: "Artist 2", image: "/assets/track2.jpg" },
    { name: "Track Name 3", artist: "Artist 3", image: "/assets/track3.jpg" },
  ],
  albums: [
    { title: "Album 1", image: "/assets/album1.jpg" },
    { title: "Album 2", image: "/assets/album2.jpg" },
  ],
  artists: [
    { name: "Artist 1", image: "/assets/artist1.jpg" },
    { name: "Artist 2", image: "/assets/artist2.jpg" },
  ],
  playlists: [
    { title: "Playlist 1", desc: "Best of 2025", image: "/assets/playlist1.jpg" },
    { title: "Playlist 2", desc: "Chill Vibes", image: "/assets/playlist2.jpg" },
  ],
};

export default function Search() {
  const [query, setQuery] = useState('');
  const [type, setType] = useState('songs');

  // Filtered results (simulate search)
  const results = query
    ? mockResults[type].filter(item =>
        (item.name || item.title || '').toLowerCase().includes(query.toLowerCase())
      )
    : mockResults[type];

  return (
    <div className="flex h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="flex-1 overflow-y-auto p-8">
          {/* <div className="mb-8">
            <input
              type="text"
              className="w-full rounded-xl px-5 py-3 text-lg bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder:text-white/60"
              placeholder="Search for songs, artists, albums, or playlists..."
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
          </div> */}
          <div className="flex gap-4 mb-8">
            {['songs', 'albums', 'artists', 'playlists'].map(tab => (
              <button
                key={tab}
                className={`px-4 py-2 rounded-full font-semibold ${
                  type === tab
                    ? 'bg-pink-500 text-white'
                    : 'bg-white/10 text-white hover:bg-pink-400/40'
                }`}
                onClick={() => setType(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {type === 'songs' &&
                results.map((song, idx) => (
                  <SongCard key={idx} name={song.name} artist={song.artist} image={song.image} />
                ))}
              {type === 'albums' &&
                results.map((album, idx) => (
                  <AlbumCard key={idx} title={album.title} image={album.image} />
                ))}
              {type === 'artists' &&
                results.map((artist, idx) => (
                  <ArtistCard key={idx} name={artist.name} image={artist.image} />
                ))}
              {type === 'playlists' &&
                results.map((playlist, idx) => (
                  <PlaylistCard key={idx} title={playlist.title} desc={playlist.desc} image={playlist.image} />
                ))}
            </div>
          </div>
        </main>
        <AudioPlayer />
      </div>
    </div>
  );
}
