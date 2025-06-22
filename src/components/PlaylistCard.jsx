// src/components/PlaylistCard.jsx
export default function PlaylistCard({ title, desc, image }) {
  return (
    <div
      className="relative rounded-xl overflow-hidden shadow hover:scale-105 transition-transform cursor-pointer h-40 flex items-end"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(30, 41, 59, 0.85), rgba(30, 41, 59, 0.2)), url('${image}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="p-4 z-10">
        <h4 className="text-white font-semibold text-lg">{title}</h4>
        <p className="text-white/80 text-sm">{desc}</p>
      </div>
    </div>
  );
}
