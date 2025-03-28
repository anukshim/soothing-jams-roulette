import { useQuery } from '@tanstack/react-query';
import { searchYouTube, getVideoDetails, YouTubeSearchResult } from '../lib/youtube';

export const useYouTubeSearch = (query: string, enabled: boolean = true) => {
  return useQuery({
    queryKey: ['youtube-search', query],
    queryFn: () => searchYouTube(query),
    enabled: enabled && query.length > 0,
  });
};

export const useVideoDetails = (videoId: string | null) => {
  return useQuery({
    queryKey: ['video-details', videoId],
    queryFn: () => videoId ? getVideoDetails(videoId) : null,
    enabled: !!videoId,
  });
}; 