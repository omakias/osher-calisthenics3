'use client';

import { useMemo, useState } from 'react';
import { exercises, muscles, MuscleKey, roadmap } from '../data/content';

const muscleOrder: MuscleKey[] = ['chest','back','shoulders','biceps','triceps','core','quads','hamstrings','glutes','calves'];

export default function Home() {
  const [selected, setSelected] = useState<MuscleKey>('chest');
  const [tab, setTab] = useState<'home' | 'exercises' | 'roadmap' | 'progress' | 'profile'>('home');
  const list = useMemo(() => exercises[selected], [selected]);

  return (
    <main className="app-shell">
      <header className="topbar">
        <div className="brand">
          <div className="logoMark">OC</div>
          <div>
            <div className="brandTitle">OSHER</div>
            <div className="brandSub">CALISTHENICS</div>
          </div>
        </div>
        <div className="stats-mini">
          <span>🔥 12 רצף</span>
          <span>🏆 4 הישגים</span>
        </div>
      </header>

      {tab === 'home' && (
        <section className="screen-grid">
          <section className="panel hero-panel">
            <div className="section-title">
              <h1>בחר אזור בגוף</h1>
              <p>לחץ על שריר כדי לראות תרגילים מתאימים</p>
            </div>
            <div className="body-layout">
              <HumanMap selected={selected} setSelected={setSelected} />
              <div className="muscle-buttons">
                {muscleOrder.map((key) => (
                  <button key={key} className={selected === key ? 'muscle-btn active' : 'muscle-btn'} onClick={() => setSelected(key)}>
                    {muscles[key].label}
                  </button>
                ))}
              </div>
            </div>
          </section>

          <section className="panel exercise-panel">
            <div className="selected-header">
              <span>אזור נבחר</span>
              <h2>{muscles[selected].label}</h2>
              <p>{muscles[selected].subtitle}</p>
            </div>
            <div className="exercise-list">
              {list.map((ex) => <ExerciseCard key={ex.name} ex={ex} />)}
            </div>
          </section>
        </section>
      )}

      {tab === 'exercises' && <ExercisesScreen selected={selected} setSelected={setSelected} />}
      {tab === 'roadmap' && <RoadmapScreen />}
      {tab === 'progress' && <ProgressScreen />}
      {tab === 'profile' && <ProfileScreen />}

      <nav className="bottom-nav">
        <button onClick={() => setTab('profile')} className={tab === 'profile' ? 'active' : ''}>פרופיל</button>
        <button onClick={() => setTab('progress')} className={tab === 'progress' ? 'active' : ''}>התקדמות</button>
        <button onClick={() => setTab('home')} className={tab === 'home' ? 'active center' : 'center'}>בית</button>
        <button onClick={() => setTab('roadmap')} className={tab === 'roadmap' ? 'active' : ''}>Roadmap</button>
        <button onClick={() => setTab('exercises')} className={tab === 'exercises' ? 'active' : ''}>תרגילים</button>
      </nav>
    </main>
  );
}

function HumanMap({ selected, setSelected }: { selected: MuscleKey; setSelected: (key: MuscleKey) => void }) {
  const areas: { key: MuscleKey; className: string; label: string }[] = [
    { key: 'chest', className: 'chest', label: 'חזה' },
    { key: 'shoulders', className: 'shoulder-l', label: 'כתפיים' },
    { key: 'shoulders', className: 'shoulder-r', label: 'כתפיים' },
    { key: 'biceps', className: 'biceps-l', label: 'יד קדמית' },
    { key: 'triceps', className: 'biceps-r', label: 'יד אחורית' },
    { key: 'core', className: 'abs', label: 'בטן' },
    { key: 'quads', className: 'quad-l', label: 'ירך קדמית' },
    { key: 'quads', className: 'quad-r', label: 'ירך קדמית' },
    { key: 'calves', className: 'calf-l', label: 'שוקיים' },
    { key: 'calves', className: 'calf-r', label: 'שוקיים' },
  ];
  return (
    <div className="human-wrap" aria-label="מפת שרירים אינטראקטיבית">
      <div className="human-head" />
      <div className="human-neck" />
      <div className="human-torso" />
      <div className="human-arm left" />
      <div className="human-arm right" />
      <div className="human-leg left" />
      <div className="human-leg right" />
      {areas.map((a, i) => (
        <button key={`${a.className}-${i}`} aria-label={a.label} title={a.label} onClick={() => setSelected(a.key)} className={`hotspot ${a.className} ${selected === a.key ? 'active' : ''}`} />
      ))}
    </div>
  );
}

function ExerciseCard({ ex }: { ex: { name: string; level: string; reps: string; text: string } }) {
  return (
    <article className="exercise-card">
      <div className="thumb">💪</div>
      <div className="card-content">
        <h3>{ex.name}</h3>
        <p>{ex.text}</p>
        <div className="meta"><span>{ex.level}</span><span>{ex.reps}</span></div>
      </div>
      <span className="arrow">‹</span>
    </article>
  );
}

function ExercisesScreen({ selected, setSelected }: { selected: MuscleKey; setSelected: (key: MuscleKey) => void }) {
  return (
    <section className="panel full-screen">
      <h1>ספריית תרגילים</h1>
      <div className="chips">{muscleOrder.map(key => <button key={key} onClick={() => setSelected(key)} className={selected === key ? 'chip active' : 'chip'}>{muscles[key].label}</button>)}</div>
      <div className="exercise-list wide">{exercises[selected].map(ex => <ExerciseCard key={ex.name} ex={ex} />)}</div>
    </section>
  );
}

function RoadmapScreen() {
  return (
    <section className="panel full-screen">
      <h1>Skill Roadmap</h1>
      <h2 className="accent-title">Muscle Up</h2>
      <div className="roadmap">{roadmap.map((step, i) => <div key={step} className={i < 4 ? 'road-step done' : i === 4 ? 'road-step current' : 'road-step locked'}><span>{i + 1}</span><strong>{step}</strong><em>{i < 4 ? 'הושלם' : i === 4 ? 'בתהליך' : 'נעול'}</em></div>)}</div>
    </section>
  );
}

function ProgressScreen() {
  return (
    <section className="panel full-screen">
      <h1>התקדמות</h1>
      <div className="stat-grid"><div><b>48</b><span>אימונים</span></div><div><b>18:45</b><span>שעות</span></div><div><b>12,450</b><span>קלוריות</span></div></div>
      <div className="bars">{[30,70,45,80,60,90,55,100].map((h,i)=><span key={i} style={{height:`${h}%`}} />)}</div>
      <h2>הישגים אחרונים</h2>
      <div className="achievements"><span>🏅 100 שכיבות סמיכה</span><span>🥈 20 מתח</span><span>🔥 10 ימים ברצף</span></div>
    </section>
  );
}

function ProfileScreen() {
  return (
    <section className="panel full-screen">
      <h1>פרופיל</h1>
      <div className="profile-card"><div className="avatar">O</div><h2>אושר</h2><p>רמה 12 · 1,250 / 2,000 XP</p><div className="xp"><span /></div></div>
      <div className="settings-list"><button>יעדים: Muscle Up</button><button>תרגילים מועדפים</button><button>נתונים אישיים</button><button>הגדרות</button></div>
    </section>
  );
}
