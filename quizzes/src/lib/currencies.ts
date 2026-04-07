// Top 20 most traded currencies — BIS 2025 Global FX Survey (% of all FX trades)
const CURRENCY_DATA: { name: string; pct: string; symbol: string; accept: string[] }[] = [
  { name: 'US Dollar',          pct: '89.2%', symbol: '$',   accept: ['us dollar', 'dollar', 'usd', 'american dollar', 'united states dollar'] },
  { name: 'Euro',               pct: '28.9%', symbol: '€',   accept: ['euro', 'eur'] },
  { name: 'Japanese Yen',       pct: '16.8%', symbol: '¥',   accept: ['japanese yen', 'yen', 'jpy'] },
  { name: 'British Pound',      pct: '10.2%', symbol: '£',   accept: ['british pound', 'pound', 'gbp', 'pound sterling', 'sterling'] },
  { name: 'Chinese Yuan',       pct: '8.5%',  symbol: '元',  accept: ['chinese yuan', 'yuan', 'cny', 'rmb', 'renminbi', 'chinese renminbi'] },
  { name: 'Swiss Franc',        pct: '6.4%',  symbol: 'Fr',  accept: ['swiss franc', 'franc', 'chf', 'swiss francs'] },
  { name: 'Australian Dollar',  pct: '6.1%',  symbol: 'A$',  accept: ['australian dollar', 'aud', 'australia dollar'] },
  { name: 'Canadian Dollar',    pct: '5.8%',  symbol: 'C$',  accept: ['canadian dollar', 'cad', 'canada dollar'] },
  { name: 'Hong Kong Dollar',   pct: '3.8%',  symbol: 'HK$', accept: ['hong kong dollar', 'hkd'] },
  { name: 'Singapore Dollar',   pct: '2.4%',  symbol: 'S$',  accept: ['singapore dollar', 'sgd'] },
  { name: 'Indian Rupee',       pct: '1.9%',  symbol: '₹',   accept: ['indian rupee', 'rupee', 'inr'] },
  { name: 'South Korean Won',   pct: '1.8%',  symbol: '₩',   accept: ['south korean won', 'won', 'krw', 'korean won'] },
  { name: 'Swedish Krona',      pct: '1.6%',  symbol: 'kr',  accept: ['swedish krona', 'krona', 'sek', 'swedish crowns'] },
  { name: 'Mexican Peso',       pct: '1.6%',  symbol: '$',   accept: ['mexican peso', 'peso', 'mxn'] },
  { name: 'New Zealand Dollar', pct: '1.5%',  symbol: 'NZ$', accept: ['new zealand dollar', 'nzd', 'kiwi dollar'] },
  { name: 'Norwegian Krone',    pct: '1.3%',  symbol: 'kr',  accept: ['norwegian krone', 'krone', 'nok'] },
  { name: 'New Taiwan Dollar',  pct: '1.2%',  symbol: 'NT$', accept: ['new taiwan dollar', 'taiwan dollar', 'twd'] },
  { name: 'Brazilian Real',     pct: '0.9%',  symbol: 'R$',  accept: ['brazilian real', 'real', 'brl'] },
  { name: 'Polish Złoty',       pct: '0.8%',  symbol: 'zł',  accept: ['polish złoty', 'polish zloty', 'złoty', 'zloty', 'pln'] },
  { name: 'South African Rand', pct: '0.8%',  symbol: 'R',   accept: ['south african rand', 'rand', 'zar'] },
];

const CURRENCY_MAP = new Map<string, string>();
CURRENCY_DATA.forEach(c => c.accept.forEach(a => CURRENCY_MAP.set(a, c.name)));

export const CURRENCIES: { name: string; pct: string; symbol: string }[] = CURRENCY_DATA.map(c => ({ name: c.name, pct: c.pct, symbol: c.symbol }));

export function matchCurrency(guess: string): string | null {
  return CURRENCY_MAP.get(guess.trim().toLowerCase()) ?? null;
}
