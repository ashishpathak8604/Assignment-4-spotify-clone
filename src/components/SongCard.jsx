import { usePlayer } from '../context/PlayerContext';

const SongCard = ({ name, artist, image, trackUrl, circle }) => {
  const { playTrack } = usePlayer();

  const handlePlay = () => {
    playTrack({
      name,
      artist,
      image,
      trackUrl,
    });
  };

  return (
    <div
      onClick={handlePlay}
      className="cursor-pointer rounded-xl p-4 hover:scale-105 transition backdrop-blur-md bg-white/5 hover:bg-white/10 shadow-md flex flex-col items-center w-44"
    >
      <img
        src={image}
        alt={name}
        className={`${
          circle ? 'rounded-full' : 'rounded-lg'
        } w-36 h-36 object-cover shadow-lg`}
      />
      <h4 className="text-white font-semibold mt-3 text-center w-full truncate">
        {name}
      </h4>
      <p className="text-gray-300 text-sm text-center w-full truncate">
        {artist}
      </p>
    </div>
  );
};

export default SongCard;
