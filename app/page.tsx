'use client';
import { useMemo, useState } from 'react';
import { Dumbbell, Home, Trophy, BarChart3, User, Target, Flame, Search, CalendarDays, Map, Brain, ChevronLeft, Heart, Settings, BookOpen } from 'lucide-react';
import { exercises, muscleGroups, roadmap } from '../data/content';

type Tab='home'|'exercises'|'workouts'|'roadmap'|'progress'|'profile'|'detail'|'active';
export default function App(){
 const [tab,setTab]=useState<Tab>('home'); const [group,setGroup]=useState('chest'); const [selected,setSelected]=useState(exercises[0]);
 const filtered=useMemo(()=>exercises.filter(e=>e.group===group),[group]);
 const openGroup=(id:string)=>{setGroup(id);setTab('exercises')};
 const openExercise=(ex:any)=>{setSelected(ex);setTab('detail')};
 return <main className="app-shell">
  <div className="phone">
    <Status />
    {tab==='home'&&<HomeScreen openGroup={openGroup} setTab={setTab}/>} 
    {tab==='exercises'&&<ExerciseScreen group={group} setGroup={setGroup} filtered={filtered} openExercise={openExercise}/>} 
    {tab==='detail'&&<DetailScreen ex={selected} setTab={setTab}/>} 
    {tab==='workouts'&&<Workouts setTab={setTab}/>} 
    {tab==='roadmap'&&<Roadmap />} 
    {tab==='progress'&&<Progress />} 
    {tab==='profile'&&<Profile />} 
    {tab==='active'&&<ActiveWorkout setTab={setTab}/>} 
    <BottomNav tab={tab} setTab={setTab}/>
  </div>
 </main>
}
function Status(){return <div className="status"><span>9:41</span><span>◔ 5G 🔋</span></div>}
function Header({title,children}:{title:string,children?:React.ReactNode}){return <header className="header"><div><h1>{title}</h1><p>Own Your Strength</p></div>{children}</header>}
function HomeScreen({openGroup,setTab}:any){return <section className="screen"><Header title="שלום אושר 👋"><div className="top-stats"><span><Flame size={18}/>12</span><span><Trophy size={18}/>4</span></div></Header>
 <div className="hero-card compact"><div><b>בחר אזור בגוף</b><p>לחץ על שריר כדי לראות תרגילים מתאימים</p></div><button onClick={()=>setTab('active')}>התחל אימון</button></div>
 <div className="muscle-map-card"><div className="body-wrap"><img src="/osher-calisthenics3/body.svg" onError={(e:any)=>{e.currentTarget.src='/body.svg'}} alt="מפת שרירים" />{muscleGroups.map(m=><button key={m.id} onClick={()=>openGroup(m.id)} className={`hotspot ${m.id}`} style={{left:`${m.x}%`,top:`${m.y}%`}}><span>{m.name}</span></button>)}</div></div>
 <div className="chips-grid">{muscleGroups.map(m=><button key={m.id} onClick={()=>openGroup(m.id)}><span>{m.icon}</span><b>{m.name}</b><small>{m.count} תרגילים</small></button>)}</div>
 <h2>פעולות מהירות</h2><div className="quick"><button onClick={()=>setTab('workouts')}><CalendarDays/>תוכניות</button><button onClick={()=>setTab('roadmap')}><Map/>Roadmap</button><button onClick={()=>setTab('progress')}><BarChart3/>התקדמות</button><button><Brain/>AI Coach</button></div>
 </section>}
function ExerciseScreen({group,setGroup,filtered,openExercise}:any){const current=muscleGroups.find(m=>m.id===group);return <section className="screen"><Header title="ספריית תרגילים"><button className="round"><Search size={18}/></button></Header>
 <div className="category-row">{muscleGroups.map(m=><button className={group===m.id?'active':''} onClick={()=>setGroup(m.id)} key={m.id}><span>{m.icon}</span>{m.name}</button>)}</div>
 <div className="search">חיפוש תרגיל...</div><h2>{current?.icon} {current?.name}</h2>
 <div className="list">{filtered.map((ex:any)=><button className="exercise-card" onClick={()=>openExercise(ex)} key={ex.id}><img src={`/osher-calisthenics3${ex.img}`} onError={(e:any)=>{e.currentTarget.src=ex.img}}/><div><b>{ex.name}</b><span>{ex.level}</span><small>{ex.muscles.join(' • ')}</small></div><ChevronLeft/></button>)}</div></section>}
function DetailScreen({ex,setTab}:any){return <section className="screen detail"><div className="nav-head"><button onClick={()=>setTab('exercises')}>‹</button><b>{ex.name}</b><Heart size={20}/></div><img className="detail-img" src={`/osher-calisthenics3${ex.img}`} onError={(e:any)=>{e.currentTarget.src=ex.img}}/><div className="tags"><span>{ex.level}</span>{ex.muscles.map((m:string)=><span key={m}>{m}</span>)}</div><h2>{ex.en}</h2><p>{ex.desc}</p><h3>איך לבצע</h3><ol>{ex.steps.map((s:string)=><li key={s}>{s}</li>)}</ol><h3>שרירים עובדים</h3><div className="muscle-mini"><img src="/osher-calisthenics3/body.svg" onError={(e:any)=>{e.currentTarget.src='/body.svg'}}/><img src="/osher-calisthenics3/body.svg" onError={(e:any)=>{e.currentTarget.src='/body.svg'}}/></div><button className="primary">הוסף לאימון</button></section>}
function Workouts({setTab}:any){return <section className="screen"><Header title="תוכניות אימון"/><div className="tabs"><button className="active">היום</button><button>השבוע</button><button>ספריה</button></div>{['מתחילים 30 יום','Muscle Up','Planche','כוח פלג גוף עליון'].map((x,i)=><div className="program" key={x}><img src={`/osher-calisthenics3/exercises/${i==0?'pull-up':i==1?'dips':i==2?'push-up':'pike-push-up'}.svg`} onError={(e:any)=>{e.currentTarget.src=`/exercises/push-up.svg`}}/><div><b>{x}</b><span>{i+3} אימונים בשבוע • {i? 'בינוני':'מתחיל'}</span><div className="bar"><i style={{width:`${25+i*18}%`}}/></div></div><button onClick={()=>setTab('active')}>Start</button></div>)}</section>}
function Roadmap(){return <section className="screen"><Header title="Skill Roadmap"/><div className="level-card"><b>Muscle Up</b><span>רמה 3 • 60%</span><div className="bar"><i style={{width:'60%'}}/></div></div><div className="road">{roadmap.map(([name,status],i)=><div className={`step ${status==='נעול'?'locked':status==='בתהליך'?'now':''}`} key={name}><em>{i+1}</em><div><b>{name}</b><span>{status}</span></div><strong>{status==='נעול'?'🔒':'✓'}</strong></div>)}</div></section>}
function Progress(){return <section className="screen"><Header title="התקדמות"/><div className="stats"><div><b>48</b><span>אימונים</span></div><div><b>18:45</b><span>שעות</span></div><div><b>12,450</b><span>קלוריות</span></div></div><div className="chart">{[20,65,42,70,50,83,72,98].map((h,i)=><i key={i} style={{height:h+'%'}}/> )}</div><h2>הישגים אחרונים</h2>{['100 שכיבות סמיכה','20 מתח','10 ימים ברצף'].map(x=><div className="achievement" key={x}>🏆 <b>{x}</b><span>הושג</span></div>)}</section>}
function Profile(){return <section className="screen"><Header title="פרופיל"><Settings/></Header><div className="profile"><img src="/osher-calisthenics3/body.svg" onError={(e:any)=>{e.currentTarget.src='/body.svg'}}/><div><h2>אושר</h2><span>רמה 12</span><div className="bar"><i style={{width:'62%'}}/></div></div></div><div className="stats"><div><b>48</b><span>אימונים</span></div><div><b>12</b><span>רצף</span></div><div><b>24</b><span>הישגים</span></div></div>{['יעדים','תרגילים מועדפים','נתונים אישיים','הגדרות'].map(x=><div className="menu" key={x}>{x}<ChevronLeft/></div>)}</section>}
function ActiveWorkout({setTab}:any){return <section className="screen active-work"><div className="nav-head"><button onClick={()=>setTab('home')}>×</button><b>אימון פעיל</b><span></span></div><h2>שכיבות סמיכה</h2><small>סט 2 מתוך 4</small><strong>12</strong><p>חזרות</p><div className="timer">00:58<br/><small>מנוחה</small></div><button className="primary">סיים סט ✓</button></section>}
function BottomNav({tab,setTab}:any){const items=[['home',Home,'בית'],['exercises',Dumbbell,'תרגילים'],['workouts',CalendarDays,'אימונים'],['roadmap',Map,'Roadmap'],['progress',BarChart3,'התקדמות'],['profile',User,'פרופיל']];return <nav className="bottom">{items.map(([id,Icon,label]:any)=><button onClick={()=>setTab(id)} className={tab===id?'on':''} key={id}><Icon size={20}/><span>{label}</span></button>)}</nav>}
