export interface SoundGameQuestion {
  question: string;
  targetSound: string;
  options: Array<{
    word: string;
    emoji: string;
  }>;
  correctAnswer: number;
  successMessage: string;
  encouragementMessage: string;
}

export const soundGames: SoundGameQuestion[] = [
  {
    question: 'Which word starts with the /B/ sound?',
    targetSound: 'B',
    options: [
      { word: 'Ball', emoji: '⚽' },
      { word: 'Cat', emoji: '🐱' },
      { word: 'Dog', emoji: '🐶' },
      { word: 'Sun', emoji: '☀️' },
    ],
    correctAnswer: 0,
    successMessage: 'Excellent! Ball starts with /B/! 🎉',
    encouragementMessage: 'Good try! Ball starts with /B/. Keep practicing! 💪',
  },
  {
    question: 'Which word starts with the /C/ sound?',
    targetSound: 'C',
    options: [
      { word: 'Tree', emoji: '🌳' },
      { word: 'Cup', emoji: '☕' },
      { word: 'Fish', emoji: '🐟' },
      { word: 'Hat', emoji: '🎩' },
    ],
    correctAnswer: 1,
    successMessage: 'Amazing! Cup starts with /C/! 🎊',
    encouragementMessage: 'Nice effort! Cup starts with /C/. You\'re learning! 🌟',
  },
  {
    question: 'Which word starts with the /D/ sound?',
    targetSound: 'D',
    options: [
      { word: 'Pen', emoji: '🖊️' },
      { word: 'Book', emoji: '📚' },
      { word: 'Dog', emoji: '🐶' },
      { word: 'Star', emoji: '⭐' },
    ],
    correctAnswer: 2,
    successMessage: 'Fantastic! Dog starts with /D/! 🎈',
    encouragementMessage: 'Great attempt! Dog starts with /D/. Keep going! 🚀',
  },
  {
    question: 'Which word starts with the /S/ sound?',
    targetSound: 'S',
    options: [
      { word: 'Cat', emoji: '🐱' },
      { word: 'Sun', emoji: '☀️' },
      { word: 'Ball', emoji: '⚽' },
      { word: 'Tree', emoji: '🌳' },
    ],
    correctAnswer: 1,
    successMessage: 'Wonderful! Sun starts with /S/! ✨',
    encouragementMessage: 'Good job trying! Sun starts with /S/. You\'re doing great! 🌈',
  },
  {
    question: 'Which word starts with the /T/ sound?',
    targetSound: 'T',
    options: [
      { word: 'Dog', emoji: '🐶' },
      { word: 'Fish', emoji: '🐟' },
      { word: 'Tree', emoji: '🌳' },
      { word: 'Cup', emoji: '☕' },
    ],
    correctAnswer: 2,
    successMessage: 'Superb! Tree starts with /T/! 🎯',
    encouragementMessage: 'Well done! Tree starts with /T/. Keep practicing! 💫',
  },
  {
    question: 'Which word starts with the /F/ sound?',
    targetSound: 'F',
    options: [
      { word: 'Hat', emoji: '🎩' },
      { word: 'Fish', emoji: '🐟' },
      { word: 'Bus', emoji: '🚌' },
      { word: 'Pen', emoji: '🖊️' },
    ],
    correctAnswer: 1,
    successMessage: 'Perfect! Fish starts with /F/! 🎪',
    encouragementMessage: 'Nice work! Fish starts with /F/. You\'re awesome! 🌟',
  },
];
