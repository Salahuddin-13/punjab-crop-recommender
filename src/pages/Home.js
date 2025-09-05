import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="bg-gradient-to-r from-green-600 to-emerald-500 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Welcome to Jharkhand's Farming Portal!
        </h1>
        <p className="mt-4 text-lg opacity-90">
          Get expert crop advice powered by AI and local weather reports.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/crops"
            className="bg-yellow-200 text-green-900 font-semibold px-5 py-2.5 rounded-xl shadow hover:bg-yellow-100"
          >
            Start Now &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}

