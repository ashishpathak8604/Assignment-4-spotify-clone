// src/components/ArtistCard.jsx
export default function ArtistCard({ name, image }) {
  return (
    <div className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full object-cover border-4 border-white/20 mb-2 shadow-lg"
      />
      <div className="text-white text-base font-semibold">{name}</div>
    </div>
  );
}
