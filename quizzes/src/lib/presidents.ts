export interface President {
  name: string;
  years: string;
}

export const PRESIDENTS: President[] = [
  { name: 'George Washington',      years: '1789–1797' },
  { name: 'John Adams',             years: '1797–1801' },
  { name: 'Thomas Jefferson',       years: '1801–1809' },
  { name: 'James Madison',          years: '1809–1817' },
  { name: 'James Monroe',           years: '1817–1825' },
  { name: 'John Quincy Adams',      years: '1825–1829' },
  { name: 'Andrew Jackson',         years: '1829–1837' },
  { name: 'Martin Van Buren',       years: '1837–1841' },
  { name: 'William Henry Harrison', years: '1841' },
  { name: 'John Tyler',             years: '1841–1845' },
  { name: 'James K. Polk',          years: '1845–1849' },
  { name: 'Zachary Taylor',         years: '1849–1850' },
  { name: 'Millard Fillmore',       years: '1850–1853' },
  { name: 'Franklin Pierce',        years: '1853–1857' },
  { name: 'James Buchanan',         years: '1857–1861' },
  { name: 'Abraham Lincoln',        years: '1861–1865' },
  { name: 'Andrew Johnson',         years: '1865–1869' },
  { name: 'Ulysses S. Grant',       years: '1869–1877' },
  { name: 'Rutherford B. Hayes',    years: '1877–1881' },
  { name: 'James A. Garfield',      years: '1881' },
  { name: 'Chester A. Arthur',      years: '1881–1885' },
  { name: 'Grover Cleveland',       years: '1885–1889' },
  { name: 'Benjamin Harrison',      years: '1889–1893' },
  { name: 'Grover Cleveland',       years: '1893–1897' },
  { name: 'William McKinley',       years: '1897–1901' },
  { name: 'Theodore Roosevelt',     years: '1901–1909' },
  { name: 'William Howard Taft',    years: '1909–1913' },
  { name: 'Woodrow Wilson',         years: '1913–1921' },
  { name: 'Warren G. Harding',      years: '1921–1923' },
  { name: 'Calvin Coolidge',        years: '1923–1929' },
  { name: 'Herbert Hoover',         years: '1929–1933' },
  { name: 'Franklin D. Roosevelt',  years: '1933–1945' },
  { name: 'Harry S. Truman',        years: '1945–1953' },
  { name: 'Dwight D. Eisenhower',   years: '1953–1961' },
  { name: 'John F. Kennedy',        years: '1961–1963' },
  { name: 'Lyndon B. Johnson',      years: '1963–1969' },
  { name: 'Richard Nixon',          years: '1969–1974' },
  { name: 'Gerald Ford',            years: '1974–1977' },
  { name: 'Jimmy Carter',           years: '1977–1981' },
  { name: 'Ronald Reagan',          years: '1981–1989' },
  { name: 'George H.W. Bush',       years: '1989–1993' },
  { name: 'Bill Clinton',           years: '1993–2001' },
  { name: 'George W. Bush',         years: '2001–2009' },
  { name: 'Barack Obama',           years: '2009–2017' },
  { name: 'Donald Trump',           years: '2017–2021' },
  { name: 'Joe Biden',              years: '2021–2025' },
  { name: 'Donald Trump',           years: '2025–' },
];

// Nicknames and abbreviations: alias → array of 0-based indices
const ALIASES: Record<string, number[]> = {
  'abe':          [15],
  'honest abe':   [15],
  'teddy':        [25],
  'fdr':          [31],
  'ike':          [33],
  'jfk':          [34],
  'lbj':          [35],
  'tricky dick':  [36],
  'dubya':        [42],
  'george w':     [42],
  'george hw':    [40],
  'george h w':   [40],
  'bush sr':      [40],
  'bush jr':      [42],
};

function buildLookup(): Map<string, number[]> {
  const map = new Map<string, number[]>();

  function add(key: string, index: number) {
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(index);
  }

  PRESIDENTS.forEach(({ name }, i) => {
    add(name.toLowerCase(), i);
    add(name.split(' ').pop()!.toLowerCase(), i);
  });

  Object.entries(ALIASES).forEach(([alias, indices]) => map.set(alias, indices));

  return map;
}

const LOOKUP = buildLookup();

export function matchPresident(guess: string): number[] {
  return LOOKUP.get(guess.trim().toLowerCase()) ?? [];
}
