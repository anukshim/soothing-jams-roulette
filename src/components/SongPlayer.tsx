
import React from 'react';
import { Song, MoodTag } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

interface SongPlayerProps {
  song: Song;
}

const getMoodColor = (mood: MoodTag): string => {
  const colors = {
    uplifting: 'bg-green-500/70',
    chill: 'bg-blue-400/70',
    energetic: 'bg-orange-500/70',
    dreamy: 'bg-purple-400/70',
    focus: 'bg-yellow-500/70',
    relaxing: 'bg-teal-500/70'
  };
  
  return colors[mood] || 'bg-gray-500/70';
};

const SongPlayer: React.FC<SongPlayerProps> = ({ song }) => {
  return (
    <Card className="glass-card border-none overflow-hidden animate-fade-in">
      <CardContent className="p-4">
        <div className="aspect-video rounded-lg overflow-hidden mb-4">
          <iframe
            src={song.embedUrl}
            title={song.title}
            allowFullScreen
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-lg font-medium text-white">{song.title}</h3>
          <p className="text-white/70">{song.artist}</p>
          
          <div className="flex flex-wrap gap-2 mt-2">
            {song.moods.map((mood) => (
              <Badge 
                key={mood} 
                className={`${getMoodColor(mood)} text-white/90 hover:${getMoodColor(mood)}`}
              >
                {mood}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SongPlayer;
