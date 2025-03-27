
import React from 'react';
import { Button } from '@/components/ui/button';
import { Music } from 'lucide-react';

interface LuckyButtonProps {
  onClick: () => void;
  isLoading?: boolean;
}

const LuckyButton: React.FC<LuckyButtonProps> = ({ onClick, isLoading = false }) => {
  return (
    <Button
      onClick={onClick}
      disabled={isLoading}
      size="lg"
      className="bg-lucky-purple hover:bg-lucky-purple/90 text-white border border-white/10 
                 rounded-full px-8 py-6 text-lg font-medium shadow-lg 
                 hover:shadow-xl transition-all duration-300 flex items-center gap-2 
                 group relative overflow-hidden"
    >
      <span className="z-10 flex items-center gap-2">
        <Music className="w-5 h-5 animate-pulse-slow" />
        I'm Feeling Lucky
      </span>
      {/* Button glow effect */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-tr from-lucky-purple/80 to-lucky-blue/40 opacity-0 
                     group-hover:opacity-100 transition-opacity duration-300 blur-xl"></span>
      <span className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lucky-blue to-transparent"></span>
    </Button>
  );
};

export default LuckyButton;
