export interface YouTubeSearchResult {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
      };
    };
  };
}

export interface YouTubeSearchResponse {
  items: YouTubeSearchResult[];
}

export const searchYouTube = async (query: string): Promise<YouTubeSearchResult[]> => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
        query
      )}&type=video&key=${import.meta.env.VITE_YOUTUBE_API_KEY}&maxResults=10`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch from YouTube API');
    }

    const data = await response.json();
    return data.items as YouTubeSearchResult[];
  } catch (error) {
    console.error('Error searching YouTube:', error);
    throw error;
  }
};

export const getVideoDetails = async (videoId: string) => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${
        import.meta.env.VITE_YOUTUBE_API_KEY
      }`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch video details');
    }

    const data = await response.json();
    return data.items?.[0];
  } catch (error) {
    console.error('Error getting video details:', error);
    throw error;
  }
}; 