export interface WordItem {
  word: string;
  letters: string[];
  emoji: string;
}

export const wordLists = {
  easy: [
    { word: 'CAT', letters: ['C', 'A', 'T'], emoji: '🐱' },
    { word: 'DOG', letters: ['D', 'O', 'G'], emoji: '🐶' },
    { word: 'SUN', letters: ['S', 'U', 'N'], emoji: '☀️' },
    { word: 'BUS', letters: ['B', 'U', 'S'], emoji: '🚌' },
    { word: 'HAT', letters: ['H', 'A', 'T'], emoji: '🎩' },
    { word: 'PEN', letters: ['P', 'E', 'N'], emoji: '🖊️' },
    { word: 'CUP', letters: ['C', 'U', 'P'], emoji: '☕' },
    { word: 'BED', letters: ['B', 'E', 'D'], emoji: '🛏️' },
  ],
  medium: [
    { word: 'BOOK', letters: ['B', 'O', 'O', 'K'], emoji: '📚' },
    { word: 'TREE', letters: ['T', 'R', 'E', 'E'], emoji: '🌳' },
    { word: 'STAR', letters: ['S', 'T', 'A', 'R'], emoji: '⭐' },
    { word: 'FISH', letters: ['F', 'I', 'S', 'H'], emoji: '🐟' },
    { word: 'BALL', letters: ['B', 'A', 'L', 'L'], emoji: '⚽' },
  ],
} as const;
