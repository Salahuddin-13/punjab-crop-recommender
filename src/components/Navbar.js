import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [lang, setLang] = useState("en");
  const active = "text-green-700 font-semibold border-b-2 border-green-600 pb-1";
  const base = "hover:text-green-700 pb-1";

  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-10 w-10 grid place-items-center rounded-2xl bg-green-100">🌾</div>
          <div>
            <div className="text-lg font-bold">Jharkhand Agriculture</div>
            <div className="text-xs text-slate-500">AI Crop Recommender</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={({isActive}) => isActive?active:base}>Home</NavLink>
          <NavLink to="/crops" className={({isActive}) => isActive?active:base}>Crops</NavLink>
          <NavLink to="/weather" className={({isActive}) => isActive?active:base}>Weather</NavLink>
          <NavLink to="/calendar" className={({isActive}) => isActive?active:base}>Calendar</NavLink>
          <NavLink to="/resources" className={({isActive}) => isActive?active:base}>Resources</NavLink>
          <NavLink to="/profile" className={({isActive}) => isActive?active:base}>Profile</NavLink>
        </nav>
        <select value={lang} onChange={e=>setLang(e.target.value)} className="rounded-xl border border-slate-200 px-3 py-1.5 text-sm">
          <option value="en">English</option>
          <option value="hi">हिंदी</option>
        </select>
      </div>
    </header>
);}
