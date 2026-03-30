const CURRENCY_DATA: { name: string; accept: string[] }[] = [
  { name: 'US Dollar',          accept: ['us dollar', 'dollar', 'usd', 'american dollar', 'united states dollar'] },
  { name: 'Euro',               accept: ['euro', 'eur'] },
  { name: 'Japanese Yen',       accept: ['japanese yen', 'yen', 'jpy'] },
  { name: 'British Pound',      accept: ['british pound', 'pound', 'gbp', 'pound sterling', 'sterling'] },
  { name: 'Chinese Yuan',       accept: ['chinese yuan', 'yuan', 'cny', 'rmb', 'renminbi', 'chinese renminbi'] },
  { name: 'Swiss Franc',        accept: ['swiss franc', 'franc', 'chf', 'swiss francs'] },
  { name: 'Canadian Dollar',    accept: ['canadian dollar', 'cad', 'canada dollar'] },
  { name: 'Australian Dollar',  accept: ['australian dollar', 'aud', 'australia dollar'] },
  { name: 'Swedish Krona',      accept: ['swedish krona', 'krona', 'sek', 'swedish crowns'] },
  { name: 'Norwegian Krone',    accept: ['norwegian krone', 'krone', 'nok'] },
  { name: 'Danish Krone',       accept: ['danish krone', 'dkk'] },
  { name: 'New Zealand Dollar', accept: ['new zealand dollar', 'nzd', 'kiwi dollar'] },
  { name: 'Singapore Dollar',   accept: ['singapore dollar', 'sgd'] },
  { name: 'Hong Kong Dollar',   accept: ['hong kong dollar', 'hkd'] },
  { name: 'South Korean Won',   accept: ['south korean won', 'won', 'krw', 'korean won'] },
  { name: 'Indian Rupee',       accept: ['indian rupee', 'rupee', 'inr'] },
  { name: 'Brazilian Real',     accept: ['brazilian real', 'real', 'brl'] },
  { name: 'Russian Ruble',      accept: ['russian ruble', 'ruble', 'rub', 'rouble', 'russian rouble'] },
  { name: 'Mexican Peso',       accept: ['mexican peso', 'peso', 'mxn'] },
  { name: 'South African Rand', accept: ['south african rand', 'rand', 'zar'] },
  { name: 'Turkish Lira',       accept: ['turkish lira', 'lira', 'try'] },
  { name: 'Saudi Riyal',        accept: ['saudi riyal', 'riyal', 'sar', 'saudi arabian riyal'] },
  { name: 'UAE Dirham',         accept: ['uae dirham', 'dirham', 'aed', 'emirati dirham', 'united arab emirates dirham'] },
  { name: 'Polish Złoty',       accept: ['polish złoty', 'polish zloty', 'złoty', 'zloty', 'pln'] },
  { name: 'Thai Baht',          accept: ['thai baht', 'baht', 'thb'] },
  { name: 'Indonesian Rupiah',  accept: ['indonesian rupiah', 'rupiah', 'idr'] },
  { name: 'Israeli Shekel',     accept: ['israeli shekel', 'shekel', 'ils', 'new shekel', 'new israeli shekel'] },
  { name: 'Philippine Peso',    accept: ['philippine peso', 'php', 'philippine pesos'] },
  { name: 'Czech Koruna',       accept: ['czech koruna', 'koruna', 'czk'] },
  { name: 'Bitcoin',            accept: ['bitcoin', 'btc'] },
];

const CURRENCY_MAP = new Map<string, string>();
CURRENCY_DATA.forEach(c => c.accept.forEach(a => CURRENCY_MAP.set(a, c.name)));

export const CURRENCIES = CURRENCY_DATA.map(c => c.name);

export function matchCurrency(guess: string): string | null {
  return CURRENCY_MAP.get(guess.trim().toLowerCase()) ?? null;
}
