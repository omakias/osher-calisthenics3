export const muscleGroups = [
  { id:'chest', name:'חזה', icon:'💪', count:8, x:44, y:24 },
  { id:'back', name:'גב', icon:'🪽', count:9, x:68, y:34 },
  { id:'shoulders', name:'כתפיים', icon:'🏋️', count:7, x:29, y:22 },
  { id:'arms', name:'ידיים', icon:'💪', count:10, x:73, y:42 },
  { id:'core', name:'בטן', icon:'▦', count:11, x:50, y:41 },
  { id:'legs', name:'רגליים', icon:'🦵', count:12, x:46, y:70 },
];
export const exercises = [
  {id:'push-up', name:'שכיבות סמיכה', en:'Push Up', group:'chest', level:'מתחיל', img:'/exercises/push-up.svg', muscles:['חזה','יד אחורית','כתפיים'], desc:'תרגיל בסיסי לחיזוק פלג גוף עליון ושליטה בגוף.', steps:['הנח ידיים מעט רחב מרוחב הכתפיים','שמור גוף ישר ובטן אסופה','רד בשליטה עד שהחזה קרוב לרצפה','דחוף חזרה למעלה בלי לשבור את הקו של הגוף']},
  {id:'incline-push-up', name:'שכיבות סמיכה בשיפוע', en:'Incline Push Up', group:'chest', level:'מתחיל', img:'/exercises/incline-push-up.svg', muscles:['חזה','כתפיים'], desc:'וריאציה קלה ללימוד דחיפה נכונה.', steps:['הנח ידיים על ספסל','שמור גוף ישר','רד עד מגע קל','דחוף מעלה בשליטה']},
  {id:'dips', name:'דיפס במקבילים', en:'Dips', group:'chest', level:'בינוני', img:'/exercises/dips.svg', muscles:['חזה','יד אחורית','כתפיים'], desc:'תרגיל כוח חזק לחזה וליד אחורית.', steps:['אחוז במקבילים','רד עד כיפוף מרפקים','שמור כתפיים יציבות','דחוף למעלה']},
  {id:'pull-up', name:'מתח', en:'Pull Up', group:'back', level:'בינוני', img:'/exercises/pull-up.svg', muscles:['גב','יד קדמית'], desc:'תרגיל מרכזי לבניית גב וכוח משיכה.', steps:['אחוז במוט','התחל מתלייה מלאה','משוך חזה למוט','רד בשליטה']},
  {id:'australian-row', name:'חתירה אוסטרלית', en:'Australian Row', group:'back', level:'מתחיל', img:'/exercises/australian-row.svg', muscles:['גב','יד קדמית'], desc:'תרגיל הכנה מצוין למתח.', steps:['שכב מתחת למוט נמוך','שמור גוף ישר','משוך חזה למוט','רד לאט']},
  {id:'pike-push-up', name:'שכיבות פייק', en:'Pike Push Up', group:'shoulders', level:'בינוני', img:'/exercises/pike-push-up.svg', muscles:['כתפיים','יד אחורית'], desc:'תרגיל כתפיים בדרך לעמידת ידיים.', steps:['צור צורת V הפוכה','כופף מרפקים','הורד ראש לכיוון הרצפה','דחוף חזרה']},
  {id:'diamond-push-up', name:'שכיבות יהלום', en:'Diamond Push Up', group:'arms', level:'בינוני', img:'/exercises/diamond-push-up.svg', muscles:['יד אחורית','חזה'], desc:'דגש חזק על יד אחורית.', steps:['קרב כפות ידיים','שמור מרפקים קרובים','רד בשליטה','דחוף מעלה']},
  {id:'plank', name:'פלאנק', en:'Plank', group:'core', level:'מתחיל', img:'/exercises/plank.svg', muscles:['בטן','ליבה'], desc:'תרגיל יציבות בסיסי לליבה.', steps:['מרפקים מתחת לכתפיים','כווץ בטן וישבן','שמור גוף ישר','נשום רגוע']},
  {id:'hanging-leg-raise', name:'הרמות רגליים בתלייה', en:'Hanging Leg Raise', group:'core', level:'מתקדם', img:'/exercises/hanging-leg-raise.svg', muscles:['בטן','כופפי ירך'], desc:'תרגיל בטן מתקדם לשליטה בליבה.', steps:['תלה על המוט','מנע תנופה','הרם רגליים','הורד לאט']},
  {id:'squat', name:'סקוואט', en:'Squat', group:'legs', level:'מתחיל', img:'/exercises/squat.svg', muscles:['ירך קדמית','ישבן'], desc:'בסיס לחיזוק הרגליים.', steps:['עמוד ברוחב כתפיים','שלח אגן לאחור','רד עם גב ישר','עלה דרך העקבים']},
  {id:'pistol-squat', name:'פיסטול סקוואט', en:'Pistol Squat', group:'legs', level:'מתקדם', img:'/exercises/pistol-squat.svg', muscles:['ירך קדמית','ישבן','ליבה'], desc:'תרגיל רגל אחת מתקדם.', steps:['עמוד על רגל אחת','הושט רגל קדימה','רד בשליטה','עלה חזרה']},
];
export const roadmap = [
  ['Dead Hang','הושלם'],['Scapula Pull Up','הושלם'],['Pull Up','הושלם'],['Chest To Bar','בתהליך'],['Explosive Pull Up','נעול'],['Transition','נעול'],['Muscle Up','נעול']
];
