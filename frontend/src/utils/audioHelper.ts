// Utility functions for playing phonetic sounds using Web Speech API
// All letter sounds follow strict phonics/phonetics rules (short vowel sounds, consonant sounds)

// Phonics-based pronunciation map
// Each letter maps to a word that demonstrates its phonetic sound
// The speech synthesis will say the phonetic sound, not the letter name
const phonicsMap: Record<string, string> = {
  // Vowels - short vowel sounds
  A: 'æ', // /æ/ as in "apple"
  E: 'ɛ', // /ɛ/ as in "egg"
  I: 'ɪ', // /ɪ/ as in "igloo"
  O: 'ɒ', // /ɒ/ as in "orange"
  U: 'ʌ', // /ʌ/ as in "umbrella"
  // Consonants - their phonetic sounds
  B: 'buh',
  C: 'kuh',
  D: 'duh',
  F: 'fuh',
  G: 'guh',
  H: 'huh',
  J: 'juh',
  K: 'kuh',
  L: 'luh',
  M: 'muh',
  N: 'nuh',
  P: 'puh',
  Q: 'kwuh',
  R: 'ruh',
  S: 'sss',
  T: 'tuh',
  V: 'vuh',
  W: 'wuh',
  X: 'ks',
  Y: 'yuh',
  Z: 'zzz',
};

// Example words for each letter (phonics-based)
export const letterExamples: Record<string, { word: string; emoji: string }> = {
  A: { word: 'apple', emoji: '🍎' },
  B: { word: 'ball', emoji: '⚽' },
  C: { word: 'cat', emoji: '🐱' },
  D: { word: 'dog', emoji: '🐶' },
  E: { word: 'egg', emoji: '🥚' },
  F: { word: 'fish', emoji: '🐟' },
  G: { word: 'goat', emoji: '🐐' },
  H: { word: 'hat', emoji: '🎩' },
  I: { word: 'igloo', emoji: '🏔️' },
  J: { word: 'jar', emoji: '🫙' },
  K: { word: 'kite', emoji: '🪁' },
  L: { word: 'lion', emoji: '🦁' },
  M: { word: 'moon', emoji: '🌙' },
  N: { word: 'nest', emoji: '🪺' },
  O: { word: 'orange', emoji: '🍊' },
  P: { word: 'pen', emoji: '🖊️' },
  Q: { word: 'queen', emoji: '👑' },
  R: { word: 'rabbit', emoji: '🐰' },
  S: { word: 'sun', emoji: '☀️' },
  T: { word: 'tree', emoji: '🌳' },
  U: { word: 'umbrella', emoji: '☂️' },
  V: { word: 'van', emoji: '🚐' },
  W: { word: 'water', emoji: '💧' },
  X: { word: 'box', emoji: '📦' },
  Y: { word: 'yak', emoji: '🦬' },
  Z: { word: 'zebra', emoji: '🦓' },
};

export async function playLetterSound(letter: string): Promise<void> {
  if (!('speechSynthesis' in window)) {
    console.warn('Speech synthesis not supported');
    return;
  }

  const upperLetter = letter.toUpperCase();
  // Use the phonics sound mapping, fall back to the letter itself
  const phoneticSound = phonicsMap[upperLetter] || letter.toLowerCase();

  return new Promise((resolve) => {
    window.speechSynthesis.cancel();

    // First say the phonetic sound
    const soundUtterance = new SpeechSynthesisUtterance(phoneticSound);
    soundUtterance.rate = 0.6;
    soundUtterance.pitch = 1.1;
    soundUtterance.volume = 1;

    // Then say the example word
    const example = letterExamples[upperLetter];
    if (example) {
      const wordUtterance = new SpeechSynthesisUtterance(`as in ${example.word}`);
      wordUtterance.rate = 0.75;
      wordUtterance.pitch = 1.1;
      wordUtterance.volume = 1;
      wordUtterance.onend = () => resolve();
      wordUtterance.onerror = () => resolve();

      soundUtterance.onend = () => {
        window.speechSynthesis.speak(wordUtterance);
      };
    } else {
      soundUtterance.onend = () => resolve();
    }

    soundUtterance.onerror = () => resolve();
    window.speechSynthesis.speak(soundUtterance);
  });
}

export async function playWordSound(word: string): Promise<void> {
  if (!('speechSynthesis' in window)) {
    console.warn('Speech synthesis not supported');
    return;
  }

  return new Promise((resolve) => {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.rate = 0.75;
    utterance.pitch = 1.1;
    utterance.volume = 1;

    utterance.onend = () => resolve();
    utterance.onerror = () => resolve();

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  });
}

export async function playSuccessSound(): Promise<void> {
  if (!('speechSynthesis' in window)) {
    console.warn('Speech synthesis not supported');
    return;
  }

  return new Promise((resolve) => {
    const utterance = new SpeechSynthesisUtterance('Great job!');
    utterance.rate = 1;
    utterance.pitch = 1.3;
    utterance.volume = 0.8;

    utterance.onend = () => resolve();
    utterance.onerror = () => resolve();

    window.speechSynthesis.speak(utterance);
  });
}
