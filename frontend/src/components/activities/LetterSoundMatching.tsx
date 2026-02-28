import { useState } from 'react';
import { Volume2, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { playLetterSound, letterExamples } from '@/utils/audioHelper';
import { generatedImages } from '@/assets/generatedImages';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export function LetterSoundMatching() {
  const [activeLetter, setActiveLetter] = useState<string | null>(null);
  const [playingLetter, setPlayingLetter] = useState<string | null>(null);

  const handleLetterClick = async (letter: string) => {
    if (playingLetter) return;
    setActiveLetter(letter);
    setPlayingLetter(letter);
    await playLetterSound(letter);
    setTimeout(() => {
      setPlayingLetter(null);
    }, 1500);
  };

  const activeExample = activeLetter ? letterExamples[activeLetter] : null;

  return (
    <div className="rounded-3xl border-2 border-border shadow-glow overflow-hidden"
      style={{ background: 'linear-gradient(160deg, oklch(0.97 0.02 230), oklch(0.98 0.01 185))' }}>
      {/* Banner */}
      <div className="relative overflow-hidden">
        <img
          src={generatedImages.alphabetBanner}
          alt="Colorful alphabet banner"
          className="w-full h-32 object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, oklch(0.52 0.18 240 / 0.85), oklch(0.58 0.16 175 / 0.85))' }}>
          <div className="text-center text-white">
            <h3 className="text-2xl font-bold font-display">Alphabet Sound Explorer</h3>
            <p className="text-sm text-white/90">Click any letter to hear its phonics sound!</p>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-8 space-y-6">
        {/* Info Banner */}
        <div className="flex items-start gap-3 p-4 rounded-2xl border"
          style={{ background: 'oklch(0.94 0.04 230)', borderColor: 'oklch(0.62 0.18 240 / 0.2)' }}>
          <Info className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <p className="text-sm text-foreground/80">
            <strong>Phonics Rule:</strong> We say the <em>sound</em> of each letter, not its name. For example, "A" says <strong>/æ/</strong> as in <strong>"apple"</strong> — not "ay"!
          </p>
        </div>

        {/* Alphabet Grid */}
        <div className="grid grid-cols-5 sm:grid-cols-7 md:grid-cols-9 lg:grid-cols-13 gap-2 md:gap-3">
          {alphabet.map((letter) => {
            const example = letterExamples[letter];
            const isActive = activeLetter === letter;
            const isPlaying = playingLetter === letter;
            return (
              <button
                key={letter}
                onClick={() => handleLetterClick(letter)}
                disabled={!!playingLetter && !isPlaying}
                className={`
                  relative h-14 w-full flex flex-col items-center justify-center rounded-2xl border-2 font-bold text-lg transition-all duration-200
                  ${isActive
                    ? 'border-primary text-white scale-110 shadow-glow'
                    : 'border-border bg-white hover:border-primary/50 hover:scale-105 hover:shadow-soft text-foreground'
                  }
                  ${isPlaying ? 'animate-wiggle' : ''}
                  disabled:opacity-50 disabled:cursor-not-allowed
                `}
                style={isActive ? { background: 'linear-gradient(135deg, oklch(0.52 0.18 240), oklch(0.58 0.16 175))' } : {}}
                title={example ? `${letter} as in ${example.word}` : letter}
              >
                {isPlaying ? (
                  <Volume2 className="h-5 w-5 animate-pulse-soft" />
                ) : (
                  <>
                    <span>{letter}</span>
                    {example && <span className="text-xs leading-none opacity-70">{example.emoji}</span>}
                  </>
                )}
              </button>
            );
          })}
        </div>

        {/* Active Letter Display */}
        <div className="text-center p-6 rounded-2xl border-2 border-border bg-white min-h-24 flex items-center justify-center">
          {activeLetter && activeExample ? (
            <div className="flex items-center gap-6">
              <div className="text-6xl font-bold font-display gradient-text">{activeLetter}</div>
              <div className="text-left">
                <div className="text-4xl mb-1">{activeExample.emoji}</div>
                <div className="text-lg font-bold capitalize">{activeExample.word}</div>
                <div className="text-sm text-muted-foreground">
                  <strong>{activeLetter}</strong> says <strong>/{activeLetter.toLowerCase()}/</strong> as in <strong>{activeExample.word}</strong>
                </div>
              </div>
              <Button
                size="sm"
                onClick={() => handleLetterClick(activeLetter)}
                disabled={!!playingLetter}
                className="rounded-xl gradient-blue-green text-white border-0"
              >
                <Volume2 className="h-4 w-4 mr-1" />
                Replay
              </Button>
            </div>
          ) : (
            <p className="text-muted-foreground text-lg">
              👆 Click any letter above to hear its phonics sound!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
