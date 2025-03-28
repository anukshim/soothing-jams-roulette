// Relaxing mood keywords
export const moodKeywords = [
  "relaxing meditation music",
  "peaceful piano music",
  "calming nature sounds",
  "ambient sleep music",
  "soft jazz music",
  "lofi study music",
  "gentle acoustic guitar",
  "soothing rain sounds",
  "calm classical music",
  "peaceful harp music",
  "tranquil forest sounds",
  "quiet evening jazz",
  "meditation flute music",
  "soft instrumental covers",
  "peaceful violin music"
];

// Popular music keywords with duration specification
export const songKeywords = [
  // Pop Music
  "popular pop songs 2024",
  "top 40 pop hits",
  "indie pop music",
  "pop rock classics",
  "synth pop hits",
  
  // Jazz
  "smooth jazz standards",
  "jazz classics",
  "modern jazz hits",
  "jazz fusion songs",
  "bebop jazz favorites",
  
  // Classical
  "classical piano pieces",
  "mozart popular works",
  "beethoven famous songs",
  "classical violin concertos",
  "bach best works",
  
  // Dance & Electronic
  "electronic dance hits",
  "house music classics",
  "techno dance tracks",
  "trance music hits",
  "disco dance classics",
  
  // Rock
  "classic rock hits",
  "indie rock songs",
  "alternative rock favorites",
  "soft rock classics",
  "rock ballads",
  
  // Other Genres
  "r&b soul hits",
  "funk music classics",
  "reggae favorites",
  "latin pop hits",
  "country music hits"
];

// Get a random keyword from either mood or song keywords
export const getRandomKeyword = (): string => {
  // Combine both arrays and add duration specification
  const allKeywords = [
    ...moodKeywords,
    ...songKeywords.map(keyword => `${keyword} duration:2..5`) // This adds duration filter for 2-5 minutes
  ];
  
  const randomIndex = Math.floor(Math.random() * allKeywords.length);
  return allKeywords[randomIndex];
}; 