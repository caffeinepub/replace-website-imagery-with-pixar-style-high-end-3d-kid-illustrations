import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, Volume2, Trophy } from 'lucide-react';
import { soundGames } from '@/data/soundGames';
import { playLetterSound, playSuccessSound } from '@/utils/audioHelper';

export function SoundRecognition() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);

  const currentQuestion = soundGames[currentQuestionIndex];

  const handlePlaySound = async () => {
    await playLetterSound(currentQuestion.targetSound);
  };

  const handleAnswerClick = (index: number) => {
    if (showFeedback) return;
    setSelectedAnswer(index);
    setShowFeedback(true);
    if (index === currentQuestion.correctAnswer) {
      setScore((s) => s + 1);
      playSuccessSound();
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < soundGames.length - 1) {
      setCurrentQuestionIndex((i) => i + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      setGameComplete(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setScore(0);
    setGameComplete(false);
  };

  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
  const progress = ((currentQuestionIndex + (showFeedback ? 1 : 0)) / soundGames.length) * 100;

  if (gameComplete) {
    const percentage = Math.round((score / soundGames.length) * 100);
    return (
      <div className="rounded-3xl border-2 border-border shadow-glow p-8 text-center"
        style={{ background: 'linear-gradient(160deg, oklch(0.97 0.02 230), oklch(0.97 0.02 185))' }}>
        <Trophy className="h-16 w-16 mx-auto mb-4 text-primary" />
        <h3 className="text-3xl font-bold font-display mb-2">Quiz Complete! 🎉</h3>
        <p className="text-muted-foreground mb-6">
          You scored <strong className="text-foreground">{score} out of {soundGames.length}</strong> ({percentage}%)
        </p>
        <div className="inline-block px-8 py-4 rounded-2xl mb-6"
          style={{ background: 'linear-gradient(135deg, oklch(0.52 0.18 240), oklch(0.58 0.16 175))' }}>
          <div className="text-4xl font-bold text-white">{score}/{soundGames.length}</div>
          <div className="text-white/80 text-sm">
            {percentage >= 80 ? '⭐ Excellent work!' : percentage >= 60 ? '👍 Good job!' : '💪 Keep practicing!'}
          </div>
        </div>
        <div>
          <Button onClick={handleRestart} size="lg" className="rounded-2xl gradient-blue-green text-white border-0 shadow-glow">
            <Sparkles className="mr-2 h-5 w-5" />
            Play Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border-2 border-border shadow-glow overflow-hidden"
      style={{ background: 'linear-gradient(160deg, oklch(0.97 0.02 230), oklch(0.97 0.02 185))' }}>
      <div className="p-6 md:p-8 space-y-6">
        {/* Score & Progress */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border bg-white">
            <Trophy className="h-4 w-4 text-primary" />
            <span className="font-bold text-sm">Score: {score}/{soundGames.length}</span>
          </div>
          <div className="text-sm text-muted-foreground font-medium">
            Question {currentQuestionIndex + 1} of {soundGames.length}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="h-2 rounded-full bg-muted overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${progress}%`,
              background: 'linear-gradient(90deg, oklch(0.52 0.18 240), oklch(0.58 0.16 175))',
            }}
          />
        </div>

        {/* Question */}
        <div className="text-center space-y-4">
          <h3 className="text-xl font-bold font-display">{currentQuestion.question}</h3>
          <Button
            onClick={handlePlaySound}
            size="lg"
            className="rounded-2xl gradient-blue-green text-white border-0 shadow-glow"
          >
            <Volume2 className="mr-2 h-5 w-5" />
            Play Sound: /{currentQuestion.targetSound}/
          </Button>
        </div>

        {/* Answer Options */}
        <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrectAnswer = index === currentQuestion.correctAnswer;
            let btnStyle = 'bg-white border-border hover:border-primary/50 hover:scale-105';
            if (showFeedback && isCorrectAnswer) btnStyle = 'border-secondary text-secondary-foreground scale-105';
            if (showFeedback && isSelected && !isCorrectAnswer) btnStyle = 'border-destructive text-destructive-foreground';

            return (
              <button
                key={index}
                onClick={() => handleAnswerClick(index)}
                disabled={showFeedback}
                className={`p-5 rounded-2xl border-2 transition-all text-center ${btnStyle} ${showFeedback ? 'cursor-not-allowed' : ''}`}
                style={showFeedback && isCorrectAnswer ? { background: 'oklch(0.92 0.06 175)' } : {}}
              >
                <div className="text-4xl mb-2">{option.emoji}</div>
                <p className="text-lg font-bold">{option.word}</p>
              </button>
            );
          })}
        </div>

        {/* Feedback */}
        {showFeedback && (
          <div className={`text-center p-5 rounded-2xl border-2 ${isCorrect ? 'border-secondary/40' : 'border-muted'}`}
            style={{ background: isCorrect ? 'oklch(0.94 0.04 175)' : 'oklch(0.96 0.01 210)' }}>
            <Sparkles className={`h-10 w-10 mx-auto mb-2 ${isCorrect ? 'text-secondary' : 'text-muted-foreground'}`} />
            <p className="text-lg font-bold mb-3">
              {isCorrect ? currentQuestion.successMessage : currentQuestion.encouragementMessage}
            </p>
            <Button
              onClick={handleNextQuestion}
              size="lg"
              className="rounded-2xl gradient-blue-green text-white border-0 shadow-glow"
            >
              {currentQuestionIndex < soundGames.length - 1 ? 'Next Question' : 'See Results'}
              <Sparkles className="ml-2 h-5 w-5" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
