import React, { useState } from 'react';
import LuckyButton from '@/components/LuckyButton';
import { CirclePlay, Headphones, Search } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { YouTubeSearch } from '@/components/YouTubeSearch';
import { getExtendedRandomKeyword } from '@/lib/extendedKeywords';
import { searchYouTube, YouTubeSearchResult } from '@/lib/youtube';

const Index = () => {
  const [luckyResults, setLuckyResults] = useState<YouTubeSearchResult[]>([]);
  const [currentKeyword, setCurrentKeyword] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasClickedOnce, setHasClickedOnce] = useState(false);
  const [showYouTubeSearch, setShowYouTubeSearch] = useState(false);
  const { toast } = useToast();

  const handleGetLuckySongs = async () => {
    setIsLoading(true);
    setShowYouTubeSearch(false);
    
    try {
      const keyword = getExtendedRandomKeyword();
      setCurrentKeyword(keyword);
      const results = await searchYouTube(keyword);
      setLuckyResults(results.slice(0, 2)); // Get top 2 results
      
      if (!hasClickedOnce) {
        setHasClickedOnce(true);
      }
      
      // Create a more friendly message by removing duration filter from display
      const displayKeyword = keyword.replace(' duration:2..5', '');
      
      toast({
        title: "New songs found!",
        description: `Found some ${displayKeyword.toLowerCase()} for you to enjoy.`,
      });
    } catch (error) {
      toast({
        title: "Error finding songs",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
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
          Discover amazing songs for every mood and genre
        </p>
      </header>

      {/* Main content */}
      <main className="flex-1 w-full max-w-4xl px-4 py-8 flex flex-col items-center">
        <div className="mb-12 text-center space-y-4">
          <LuckyButton onClick={handleGetLuckySongs} isLoading={isLoading} />
          <button
            onClick={() => setShowYouTubeSearch(!showYouTubeSearch)}
            className="flex items-center gap-2 px-4 py-2 text-sm text-white/70 hover:text-white transition-colors"
          >
            <Search className="w-4 h-4" />
            {showYouTubeSearch ? 'Hide YouTube Search' : 'Search YouTube'}
          </button>
        </div>
        
        {showYouTubeSearch && (
          <div className="w-full mb-12">
            <YouTubeSearch />
          </div>
        )}
        
        {!hasClickedOnce && !showYouTubeSearch && !luckyResults.length && (
          <div className="text-center py-16 space-y-6 max-w-md mx-auto">
            <CirclePlay className="w-16 h-16 text-lucky-lavender/80 mx-auto animate-pulse-slow" />
            <h2 className="text-xl text-white/90 font-medium">
              Ready for your musical journey?
            </h2>
            <p className="text-white/60">
              Press the "I'm Feeling Lucky" button to discover amazing songs from various genres.
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
        
        {!isLoading && luckyResults.length > 0 && (
          <div className="w-full">
            <h2 className="text-xl font-medium text-white/90 mb-2 text-center">
              Tonight's Lucky Picks
            </h2>
            {currentKeyword && (
              <p className="text-center text-white/60 mb-6">
                {currentKeyword.replace(' duration:2..5', '')}
              </p>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {luckyResults.map((result) => (
                <div
                  key={result.id.videoId}
                  className="flex flex-col gap-4 p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <div className="aspect-video w-full">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${result.id.videoId}`}
                      title={result.snippet.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{result.snippet.title}</h3>
                    <p className="text-sm text-white/60 line-clamp-2 mt-1">{result.snippet.description}</p>
                  </div>
                </div>
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
