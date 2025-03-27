
import React, { useState } from 'react';
import { getRandomSongs } from '@/lib/songs';
import { Song } from '@/lib/types';
import SongPlayer from '@/components/SongPlayer';
import LuckyButton from '@/components/LuckyButton';
import { CirclePlay, Headphones } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Index = () => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasClickedOnce, setHasClickedOnce] = useState(false);
  const { toast } = useToast();

  const handleGetLuckySongs = () => {
    setIsLoading(true);
    
    // Simulate loading delay for better UX
    setTimeout(() => {
      const randomSongs = getRandomSongs(2);
      setSongs(randomSongs);
      setIsLoading(false);
      
      if (!hasClickedOnce) {
        setHasClickedOnce(true);
      }
      
      toast({
        title: "New songs found!",
        description: "Enjoy your lucky tunes for tonight's self-care routine.",
      });
    }, 600);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-lucky-dark to-black">
      {/* Header */}
      <header className="w-full pt-8 pb-4 px-4 text-center">
        <div className="flex justify-center items-center gap-3 mb-2">
          <Headphones className="w-7 h-7 text-lucky-lavender" />
          <h1 className="text-4xl font-bold text-white">
            Lucky <span className="text-lucky-lavender">Tunes</span>
          </h1>
        </div>
        <p className="text-white/70 max-w-md mx-auto">
          Discover relaxing songs for your nighttime self-care routine
        </p>
      </header>

      {/* Main content */}
      <main className="flex-1 w-full max-w-4xl px-4 py-8 flex flex-col items-center">
        <div className="mb-12 text-center">
          <LuckyButton onClick={handleGetLuckySongs} isLoading={isLoading} />
        </div>
        
        {!hasClickedOnce && (
          <div className="text-center py-16 space-y-6 max-w-md mx-auto">
            <CirclePlay className="w-16 h-16 text-lucky-lavender/80 mx-auto animate-pulse-slow" />
            <h2 className="text-xl text-white/90 font-medium">
              Ready for your nightly musical journey?
            </h2>
            <p className="text-white/60">
              Press the "I'm Feeling Lucky" button to discover curated songs perfect for your self-care routine.
            </p>
          </div>
        )}
        
        {isLoading && (
          <div className="flex justify-center py-12">
            <div className="relative w-16 h-16">
              <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-t-lucky-lavender border-r-lucky-lavender/30 border-b-lucky-lavender/10 border-l-lucky-lavender/50 animate-spin"></div>
            </div>
          </div>
        )}
        
        {!isLoading && songs.length > 0 && (
          <div className="w-full">
            <h2 className="text-xl font-medium text-white/90 mb-6 text-center">
              Tonight's Lucky Picks
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {songs.map((song) => (
                <SongPlayer key={song.id} song={song} />
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="w-full py-6 text-center text-white/50 text-sm">
        <p>Lucky Tunes &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Index;
