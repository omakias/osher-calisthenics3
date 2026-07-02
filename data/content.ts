export type Muscle = {
  id: string;
  name: string;
  subtitle: string;
  exercises: string[];
};

export const muscles: Muscle[] = [
  { id: 'chest', name: 'חזה', subtitle: 'דחיפה, כוח פלג גוף עליון', exercises: ['שכיבות סמיכה', 'שכיבות סמיכה יהלום', 'דיפס', 'Pseudo Planche Push Up'] },
  { id: 'back', name: 'גב', subtitle: 'משיכה, מתח ו-Muscle Up', exercises: ['Dead Hang', 'מתח שלילי', 'מתח', 'Chest To Bar', 'Explosive Pull Up'] },
  { id: 'shoulders', name: 'כתפיים', subtitle: 'יציבות, Handstand ו-Planche', exercises: ['Pike Push Up', 'Wall Handstand', 'Planche Lean', 'Handstand Hold'] },
  { id: 'core', name: 'בטן וליבה', subtitle: 'שליטה, יציבות וסטטיקה', exercises: ['Plank', 'Hollow Hold', 'L-Sit', 'Hanging Leg Raise'] },
  { id: 'legs', name: 'רגליים', subtitle: 'כוח, קפיצה ושליטה', exercises: ['Squat', 'Lunge', 'Bulgarian Split Squat', 'Pistol Squat Progression'] },
  { id: 'arms', name: 'ידיים', subtitle: 'יד קדמית ואחורית', exercises: ['Chin Up', 'Bodyweight Curl', 'Bench Dip', 'Diamond Push Up'] },
];

export const roadmap = [
  'Dead Hang',
  'Scapula Pull Up',
  'Negative Pull Up',
  'Pull Up',
  'Chest To Bar',
  'Explosive Pull Up',
  'Muscle Up',
];
