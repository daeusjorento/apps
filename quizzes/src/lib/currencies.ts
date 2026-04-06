// Top 20 most traded currencies — BIS 2025 Global FX Survey (% of all FX trades)
const CURRENCY_DATA: { name: string; pct: string; accept: string[] }[] = [
  { name: 'US Dollar',          pct: '89.2%', accept: ['us dollar', 'dollar', 'usd', 'american dollar', 'united states dollar'] },
  { name: 'Euro',               pct: '28.9%', accept: ['euro', 'eur'] },
  { name: 'Japanese Yen',       pct: '16.8%', accept: ['japanese yen', 'yen', 'jpy'] },
  { name: 'British Pound',      pct: '10.2%', accept: ['british pound', 'pound', 'gbp', 'pound sterling', 'sterling'] },
  { name: 'Chinese Yuan',       pct: '8.5%',  accept: ['chinese yuan', 'yuan', 'cny', 'rmb', 'renminbi', 'chinese renminbi'] },
  { name: 'Swiss Franc',        pct: '6.4%',  accept: ['swiss franc', 'franc', 'chf', 'swiss francs'] },
  { name: 'Australian Dollar',  pct: '6.1%',  accept: ['australian dollar', 'aud', 'australia dollar'] },
  { name: 'Canadian Dollar',    pct: '5.8%',  accept: ['canadian dollar', 'cad', 'canada dollar'] },
  { name: 'Hong Kong Dollar',   pct: '3.8%',  accept: ['hong kong dollar', 'hkd'] },
  { name: 'Singapore Dollar',   pct: '2.4%',  accept: ['singapore dollar', 'sgd'] },
  { name: 'Indian Rupee',       pct: '1.9%',  accept: ['indian rupee', 'rupee', 'inr'] },
  { name: 'South Korean Won',   pct: '1.8%',  accept: ['south korean won', 'won', 'krw', 'korean won'] },
  { name: 'Swedish Krona',      pct: '1.6%',  accept: ['swedish krona', 'krona', 'sek', 'swedish crowns'] },
  { name: 'Mexican Peso',       pct: '1.6%',  accept: ['mexican peso', 'peso', 'mxn'] },
  { name: 'New Zealand Dollar', pct: '1.5%',  accept: ['new zealand dollar', 'nzd', 'kiwi dollar'] },
  { name: 'Norwegian Krone',    pct: '1.3%',  accept: ['norwegian krone', 'krone', 'nok'] },
  { name: 'New Taiwan Dollar',  pct: '1.2%',  accept: ['new taiwan dollar', 'taiwan dollar', 'twd'] },
  { name: 'Brazilian Real',     pct: '0.9%',  accept: ['brazilian real', 'real', 'brl'] },
  { name: 'Polish Złoty',       pct: '0.8%',  accept: ['polish złoty', 'polish zloty', 'złoty', 'zloty', 'pln'] },
  { name: 'South African Rand', pct: '0.8%',  accept: ['south african rand', 'rand', 'zar'] },
];

const CURRENCY_MAP = new Map<string, string>();
CURRENCY_DATA.forEach(c => c.accept.forEach(a => CURRENCY_MAP.set(a, c.name)));

export const CURRENCIES: { name: string; pct: string }[] = CURRENCY_DATA.map(c => ({ name: c.name, pct: c.pct }));

export function matchCurrency(guess: string): string | null {
  return CURRENCY_MAP.get(guess.trim().toLowerCase()) ?? null;
}
