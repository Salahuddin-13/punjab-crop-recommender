// pages/Home.jsx
export default function Home() {
  return (
    <section className="bg-gradient-to-r from-green-600 to-emerald-500 text-white text-center py-32">
      <h1 className="text-5xl font-bold">🌾 Smart Farming for Jharkhand</h1>
      <p className="mt-6 text-lg">
        AI-powered crop recommendations based on soil, weather, and local data.
      </p>
      <a
        href="/crops"
        className="mt-8 inline-block bg-white text-green-700 font-semibold px-6 py-3 rounded shadow hover:bg-slate-100 transition"
      >
        Get Recommendations →
      </a>
    </section>
  );
}
