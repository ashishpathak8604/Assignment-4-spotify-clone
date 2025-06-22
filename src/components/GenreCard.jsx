export default function GenreCard({ name, gradient }) {
  return (
    <div
      className={`rounded-xl px-8 py-6 text-lg font-semibold text-white cursor-pointer shadow bg-gradient-to-r ${gradient} hover:scale-105 transition-transform`}
    >
      {name}
    </div>
  );
}
