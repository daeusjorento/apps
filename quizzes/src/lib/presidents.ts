export const PRESIDENTS: string[] = [
  'George Washington',      // 1
  'John Adams',             // 2
  'Thomas Jefferson',       // 3
  'James Madison',          // 4
  'James Monroe',           // 5
  'John Quincy Adams',      // 6
  'Andrew Jackson',         // 7
  'Martin Van Buren',       // 8
  'William Henry Harrison', // 9
  'John Tyler',             // 10
  'James K. Polk',          // 11
  'Zachary Taylor',         // 12
  'Millard Fillmore',       // 13
  'Franklin Pierce',        // 14
  'James Buchanan',         // 15
  'Abraham Lincoln',        // 16
  'Andrew Johnson',         // 17
  'Ulysses S. Grant',       // 18
  'Rutherford B. Hayes',    // 19
  'James A. Garfield',      // 20
  'Chester A. Arthur',      // 21
  'Grover Cleveland',       // 22
  'Benjamin Harrison',      // 23
  'Grover Cleveland',       // 24
  'William McKinley',       // 25
  'Theodore Roosevelt',     // 26
  'William Howard Taft',    // 27
  'Woodrow Wilson',         // 28
  'Warren G. Harding',      // 29
  'Calvin Coolidge',        // 30
  'Herbert Hoover',         // 31
  'Franklin D. Roosevelt',  // 32
  'Harry S. Truman',        // 33
  'Dwight D. Eisenhower',   // 34
  'John F. Kennedy',        // 35
  'Lyndon B. Johnson',      // 36
  'Richard Nixon',          // 37
  'Gerald Ford',            // 38
  'Jimmy Carter',           // 39
  'Ronald Reagan',          // 40
  'George H.W. Bush',       // 41
  'Bill Clinton',           // 42
  'George W. Bush',         // 43
  'Barack Obama',           // 44
  'Donald Trump',           // 45
  'Joe Biden',              // 46
  'Donald Trump',           // 47
];

// Nicknames and abbreviations: alias → array of 0-based indices
const ALIASES: Record<string, number[]> = {
  'abe':       [15],  // Abraham Lincoln
  'honest abe': [15],
  'teddy':     [25],  // Theodore Roosevelt
  'fdr':       [31],  // Franklin D. Roosevelt
  'ike':       [33],  // Dwight D. Eisenhower
  'jfk':       [34],  // John F. Kennedy
  'lbj':       [35],  // Lyndon B. Johnson
  'tricky dick': [36], // Richard Nixon
  'dubya':     [42],  // George W. Bush
  'george w':  [42],  // George W. Bush (disambiguation)
  'george hw': [40],  // George H.W. Bush
  'george h w': [40],
  'bush sr':   [40],
  'bush jr':   [42],
};

// Build reverse lookup: normalized guess → array of 0-based indices
function buildLookup(): Map<string, number[]> {
  const map = new Map<string, number[]>();

  function add(key: string, index: number) {
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(index);
  }

  PRESIDENTS.forEach((name, i) => {
    add(name.toLowerCase(), i);
    const lastName = name.split(' ').pop()!.toLowerCase();
    add(lastName, i);
  });

  // Merge in manual aliases
  Object.entries(ALIASES).forEach(([alias, indices]) => {
    map.set(alias, indices);
  });

  return map;
}

const LOOKUP = buildLookup();

/**
 * Returns 0-based indices of all matching presidents.
 * Matches on full name, last name, or known nickname/abbreviation.
 */
export function matchPresident(guess: string): number[] {
  return LOOKUP.get(guess.trim().toLowerCase()) ?? [];
}
