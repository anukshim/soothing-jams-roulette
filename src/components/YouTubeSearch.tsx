import { useState } from 'react';
import { useYouTubeSearch } from '../hooks/useYouTube';
import { YouTubeSearchResult } from '../lib/youtube';

export function YouTubeSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const { data: searchResults, isLoading, error } = useYouTubeSearch(searchQuery);

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <div className="mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for songs..."
          className="w-full p-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:border-lucky-lavender"
        />
      </div>

      {isLoading && (
        <div className="flex justify-center py-12">
          <div className="relative w-16 h-16">
            <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-t-lucky-lavender border-r-lucky-lavender/30 border-b-lucky-lavender/10 border-l-lucky-lavender/50 animate-spin"></div>
          </div>
        </div>
      )}
      
      {error && (
        <div className="text-red-400 p-4 bg-red-400/10 rounded-md">
          Error: {error.message}
        </div>
      )}

      <div className="grid gap-4">
        {searchResults?.map((result: YouTubeSearchResult) => (
          <div
            key={result.id.videoId}
            className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 cursor-pointer transition-colors"
          >
            <img
              src={result.snippet.thumbnails.default.url}
              alt={result.snippet.title}
              className="w-24 h-24 object-cover rounded"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-white">{result.snippet.title}</h3>
              <p className="text-sm text-white/60 line-clamp-2">{result.snippet.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 