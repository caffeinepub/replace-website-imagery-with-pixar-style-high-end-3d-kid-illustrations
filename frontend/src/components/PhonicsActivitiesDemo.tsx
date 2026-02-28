import { forwardRef, useState } from 'react';
import { Sparkles, BookOpen, Volume2, Gamepad2 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LetterSoundMatching } from './activities/LetterSoundMatching';
import { PronunciationPractice } from './activities/PronunciationPractice';
import { SoundRecognition } from './activities/SoundRecognition';

export const PhonicsActivitiesDemo = forwardRef<HTMLElement>((_, ref) => {
  const [activeTab, setActiveTab] = useState('letters');

  return (
    <section
      ref={ref}
      id="activities"
      className="py-20 md:py-28 bg-white"
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold mb-4"
            style={{ background: 'oklch(0.94 0.04 230)', color: 'oklch(0.42 0.18 240)' }}>
            <Sparkles className="h-4 w-4" />
            Try It Free!
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Interactive <span className="gradient-text">Phonics Activities</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get a taste of our phonics program! These activities use real phonics sounds — the same method we teach in our classes. Try them with your child right now!
          </p>
        </div>

        {/* Activity Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-lg mx-auto grid-cols-3 mb-8 rounded-2xl h-14 p-1"
            style={{ background: 'oklch(0.94 0.04 210)' }}>
            <TabsTrigger
              value="letters"
              className="rounded-xl font-semibold text-sm data-[state=active]:gradient-blue-green data-[state=active]:text-white data-[state=active]:shadow-glow"
            >
              <BookOpen className="h-4 w-4 mr-1.5" />
              Letter Sounds
            </TabsTrigger>
            <TabsTrigger
              value="pronunciation"
              className="rounded-xl font-semibold text-sm data-[state=active]:gradient-blue-green data-[state=active]:text-white data-[state=active]:shadow-glow"
            >
              <Volume2 className="h-4 w-4 mr-1.5" />
              Words
            </TabsTrigger>
            <TabsTrigger
              value="quiz"
              className="rounded-xl font-semibold text-sm data-[state=active]:gradient-blue-green data-[state=active]:text-white data-[state=active]:shadow-glow"
            >
              <Gamepad2 className="h-4 w-4 mr-1.5" />
              Quiz Game
            </TabsTrigger>
          </TabsList>

          <TabsContent value="letters">
            <LetterSoundMatching />
          </TabsContent>
          <TabsContent value="pronunciation">
            <PronunciationPractice />
          </TabsContent>
          <TabsContent value="quiz">
            <SoundRecognition />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
});

PhonicsActivitiesDemo.displayName = 'PhonicsActivitiesDemo';
