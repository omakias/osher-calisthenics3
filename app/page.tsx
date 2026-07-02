'use client';

import { useMemo, useState } from 'react';
import { muscles, roadmap } from '../data/content';

function BodyMap({ selected, onSelect }: { selected: string; onSelect: (id: string) => void }) {
  const active = (id: string) => selected === id ? 'hotspot active' : 'hotspot';
  return (
    <svg className="body-svg" viewBox="0 0 220 430" role="img" aria-label="מפת שרירים אינטראקטיבית">
      <defs>
        <linearGradient id="skin" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#d9ffe8" />
          <stop offset="1" stopColor="#6fdc99" />
        </linearGradient>
      </defs>
      <circle cx="110" cy="38" r="24" fill="url(#skin)" opacity=".92" />
      <rect x="92" y="62" width="36" height="30" rx="14" fill="url(#skin)" opacity=".86" />
      <path d="M70 92 C88 75 132 75 150 92 L142 190 C137 224 83 224 78 190 Z" fill="#132219" stroke="rgba(255,255,255,.16)" strokeWidth="2" />

      <path onClick={() => onSelect('chest')} className={active('chest')} d="M78 105 C90 92 106 92 109 111 L109 154 C93 156 80 145 74 128 Z" fill="#39ff88" />
      <path onClick={() => onSelect('chest')} className={active('chest')} d="M142 105 C130 92 114 92 111 111 L111 154 C127 156 140 145 146 128 Z" fill="#39ff88" />
      <path onClick={() => onSelect('core')} className={active('core')} d="M90 158 L130 158 L136 202 C128 216 92 216 84 202 Z" fill="#21c76b" />
      <path onClick={() => onSelect('shoulders')} className={active('shoulders')} d="M56 96 C61 84 75 83 83 95 C76 104 70 113 66 126 C58 124 52 113 56 96 Z" fill="#39ff88" />
      <path onClick={() => onSelect('shoulders')} className={active('shoulders')} d="M164 96 C159 84 145 83 137 95 C144 104 150 113 154 126 C162 124 168 113 164 96 Z" fill="#39ff88" />
      <path onClick={() => onSelect('arms')} className={active('arms')} d="M52 124 C62 122 67 132 65 151 L58 226 C56 241 38 239 39 224 L43 156 C44 139 46 129 52 124 Z" fill="#18b961" />
      <path onClick={() => onSelect('arms')} className={active('arms')} d="M168 124 C158 122 153 132 155 151 L162 226 C164 241 182 239 181 224 L177 156 C176 139 174 129 168 124 Z" fill="#18b961" />
      <path onClick={() => onSelect('legs')} className={active('legs')} d="M86 218 C99 225 107 225 109 220 L105 349 C104 370 80 370 78 349 Z" fill="#39ff88" />
      <path onClick={() => onSelect('legs')} className={active('legs')} d="M134 218 C121 225 113 225 111 220 L115 349 C116 370 140 370 142 349 Z" fill="#39ff88" />
      <path onClick={() => onSelect('back')} className={active('back')} d="M82 98 C96 88 124 88 138 98 L129 143 C122 152 98 152 91 143 Z" fill="#0fa756" opacity=".75" />
      <text x="110" y="402" textAnchor="middle" fill="#9fb4a6" fontSize="13">לחץ על אזור בגוף</text>
    </svg>
  );
}

export default function Home() {
  const [selectedId, setSelectedId] = useState('chest');
  const selected = useMemo(() => muscles.find((m) => m.id === selectedId) ?? muscles[0], [selectedId]);

  return (
    <main className="app">
      <header className="top">
        <div className="logo">
          <strong>Osher Calisthenics</strong>
          <span>Own Your Strength</span>
        </div>
        <div className="avatar">OC</div>
      </header>

      <section className="hero">
        <h1>בחר שריר והתחל להתאמן</h1>
        <p>לחץ על אזור בגוף כדי לראות תרגילים ממוקדים, Roadmap והמלצות אימון.</p>
      </section>

      <div className="stats">
        <div className="stat"><b>12</b><span>אימונים</span></div>
        <div className="stat"><b>740</b><span>XP</span></div>
        <div className="stat"><b>5</b><span>רצף ימים</span></div>
      </div>

      <div className="section-title">
        <h2>מפת שרירים</h2>
        <small>אינטראקטיבי</small>
      </div>

      <section className="muscle-card">
        <div className="body-wrap">
          <div className="body-map"><BodyMap selected={selectedId} onSelect={setSelectedId} /></div>
          <div className="muscle-info">
            <div className="pill">
              <h3>{selected.name}</h3>
              <p>{selected.subtitle}</p>
            </div>
            <div className="exercise-list">
              {selected.exercises.map((ex) => <div className="exercise" key={ex}>💪 {ex}</div>)}
            </div>
            <button className="cta">פתח את כל תרגילי {selected.name}</button>
          </div>
        </div>
      </section>

      <div className="section-title"><h2>Roadmap: Muscle Up</h2><small>7 שלבים</small></div>
      <section className="roadmap">
        {roadmap.map((step, index) => (
          <div className="step" key={step}><span className="dot">{index + 1}</span><span>{step}</span></div>
        ))}
      </section>

      <div className="section-title"><h2>האימון של היום</h2><small>35 דקות</small></div>
      <section className="cards">
        <div className="card"><b>Upper Body Strength</b><br />שכיבות סמיכה, מתח, פלאנק ודיפס.</div>
        <div className="card"><b>הישג קרוב</b><br />עוד 260 XP ואתה עולה לרמה הבאה.</div>
      </section>

      <nav className="nav">
        <a className="active" href="#">בית</a>
        <a href="#">תרגילים</a>
        <a href="#">Roadmap</a>
        <a href="#">פרופיל</a>
      </nav>
    </main>
  );
}
