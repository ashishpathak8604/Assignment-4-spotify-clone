// src/components/AlbumCard.jsx
export default function AlbumCard({ title, image }) {
  return (
    <div className="bg-white/10 rounded-xl overflow-hidden shadow hover:scale-105 transition-transform cursor-pointer">
      <img
        src={image}
        alt={title}
        className="w-full h-36 object-cover"
      />
      <div className="p-4">
        <h4 className="text-white font-semibold">{title}</h4>
      </div>
    </div>
  );
}
