
export type MoodTag = 'uplifting' | 'chill' | 'energetic' | 'dreamy' | 'focus' | 'relaxing';

export interface Song {
  id: string;
  title: string;
  artist: string;
  embedUrl: string;
  embedType: 'spotify' | 'youtube';
  imageUrl: string;
  moods: MoodTag[];
}
