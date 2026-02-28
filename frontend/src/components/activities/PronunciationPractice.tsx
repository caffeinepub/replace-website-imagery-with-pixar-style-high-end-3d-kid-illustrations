import { WordCard } from './WordCard';
import { wordLists } from '@/data/wordLists';
import { Volume2 } from 'lucide-react';

export function PronunciationPractice() {
  const practiceWords = [
    ...wordLists.easy.slice(0, 6),
    ...wordLists.medium.slice(0, 3),
  ];

  return (
    <div className="rounded-3xl border-2 border-border shadow-glow overflow-hidden"
      style={{ background: 'linear-gradient(160deg, oklch(0.97 0.02 185), oklch(0.98 0.01 155))' }}>
      <div className="p-6 md:p-8 space-y-6">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold mb-3"
            style={{ background: 'oklch(0.94 0.04 185)', color: 'oklch(0.38 0.16 175)' }}>
            <Volume2 className="h-4 w-4" />
            Pronunciation Practice
          </div>
          <h3 className="text-2xl font-bold font-display mb-2">Hear & Say Words</h3>
          <p className="text-muted-foreground">
            Click the <strong>"Hear It"</strong> button on each card to hear the word pronounced using phonics rules. Then try saying it yourself!
          </p>
        </div>

        {/* Word Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {practiceWords.map((item, index) => (
            <WordCard key={index} word={item.word} emoji={item.emoji} />
          ))}
        </div>

        {/* Tip */}
        <div className="p-4 rounded-2xl text-center text-sm"
          style={{ background: 'oklch(0.94 0.04 185)', color: 'oklch(0.38 0.16 175)' }}>
          💡 <strong>Phonics Tip:</strong> Sound out each letter separately, then blend them together: C-A-T → "cat"!
        </div>
      </div>
    </div>
  );
}
