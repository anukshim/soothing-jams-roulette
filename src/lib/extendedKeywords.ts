// Indie Music Keywords
export const indieKeywords = [
  // Indie Pop
  "boy pablo songs",
  "still woozy music",
  "JAWNY songs",
  "men i trust songs",
  "tame impala hits",
  "mac demarco tracks",
  "clairo songs",
  "beach house music",
  "grizzly bear songs",
  "mgmt hits",
  "phoenix band songs",
  "vampire weekend tracks",
  "the xx music",
  "arcade fire songs",
  "foster the people hits",
  "passion pit music",
  "chvrches songs",
  "lorde tracks",
  "king krule music",
  "japanese breakfast songs",

  // Indie Rock
  "arctic monkeys hits",
  "the strokes songs",
  "modest mouse tracks",
  "car seat headrest music",
  "neutral milk hotel songs",
  "the national hits",
  "interpol music",
  "death cab for cutie songs",
  "bright eyes tracks",
  "wilco music",
  "spoon band songs",
  "built to spill hits",
  "pavement music",
  "pixies songs",
  "sonic youth tracks",
  "yo la tengo music",
  "dinosaur jr songs",
  "my bloody valentine hits",
  "the smiths tracks",
  "radiohead songs"
];

// Contemporary Artists
export const contemporaryKeywords = [
  // New Wave Artists
  "yung kai songs",
  "joji tracks",
  "rex orange county hits",
  "girl in red music",
  "beabadoobee songs",
  "dominic fike tracks",
  "omar apollo music",
  "steve lacy songs",
  "arlo parks hits",
  "wallows music",
  "gus dapperton songs",
  "current joys tracks",
  "crumb band music",
  "mild high club songs",
  "inner wave hits",
  "the marias music",
  "cuco songs",
  "yellow days tracks",
  "her's band music",
  "mild orange songs",

  // Alternative Pop
  "mitski hits",
  "fka twigs songs",
  "tyler the creator tracks",
  "frank ocean music",
  "the 1975 songs",
  "glass animals hits",
  "alt-j music",
  "bon iver songs",
  "florence + the machine tracks",
  "sufjan stevens music",
  "phoebe bridgers songs",
  "weyes blood hits",
  "alex g music",
  "animal collective songs",
  "fleet foxes tracks",
  "father john misty music",
  "angel olsen songs",
  "perfume genius hits",
  "the war on drugs tracks",
  "big thief songs"
];

// Pop Music Keywords
export const popKeywords = [
  // Modern Pop
  "current pop hits",
  "trending pop songs",
  "viral pop music",
  "pop chart toppers",
  "new pop releases",
  "pop music 2024",
  "popular pop singles",
  "mainstream pop hits",
  "contemporary pop songs",
  "pop music favorites",

  // Pop Subgenres
  "bedroom pop hits",
  "hyperpop tracks",
  "dream pop songs",
  "synthpop music",
  "art pop tracks",
  "indie pop hits 2024",
  "alternative pop songs",
  "experimental pop music",
  "psychedelic pop hits",
  "noise pop tracks",

  // Pop Decades
  "2020s pop hits",
  "2010s pop songs",
  "2000s pop classics",
  "90s pop hits",
  "80s pop classics",
  "y2k pop songs",
  "millennial pop hits",
  "gen z pop music",
  "viral tiktok songs",
  "internet pop hits"
];

// Electronic/Alternative Keywords
export const electronicKeywords = [
  // Electronic
  "electronic indie music",
  "synth wave hits",
  "vaporwave tracks",
  "future funk songs",
  "lo-fi beats",
  "electronic pop fusion",
  "chillwave music",
  "bedroom producers",
  "electronic experimental",
  "glitch pop songs",
  "electronic rock fusion",
  "indie electronic hits",
  "alternative electronic",
  "electronic indie pop",
  "electronic ambient pop",
  "downtempo electronic",
  "trip hop music",
  "nu disco tracks",
  "electronic dream pop",
  "indie dance music",

  // Alternative Dance
  "alternative dance hits",
  "indie dance tracks",
  "electronic indie rock",
  "dance punk songs",
  "new wave revival",
  "modern post-punk",
  "experimental dance",
  "art rock dance",
  "psychedelic dance",
  "indie club hits"
];

// Rock Music Keywords
export const rockKeywords = [
  // Modern Rock
  "arctic monkeys new album",
  "royal blood hits",
  "greta van fleet songs",
  "nothing but thieves tracks",
  "highly suspect music",
  "wolf alice songs",
  "black keys new tracks",
  "the killers hits",
  "muse latest songs",
  "twenty one pilots tracks",
  "imagine dragons hits",
  "cage the elephant songs",
  "foals new music",
  "kasabian tracks",
  "biffy clyro hits",

  // Classic Rock
  "led zeppelin hits",
  "pink floyd songs",
  "queen greatest hits",
  "rolling stones tracks",
  "guns n roses songs",
  "aerosmith hits",
  "ac/dc tracks",
  "the who songs",
  "deep purple hits",
  "black sabbath tracks",
  "eagles songs",
  "fleetwood mac hits",
  "journey tracks",
  "boston band songs",
  "def leppard hits"
];

// Jazz & Neo-Soul Keywords
export const jazzKeywords = [
  // Modern Jazz
  "kamasi washington songs",
  "robert glasper tracks",
  "thundercat music",
  "badbadnotgood hits",
  "sons of kemet songs",
  "christian scott tracks",
  "esperanza spalding music",
  "jacob collier songs",
  "snarky puppy hits",
  "gogo penguin tracks",
  "yussef dayes songs",
  "alfa mist music",
  "nubya garcia tracks",
  "shabaka hutchings songs",
  "makaya mccraven hits",

  // Neo-Soul & Jazz Fusion
  "anderson paak songs",
  "tom misch tracks",
  "jordan rakei music",
  "yola songs",
  "masego hits",
  "fkj tracks",
  "moonchild band songs",
  "hiatus kaiyote hits",
  "nubiyan twist tracks",
  "cory henry songs",
  "louis cole music",
  "knower tracks",
  "vulfpeck hits",
  "scary pockets covers",
  "lawrence band songs"
];

// R&B & Soul Keywords
export const soulKeywords = [
  // Modern R&B
  "sza hits",
  "daniel caesar songs",
  "summer walker tracks",
  "brent faiyaz music",
  "jorja smith hits",
  "giveon songs",
  "lucky daye tracks",
  "snoh aalegra music",
  "ari lennox hits",
  "bryson tiller songs",
  "kehlani tracks",
  "6lack music",
  "victoria monet hits",
  "mahalia songs",
  "joyce wrice tracks",

  // Soul & Alternative R&B
  "silk sonic songs",
  "leon bridges hits",
  "black pumas tracks",
  "michael kiwanuka music",
  "durand jones songs",
  "black thought hits",
  "celeste tracks",
  "curtis harding music",
  "lady wray songs",
  "adrian younge hits",
  "gabriels band tracks",
  "black midi songs",
  "sudan archives music",
  "yola tracks",
  "black joe lewis hits"
];

// Get a random keyword from all categories
export const getExtendedRandomKeyword = (): string => {
  const allCategories = [
    indieKeywords,
    contemporaryKeywords,
    popKeywords,
    electronicKeywords,
    rockKeywords,
    jazzKeywords,
    soulKeywords
  ];

  // Randomly select a category
  const randomCategory = allCategories[Math.floor(Math.random() * allCategories.length)];
  
  // Randomly select a keyword from that category
  const randomKeyword = randomCategory[Math.floor(Math.random() * randomCategory.length)];
  
  // Add duration filter
  return `${randomKeyword} duration:2..5`;
}; 