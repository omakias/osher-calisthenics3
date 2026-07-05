'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { asset, exercisesByMuscle, muscles, type MuscleId, exercises } from '../data/content';

const nav = [
  ['בית','⌂'], ['תרגילים','◧'], ['אימונים','▣'], ['מפת דרך','⚑'], ['התקדמות','▥'], ['פרופיל','○']
];

export default function HomePage() {
  const [side, setSide] = useState<'front' | 'back'>('front');
  const visibleMuscles = muscles.filter(m => m.side === side);
  const [selected, setSelected] = useState<MuscleId>('chest');
  const selectedMuscle = muscles.find(m => m.id === selected)!;
  const list = useMemo(() => exercisesByMuscle(selected).slice(0, 8), [selected]);
  const current = list[0] || exercises[0];

  return (
    <main className="app-shell">
      <aside className="sidebar">
        <div className="brand"><div className="brand-mark">OC</div><div><strong>OSHER</strong><span>CALISTHENICS</span></div></div>
        <nav>{nav.map(([label, icon], i) => <a key={label} className={i===0?'active':''}><span>{icon}</span>{label}</a>)}</nav>
        <div className="side-card"><b>🔥 12</b><span>רצף יומי</span></div>
        <div className="side-card"><b>רמה 12</b><span>1,250 / 2,000 XP</span><div className="bar"><i style={{width:'62%'}} /></div></div>
      </aside>

      <section className="dashboard">
        <header className="topbar"><div><b>🔥 12</b><b>⬢ 1,250</b></div><div className="avatar" /></header>
        <section className="muscle-map panel">
          <div className="section-title"><div><h1>מפת השרירים</h1><p>לחץ על נקודת שריר כדי לראות תרגילים מומלצים.</p></div><div className="seg"><button onClick={()=>setSide('front')} className={side==='front'?'on':''}>קדמי</button><button onClick={()=>setSide('back')} className={side==='back'?'on':''}>אחורי</button></div></div>
          <div className="body-stage">
            <img className="body-img" src={asset(side === 'front' ? '/body-real-front.png' : '/body-real-back.png')} alt="מפת גוף" />
            {visibleMuscles.map(m => (
              <button key={m.id} aria-label={m.name} title={m.name} className={`hotspot ${selected===m.id?'selected':''}`} style={{ left: `${m.x}%`, top: `${m.y}%` }} onClick={() => setSelected(m.id)}>
                <span />
              </button>
            ))}
            <div className="labels">
              {visibleMuscles.map(m => <button key={m.id} onClick={() => setSelected(m.id)} className={selected===m.id?'label selected-label':'label'} style={{ left: m.x < 50 ? '5%' : '70%', top: `${Math.max(10, Math.min(86, m.y - 2))}%` }}><b>{m.name}</b><small>{m.latin}</small></button>)}
            </div>
          </div>
          <div className="tip">💡 לחץ רק על הנקודות הכחולות. כל נקודה פותחת את התרגילים של אותו אזור.</div>
        </section>

        <section className="selected-panel panel">
          <small>שריר נבחר</small>
          <h2>{selectedMuscle.name} <span>({selectedMuscle.latin})</span></h2>
          <p>{selectedMuscle.description}</p>
          <div className="exercise-list">
            {list.map(ex => (
              <Link key={ex.id} href={`/exercises/${ex.id}`} className="exercise-row">
                <img src={asset(ex.image)} alt={ex.name}/>
                <div><b>{ex.name}</b><small className={`diff d-${ex.difficulty}`}>{ex.difficulty}</small></div>
                <span>›</span>
              </Link>
            ))}
          </div>
          <Link className="outline-btn" href={`/exercises`}>הצג את כל התרגילים</Link>
        </section>

        <section className="detail-panel panel">
          <img className="hero" src={asset(current.image)} alt={current.name}/>
          <div className="detail-content"><h2>{current.name}</h2><span className={`pill d-${current.difficulty}`}>{current.difficulty}</span><p>{current.description}</p><div className="meta">{current.equipment} • {current.secondary.map(s=>muscles.find(m=>m.id===s)?.name).join(' • ')}</div><h3>אופן הביצוע</h3><ul>{current.steps.map(s=><li key={s}>✓ {s}</li>)}</ul><h3>טעויות נפוצות</h3><ul>{current.mistakes.map(s=><li className="bad" key={s}>✕ {s}</li>)}</ul><Link href={`/exercises/${current.id}`} className="primary-btn">פתח עמוד תרגיל</Link></div>
        </section>
      </section>
    </main>
  );
}
