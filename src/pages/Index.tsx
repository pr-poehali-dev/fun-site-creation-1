import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [soundPlaying, setSoundPlaying] = useState(false);

  const playSound = () => {
    setSoundPlaying(true);
    const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFA==');
    audio.play();
    setTimeout(() => setSoundPlaying(false), 500);
  };

  const memes = [
    { emoji: '🤡', text: 'Когда купил биткоин на пике', rotation: 'rotate-12' },
    { emoji: '🦆', text: 'Я: работаю. Мой мозг:', rotation: '-rotate-6' },
    { emoji: '🎃', text: 'POV: Понедельник', rotation: 'rotate-3' },
    { emoji: '🐸', text: 'It is Wednesday my dudes', rotation: '-rotate-12' },
    { emoji: '🌮', text: 'Тако вторник', rotation: 'rotate-6' },
    { emoji: '🦖', text: 'Динозавр мудрости', rotation: '-rotate-3' },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-90" />
      
      <div className="absolute top-10 left-10 animate-spin-slow">
        <div className="text-6xl">🌟</div>
      </div>
      <div className="absolute bottom-20 right-20 animate-bounce-crazy">
        <div className="text-5xl">🎪</div>
      </div>
      <div className="absolute top-1/3 right-10 animate-wiggle">
        <div className="text-4xl">🎭</div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <header className="text-center mb-16 animate-slide-in">
          <h1 className="text-8xl md:text-9xl font-bold mb-6 text-white drop-shadow-2xl tracking-tight">
            МЕМОЛОГИЯ
          </h1>
          <p className="text-3xl text-muted-foreground font-semibold">
            Абсурдный портал в параллельную реальность 🚀
          </p>
        </header>

        <div className="flex flex-col items-center gap-8 mb-16">
          <Button
            size="lg"
            onClick={playSound}
            className={`text-2xl px-12 py-8 rounded-full transform transition-all duration-300 hover:scale-110 ${
              soundPlaying ? 'animate-wiggle' : ''
            } bg-accent hover:bg-accent/90 text-white shadow-2xl border-4 border-white`}
          >
            <Icon name="Volume2" className="mr-3" size={32} />
            КНОПКА ПРИКОЛА
          </Button>
          
          <div className="flex flex-wrap justify-center gap-6">
            <div className="transform hover:scale-110 transition-all duration-300">
              <iframe 
                width="110" 
                height="200" 
                src="https://www.myinstants.com/instant/ia-peshcheru-nashla-kvinka-83784/embed/" 
                frameBorder="0" 
                scrolling="no"
                className="rounded-3xl shadow-2xl border-4 border-white"
              />
            </div>
            
            <div className="transform hover:scale-110 transition-all duration-300">
              <iframe 
                width="110" 
                height="200" 
                src="https://www.myinstants.com/instant/iba-chetka-62721/embed/" 
                frameBorder="0" 
                scrolling="no"
                className="rounded-3xl shadow-2xl border-4 border-white"
              />
            </div>
            
            <div className="transform hover:scale-110 transition-all duration-300">
              <iframe 
                width="110" 
                height="200" 
                src="https://www.myinstants.com/instant/bem-bem-bem-melsstroi-76136/embed/" 
                frameBorder="0" 
                scrolling="no"
                className="rounded-3xl shadow-2xl border-4 border-white"
              />
            </div>
            
            <div className="transform hover:scale-110 transition-all duration-300">
              <iframe 
                width="110" 
                height="200" 
                src="https://www.myinstants.com/instant/tralalero-tra-la-la-8817/embed/" 
                frameBorder="0" 
                scrolling="no"
                className="rounded-3xl shadow-2xl border-4 border-white"
              />
            </div>
          </div>
        </div>

        <section className="mb-20">
          <h2 className="text-6xl font-bold text-center mb-12 text-card-foreground">
            🎨 Галерея Мемов
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {memes.map((meme, index) => (
              <Card
                key={index}
                className={`p-8 transform ${meme.rotation} hover:rotate-0 transition-all duration-500 hover:scale-110 cursor-pointer bg-card border-4 border-primary shadow-xl hover:shadow-2xl`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className="text-7xl mb-4 animate-bounce-crazy">{meme.emoji}</div>
                  <p className="text-xl font-semibold text-card-foreground">{meme.text}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-6xl font-bold text-center mb-12 text-popover-foreground">
            🎪 Приколы Недели
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              { icon: 'Laugh', text: 'Как назвать переменную? Ответ: data2_final_FINAL_v3', color: 'bg-primary' },
              { icon: 'Smile', text: 'Ctrl+Z - лучший друг разработчика', color: 'bg-secondary' },
              { icon: 'Sparkles', text: 'Работает? Не трогай!', color: 'bg-accent' },
              { icon: 'Zap', text: 'Git commit -m "фикс"', color: 'bg-muted' },
            ].map((joke, index) => (
              <Card
                key={index}
                className={`p-6 ${joke.color} transform hover:scale-105 transition-all duration-300 border-4 border-white shadow-xl animate-slide-in`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-center gap-4">
                  <Icon name={joke.icon as any} size={48} className="text-white flex-shrink-0" />
                  <p className="text-2xl font-bold text-white">{joke.text}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <footer className="text-center py-12">
          <div className="inline-block transform hover:rotate-180 transition-transform duration-1000">
            <div className="text-8xl mb-4">🎯</div>
          </div>
          <p className="text-2xl text-white font-bold">
            Создано с любовью и абсурдом в poehali.dev
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;