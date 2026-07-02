export type MuscleKey = 'chest' | 'back' | 'shoulders' | 'biceps' | 'triceps' | 'core' | 'quads' | 'hamstrings' | 'glutes' | 'calves';

export const muscles: Record<MuscleKey, { label: string; subtitle: string }> = {
  chest: { label: 'חזה', subtitle: 'דחיפה, שליטה וכוח פלג גוף עליון' },
  back: { label: 'גב', subtitle: 'משיכות, מתח ו-Muscle Up' },
  shoulders: { label: 'כתפיים', subtitle: 'יציבות, עמידת ידיים ו-Planche' },
  biceps: { label: 'יד קדמית', subtitle: 'משיכות ושליטה במתח' },
  triceps: { label: 'יד אחורית', subtitle: 'דיפס, נעילות ודחיפות' },
  core: { label: 'בטן וליבה', subtitle: 'יציבות, פלאנק ו-L-Sit' },
  quads: { label: 'ירך קדמית', subtitle: 'סקוואטים וכוח רגליים' },
  hamstrings: { label: 'ירך אחורית', subtitle: 'שליטה, גשר ופוסטריור צ׳יין' },
  glutes: { label: 'ישבן', subtitle: 'כוח אגן וקפיצות' },
  calves: { label: 'שוקיים', subtitle: 'קפיצה, יציבות וקרסוליים' },
};

export const exercises: Record<MuscleKey, { name: string; level: string; reps: string; text: string }[]> = {
  chest: [
    { name: 'שכיבות סמיכה', level: 'מתחיל', reps: '3×8-12', text: 'תרגיל בסיס לחזה, כתפיים ויד אחורית.' },
    { name: 'שכיבות סמיכה בשיפוע', level: 'מתחיל', reps: '3×10', text: 'גרסה קלה ללימוד טכניקה נכונה.' },
    { name: 'דיפס במקבילים', level: 'בינוני', reps: '4×6-10', text: 'תרגיל חזק לחזה תחתון ויד אחורית.' },
    { name: 'Archer Push Up', level: 'מתקדם', reps: '3×5 לכל צד', text: 'מעבר מתקדם לכוח חד-צדדי.' },
  ],
  back: [
    { name: 'Dead Hang', level: 'מתחיל', reps: '3×20 שניות', text: 'בסיס לאחיזה, כתפיים ומתח.' },
    { name: 'Scapula Pull Up', level: 'מתחיל', reps: '3×8', text: 'לומד להפעיל שכמות לפני משיכה.' },
    { name: 'מתח', level: 'בינוני', reps: '4×5-8', text: 'תרגיל מפתח לגב ויד קדמית.' },
    { name: 'Chest To Bar', level: 'מתקדם', reps: '4×3-6', text: 'שלב חשוב בדרך ל-Muscle Up.' },
  ],
  shoulders: [
    { name: 'Pike Push Up', level: 'בינוני', reps: '4×6-10', text: 'בסיס לכוח כתפיים ולעמידת ידיים.' },
    { name: 'Wall Handstand Hold', level: 'בינוני', reps: '4×20 שניות', text: 'לימוד עמידת ידיים בטוחה.' },
    { name: 'Planche Lean', level: 'מתקדם', reps: '4×15 שניות', text: 'בסיס ל-Planche.' },
  ],
  biceps: [
    { name: 'Chin Up', level: 'בינוני', reps: '4×5-8', text: 'משיכה עם דגש על יד קדמית.' },
    { name: 'Australian Chin Row', level: 'מתחיל', reps: '3×10', text: 'גרסה קלה לחיזוק משיכות.' },
  ],
  triceps: [
    { name: 'Bench Dips', level: 'מתחיל', reps: '3×12', text: 'תרגיל כניסה ליד אחורית.' },
    { name: 'Diamond Push Up', level: 'בינוני', reps: '4×6-10', text: 'דגש חזק על יד אחורית.' },
  ],
  core: [
    { name: 'פלאנק', level: 'מתחיל', reps: '3×40 שניות', text: 'בסיס יציבות וליבה.' },
    { name: 'Hollow Body Hold', level: 'בינוני', reps: '4×20 שניות', text: 'בסיס לכל תרגילי ה-Skills.' },
    { name: 'L-Sit Tuck', level: 'בינוני', reps: '4×15 שניות', text: 'הכנה ל-L-Sit מלא.' },
  ],
  quads: [
    { name: 'סקוואט', level: 'מתחיל', reps: '4×15', text: 'בסיס לרגליים חזקות.' },
    { name: 'Bulgarian Split Squat', level: 'בינוני', reps: '3×8 לכל רגל', text: 'כוח רגל חד צדדי.' },
  ],
  hamstrings: [
    { name: 'Glute Bridge', level: 'מתחיל', reps: '3×15', text: 'חיזוק אחורי של הירך והישבן.' },
    { name: 'Nordic Curl Negative', level: 'מתקדם', reps: '4×3', text: 'תרגיל מתקדם לירך אחורית.' },
  ],
  glutes: [
    { name: 'Hip Thrust', level: 'מתחיל', reps: '4×12', text: 'חיזוק ישבן ואגן.' },
    { name: 'Jump Squat', level: 'בינוני', reps: '4×10', text: 'כוח מתפרץ לרגליים.' },
  ],
  calves: [
    { name: 'Calf Raises', level: 'מתחיל', reps: '4×20', text: 'חיזוק שוקיים וקרסול.' },
    { name: 'Single Leg Calf Raise', level: 'בינוני', reps: '3×12 לכל רגל', text: 'שליטה וכוח בשוק.' },
  ],
};

export const roadmap = [
  'Dead Hang',
  'Scapula Pull Up',
  'Negative Pull Up',
  'Pull Up',
  'Chest To Bar',
  'Explosive Pull Up',
  'Muscle Up'
];
