import Link from 'next/link';
import { asset, exercises, muscles } from '../../data/content';

export default function ExercisesPage(){
  return <main className="page-wrap">
    <header className="page-head"><Link href="/" className="back">‹</Link><div><h1>ספריית תרגילים</h1><p>חיפוש, סינון ופתיחה של כל תרגיל בעמוד מקצועי.</p></div></header>
    <div className="filters"><input placeholder="חיפוש תרגיל..."/><button>סנן</button><button>כל הרמות</button></div>
    <div className="category-strip">{muscles.map(m=><span key={m.id}>● {m.name}</span>)}</div>
    <section className="grid-list">{exercises.map(ex=><Link href={`/exercises/${ex.id}`} className="exercise-card" key={ex.id}><div className="video-thumb"><img src={asset(ex.image)} alt={ex.name}/><span className="play">▶</span></div><h2>{ex.name}</h2><p>{ex.description}</p><div><span className={`pill d-${ex.difficulty}`}>{ex.difficulty}</span><small>{ex.equipment}</small></div></Link>)}</section>
  </main>
}
