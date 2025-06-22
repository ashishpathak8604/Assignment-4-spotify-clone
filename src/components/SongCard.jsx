export default function SongCard({ name, artist, image, circle }) {
  return (
    <div className="flex flex-col items-center min-w-[120px]">
      <img
        src={image || "/assets/default-cover.jpg"}
        alt={name}
        className={`mb-2 ${circle ? "rounded-full" : "rounded-lg"} w-20 h-20 object-cover border-2 border-white/20`}
      />
      <div className="text-white text-sm font-medium">{name}</div>
      <div className="text-white/70 text-xs">{artist}</div>
    </div>
  );
}
