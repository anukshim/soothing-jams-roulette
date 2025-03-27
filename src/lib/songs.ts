
import { Song } from './types';

export const songs: Song[] = [
  {
    id: '1',
    title: 'Midnight City',
    artist: 'M83',
    embedUrl: 'https://www.youtube.com/embed/dX3k_QDnzHE',
    embedType: 'youtube',
    imageUrl: 'https://i.ytimg.com/vi/dX3k_QDnzHE/hqdefault.jpg',
    moods: ['dreamy', 'energetic']
  },
  {
    id: '2',
    title: 'Coffee',
    artist: 'Beabadoobee',
    embedUrl: 'https://www.youtube.com/embed/C6CeA6vRtW4',
    embedType: 'youtube',
    imageUrl: 'https://i.ytimg.com/vi/C6CeA6vRtW4/hqdefault.jpg',
    moods: ['chill', 'relaxing']
  },
  {
    id: '3',
    title: 'Space Song',
    artist: 'Beach House',
    embedUrl: 'https://www.youtube.com/embed/RBtlPT23PTM',
    embedType: 'youtube',
    imageUrl: 'https://i.ytimg.com/vi/RBtlPT23PTM/hqdefault.jpg',
    moods: ['dreamy', 'relaxing']
  },
  {
    id: '4',
    title: 'Resonance',
    artist: 'HOME',
    embedUrl: 'https://www.youtube.com/embed/8GW6sLrK40k',
    embedType: 'youtube',
    imageUrl: 'https://i.ytimg.com/vi/8GW6sLrK40k/hqdefault.jpg',
    moods: ['focus', 'chill']
  },
  {
    id: '5',
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    embedUrl: 'https://www.youtube.com/embed/4NRXx6U8ABQ',
    embedType: 'youtube',
    imageUrl: 'https://i.ytimg.com/vi/4NRXx6U8ABQ/hqdefault.jpg',
    moods: ['energetic', 'uplifting']
  },
  {
    id: '6',
    title: 'Get Lucky',
    artist: 'Daft Punk ft. Pharrell Williams',
    embedUrl: 'https://www.youtube.com/embed/5NV6Rdv1a3I',
    embedType: 'youtube',
    imageUrl: 'https://i.ytimg.com/vi/5NV6Rdv1a3I/hqdefault.jpg',
    moods: ['uplifting', 'energetic']
  },
  {
    id: '7',
    title: 'Outro',
    artist: 'M83',
    embedUrl: 'https://www.youtube.com/embed/Eyjj8BgsBGU',
    embedType: 'youtube',
    imageUrl: 'https://i.ytimg.com/vi/Eyjj8BgsBGU/hqdefault.jpg',
    moods: ['dreamy', 'focus']
  },
  {
    id: '8',
    title: 'Dreams',
    artist: 'Fleetwood Mac',
    embedUrl: 'https://www.youtube.com/embed/mrZRURcb1cM',
    embedType: 'youtube',
    imageUrl: 'https://i.ytimg.com/vi/mrZRURcb1cM/hqdefault.jpg',
    moods: ['chill', 'relaxing']
  },
  {
    id: '9',
    title: 'Feel Good Inc',
    artist: 'Gorillaz',
    embedUrl: 'https://www.youtube.com/embed/HyHNuVaZJ-k',
    embedType: 'youtube',
    imageUrl: 'https://i.ytimg.com/vi/HyHNuVaZJ-k/hqdefault.jpg',
    moods: ['energetic', 'uplifting']
  },
  {
    id: '10',
    title: 'Lofi Study Mix',
    artist: 'ChilledCow',
    embedUrl: 'https://www.youtube.com/embed/5qap5aO4i9A',
    embedType: 'youtube',
    imageUrl: 'https://i.ytimg.com/vi/5qap5aO4i9A/hqdefault.jpg',
    moods: ['focus', 'chill', 'relaxing']
  }
];

export const getRandomSongs = (count: number = 3): Song[] => {
  // Create a copy of the songs array to avoid modifying the original
  const shuffled = [...songs].sort(() => 0.5 - Math.random());
  
  // Get the first `count` songs from the shuffled array
  return shuffled.slice(0, count);
};

export const getSongById = (id: string): Song | undefined => {
  return songs.find(song => song.id === id);
};
