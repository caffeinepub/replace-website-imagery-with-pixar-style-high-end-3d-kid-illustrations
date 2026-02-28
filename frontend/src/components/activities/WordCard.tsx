import { useState } from 'react';
import { Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { playWordSound } from '@/utils/audioHelper';

interface WordCardProps {
  word: string;
  emoji: string;
}

export function WordCard({ word, emoji }: WordCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = async () => {
    setIsPlaying(true);
    await playWordSound(word);
    setTimeout(() => setIsPlaying(false), 800);
  };

  return (
    <div
      className="bg-white rounded-2xl border-2 border-border hover:border-primary/40 hover:shadow-glow transition-all duration-200 hover:-translate-y-1 p-5 text-center space-y-3"
    >
      <div className="text-5xl">{emoji}</div>
      <h3 className="text-2xl font-bold font-display capitalize">{word.toLowerCase()}</h3>
      <Button
        onClick={handlePlay}
        size="sm"
        className="rounded-xl gradient-blue-green text-white border-0 w-full"
        disabled={isPlaying}
      >
        <Volume2 className={`mr-2 h-4 w-4 ${isPlaying ? 'animate-pulse-soft' : ''}`} />
        {isPlaying ? 'Playing...' : 'Hear It'}
      </Button>
    </div>
  );
}
