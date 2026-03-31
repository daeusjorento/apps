const MOVIE_DATA: { name: string; accept: string[] }[] = [
  // Golden Age
  { name: 'Snow White and the Seven Dwarfs', accept: ['snow white and the seven dwarfs', 'snow white and the 7 dwarfs', 'snow white'] },
  { name: 'Pinocchio',     accept: ['pinocchio'] },
  { name: 'Fantasia',      accept: ['fantasia'] },
  { name: 'Dumbo',         accept: ['dumbo'] },
  { name: 'Bambi',         accept: ['bambi'] },
  // Silver Age
  { name: 'Saludos Amigos',    accept: ['saludos amigos', 'saludos'] },
  { name: 'The Three Caballeros', accept: ['the three caballeros', 'three caballeros', 'caballeros'] },
  { name: 'Make Mine Music',   accept: ['make mine music'] },
  { name: 'Fun and Fancy Free', accept: ['fun and fancy free', 'fun & fancy free'] },
  { name: 'Melody Time',       accept: ['melody time'] },
  { name: 'The Adventures of Ichabod and Mr. Toad', accept: ['the adventures of ichabod and mr. toad', 'adventures of ichabod and mr. toad', 'ichabod and mr. toad', 'ichabod and mr toad', 'ichabod', 'mr. toad'] },
  { name: 'Cinderella',    accept: ['cinderella'] },
  { name: 'Alice in Wonderland', accept: ['alice in wonderland', 'alice'] },
  { name: 'Peter Pan',     accept: ['peter pan'] },
  { name: 'Lady and the Tramp', accept: ['lady and the tramp', 'lady & the tramp'] },
  { name: 'Sleeping Beauty', accept: ['sleeping beauty'] },
  { name: 'One Hundred and One Dalmatians', accept: ['one hundred and one dalmatians', '101 dalmatians', 'one hundred and one dalmations', '101 dalmations', 'dalmatians'] },
  { name: 'The Sword in the Stone', accept: ['the sword in the stone', 'sword in the stone'] },
  { name: 'The Jungle Book', accept: ['the jungle book', 'jungle book'] },
  // Bronze Age
  { name: 'The Aristocats',    accept: ['the aristocats', 'aristocats'] },
  { name: 'Robin Hood',        accept: ['robin hood'] },
  { name: 'The Many Adventures of Winnie the Pooh', accept: ['the many adventures of winnie the pooh', 'many adventures of winnie the pooh', 'many adventures of winnie pooh', 'many adventures'] },
  { name: 'The Rescuers',      accept: ['the rescuers', 'rescuers'] },
  { name: 'The Fox and the Hound', accept: ['the fox and the hound', 'fox and the hound'] },
  { name: 'The Black Cauldron', accept: ['the black cauldron', 'black cauldron'] },
  { name: 'The Great Mouse Detective', accept: ['the great mouse detective', 'great mouse detective', 'basil the great mouse detective'] },
  { name: 'Oliver & Company',  accept: ['oliver & company', 'oliver and company', 'oliver'] },
  // Renaissance
  { name: 'The Little Mermaid', accept: ['the little mermaid', 'little mermaid'] },
  { name: 'The Rescuers Down Under', accept: ['the rescuers down under', 'rescuers down under'] },
  { name: 'Beauty and the Beast', accept: ['beauty and the beast', 'beauty & the beast', 'batb'] },
  { name: 'Aladdin',           accept: ['aladdin'] },
  { name: 'The Lion King',     accept: ['the lion king', 'lion king'] },
  { name: 'Pocahontas',        accept: ['pocahontas'] },
  { name: 'The Hunchback of Notre Dame', accept: ['the hunchback of notre dame', 'hunchback of notre dame', 'hunchback'] },
  { name: 'Hercules',          accept: ['hercules'] },
  { name: 'Mulan',             accept: ['mulan'] },
  { name: 'Tarzan',            accept: ['tarzan'] },
  // Post-Renaissance
  { name: 'Fantasia 2000',     accept: ['fantasia 2000', 'fantasia2000'] },
  { name: 'Dinosaur',          accept: ['dinosaur'] },
  { name: 'The Emperor\'s New Groove', accept: ["the emperor's new groove", "emperor's new groove", 'emperors new groove', 'the emperors new groove'] },
  { name: 'Atlantis: The Lost Empire', accept: ['atlantis: the lost empire', 'atlantis the lost empire', 'atlantis'] },
  { name: 'Lilo & Stitch',     accept: ['lilo & stitch', 'lilo and stitch', 'lilo'] },
  { name: 'Treasure Planet',   accept: ['treasure planet'] },
  { name: 'Brother Bear',      accept: ['brother bear'] },
  { name: 'Home on the Range', accept: ['home on the range'] },
  { name: 'Chicken Little',    accept: ['chicken little'] },
  { name: 'Meet the Robinsons', accept: ['meet the robinsons', 'robinsons'] },
  { name: 'Bolt',              accept: ['bolt'] },
  { name: 'The Princess and the Frog', accept: ['the princess and the frog', 'princess and the frog'] },
  // Modern
  { name: 'Tangled',           accept: ['tangled', 'rapunzel'] },
  { name: 'Winnie the Pooh',   accept: ['winnie the pooh', 'winnie the pooh 2011', 'winnie pooh'] },
  { name: 'Wreck-It Ralph',    accept: ['wreck-it ralph', 'wreck it ralph', 'wreckit ralph', 'ralph'] },
  { name: 'Frozen',            accept: ['frozen', 'frozen 1'] },
  { name: 'Big Hero 6',        accept: ['big hero 6', 'big hero six'] },
  { name: 'Zootopia',          accept: ['zootopia', 'zootropolis'] },
  { name: 'Moana',             accept: ['moana', 'moana 1'] },
  { name: 'Ralph Breaks the Internet', accept: ['ralph breaks the internet', 'wreck-it ralph 2', 'wreck it ralph 2', 'ralph 2'] },
  { name: 'Frozen II',         accept: ['frozen ii', 'frozen 2'] },
  { name: 'Raya and the Last Dragon', accept: ['raya and the last dragon', 'raya'] },
  { name: 'Encanto',           accept: ['encanto'] },
  { name: 'Strange World',     accept: ['strange world'] },
  { name: 'Wish',              accept: ['wish'] },
  { name: 'Moana 2',           accept: ['moana 2', 'moana ii'] },
];

const MOVIE_MAP = new Map<string, string>();
MOVIE_DATA.forEach(m => m.accept.forEach(a => MOVIE_MAP.set(a, m.name)));

export const DISNEY_MOVIES = MOVIE_DATA.map(m => m.name);

export const DISNEY_SECTIONS: { header: string; movies: string[] }[] = [
  {
    header: 'Golden Age (1937–1942)',
    movies: ['Snow White and the Seven Dwarfs', 'Pinocchio', 'Fantasia', 'Dumbo', 'Bambi'],
  },
  {
    header: 'Silver Age (1943–1967)',
    movies: ['Saludos Amigos', 'The Three Caballeros', 'Make Mine Music', 'Fun and Fancy Free', 'Melody Time', 'The Adventures of Ichabod and Mr. Toad', 'Cinderella', 'Alice in Wonderland', 'Peter Pan', 'Lady and the Tramp', 'Sleeping Beauty', 'One Hundred and One Dalmatians', 'The Sword in the Stone', 'The Jungle Book'],
  },
  {
    header: 'Bronze Age (1970–1988)',
    movies: ['The Aristocats', 'Robin Hood', 'The Many Adventures of Winnie the Pooh', 'The Rescuers', 'The Fox and the Hound', 'The Black Cauldron', 'The Great Mouse Detective', 'Oliver & Company'],
  },
  {
    header: 'Renaissance (1989–1999)',
    movies: ['The Little Mermaid', 'The Rescuers Down Under', 'Beauty and the Beast', 'Aladdin', 'The Lion King', 'Pocahontas', 'The Hunchback of Notre Dame', 'Hercules', 'Mulan', 'Tarzan'],
  },
  {
    header: 'Post-Renaissance (2000–2009)',
    movies: ['Fantasia 2000', 'Dinosaur', "The Emperor's New Groove", 'Atlantis: The Lost Empire', 'Lilo & Stitch', 'Treasure Planet', 'Brother Bear', 'Home on the Range', 'Chicken Little', 'Meet the Robinsons', 'Bolt', 'The Princess and the Frog'],
  },
  {
    header: 'Modern (2010–present)',
    movies: ['Tangled', 'Winnie the Pooh', 'Wreck-It Ralph', 'Frozen', 'Big Hero 6', 'Zootopia', 'Moana', 'Ralph Breaks the Internet', 'Frozen II', 'Raya and the Last Dragon', 'Encanto', 'Strange World', 'Wish', 'Moana 2'],
  },
];

export function matchDisneyMovie(guess: string): string | null {
  return MOVIE_MAP.get(guess.trim().toLowerCase()) ?? null;
}
