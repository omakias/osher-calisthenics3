import Link from 'next/link';
import { asset, exercises, getExercise, muscles } from '../../../data/content';

export function generateStaticParams(){ return exercises.map(e => ({ id: e.id })); }

export default function ExerciseDetail({ params }: { params: { id: string } }){
  const ex = getExercise(params.id) || exercises[0];
  const primary = muscles.find(m=>m.id===ex.muscle)?.name || '';
  const secondary = ex.secondary.map(s=>muscles.find(m=>m.id===s)?.name).filter(Boolean).join(' • ');
  return <main className="exercise-detail-page">
    <Link href="/exercises" className="back floating">‹ חזרה</Link>
    <section className="exercise-hero panel"><div className="video-frame"><img src={asset(ex.image)} alt={ex.name}/><button>▶</button><small>וידאו הדגמה יתווסף כאן</small></div><div className="detail-main"><h1>{ex.name}</h1>{ex.english && <p>{ex.english}</p>}<span className={`pill d-${ex.difficulty}`}>{ex.difficulty}</span><p>{ex.description}</p><div className="info-grid"><b>שריר עיקרי: {primary}</b><b>שרירים נוספים: {secondary || 'ללא'}</b><b>ציוד: {ex.equipment}</b></div><button className="primary-btn">התחל תרגיל</button></div></section>
    <section className="detail-sections"><div className="panel"><h2>אופן הביצוע</h2><ol>{ex.steps.map(s=><li key={s}>{s}</li>)}</ol></div><div className="panel"><h2>טעויות נפוצות</h2><ul>{ex.mistakes.map(s=><li className="bad" key={s}>{s}</li>)}</ul></div><div className="panel"><h2>טיפים</h2><ul>{ex.tips.map(s=><li key={s}>{s}</li>)}</ul></div></section>
  </main>
}
