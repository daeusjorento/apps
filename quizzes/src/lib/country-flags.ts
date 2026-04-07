/** Maps quiz canonical country names to ISO alpha-2 codes */
const ISO: Record<string, string> = {
  // Africa
  Algeria: 'DZ', Angola: 'AO', Benin: 'BJ', Botswana: 'BW',
  'Burkina Faso': 'BF', Burundi: 'BI', Cameroon: 'CM', 'Cape Verde': 'CV',
  'Central African Republic': 'CF', Chad: 'TD', Comoros: 'KM',
  'DR Congo': 'CD', 'Republic of the Congo': 'CG', Djibouti: 'DJ',
  Egypt: 'EG', 'Equatorial Guinea': 'GQ', Eritrea: 'ER', Eswatini: 'SZ',
  Ethiopia: 'ET', Gabon: 'GA', Gambia: 'GM', Ghana: 'GH', Guinea: 'GN',
  'Guinea-Bissau': 'GW', 'Ivory Coast': 'CI', Kenya: 'KE', Lesotho: 'LS',
  Liberia: 'LR', Libya: 'LY', Madagascar: 'MG', Malawi: 'MW', Mali: 'ML',
  Mauritania: 'MR', Mauritius: 'MU', Morocco: 'MA', Mozambique: 'MZ',
  Namibia: 'NA', Niger: 'NE', Nigeria: 'NG', Rwanda: 'RW',
  'São Tomé and Príncipe': 'ST', Senegal: 'SN', Seychelles: 'SC',
  'Sierra Leone': 'SL', Somalia: 'SO', 'South Africa': 'ZA',
  'South Sudan': 'SS', Sudan: 'SD', Tanzania: 'TZ', Togo: 'TG',
  Tunisia: 'TN', Uganda: 'UG', Zambia: 'ZM', Zimbabwe: 'ZW',
  // Europe
  Albania: 'AL', Andorra: 'AD', Austria: 'AT', Belarus: 'BY', Belgium: 'BE',
  'Bosnia and Herzegovina': 'BA', Bulgaria: 'BG', Croatia: 'HR',
  'Czech Republic': 'CZ', Denmark: 'DK', Estonia: 'EE', Finland: 'FI',
  France: 'FR', Germany: 'DE', Greece: 'GR', Hungary: 'HU', Iceland: 'IS',
  Ireland: 'IE', Italy: 'IT', Latvia: 'LV', Liechtenstein: 'LI',
  Lithuania: 'LT', Luxembourg: 'LU', Malta: 'MT', Moldova: 'MD',
  Monaco: 'MC', Montenegro: 'ME', Netherlands: 'NL', 'North Macedonia': 'MK',
  Norway: 'NO', Poland: 'PL', Portugal: 'PT', Romania: 'RO', Russia: 'RU',
  'San Marino': 'SM', Serbia: 'RS', Slovakia: 'SK', Slovenia: 'SI',
  Spain: 'ES', Sweden: 'SE', Switzerland: 'CH', Ukraine: 'UA',
  'United Kingdom': 'GB', 'Vatican City': 'VA',
  // Asia
  Afghanistan: 'AF', Armenia: 'AM', Azerbaijan: 'AZ', Bahrain: 'BH',
  Bangladesh: 'BD', Bhutan: 'BT', Brunei: 'BN', Cambodia: 'KH',
  China: 'CN', Cyprus: 'CY', Georgia: 'GE', India: 'IN', Indonesia: 'ID',
  Iran: 'IR', Iraq: 'IQ', Israel: 'IL', Japan: 'JP', Jordan: 'JO',
  Kazakhstan: 'KZ', Kuwait: 'KW', Kyrgyzstan: 'KG', Laos: 'LA',
  Lebanon: 'LB', Malaysia: 'MY', Maldives: 'MV', Mongolia: 'MN',
  Myanmar: 'MM', Nepal: 'NP', 'North Korea': 'KP', Oman: 'OM',
  Pakistan: 'PK', Palestine: 'PS', Philippines: 'PH', Qatar: 'QA',
  'Saudi Arabia': 'SA', Singapore: 'SG', 'South Korea': 'KR',
  'Sri Lanka': 'LK', Syria: 'SY', Tajikistan: 'TJ', Thailand: 'TH',
  'Timor-Leste': 'TL', Turkey: 'TR', Turkmenistan: 'TM',
  'United Arab Emirates': 'AE', Uzbekistan: 'UZ', Vietnam: 'VN', Yemen: 'YE',
  // North America
  'Antigua and Barbuda': 'AG', Bahamas: 'BS', Barbados: 'BB', Belize: 'BZ',
  Canada: 'CA', 'Costa Rica': 'CR', Cuba: 'CU', Dominica: 'DM',
  'Dominican Republic': 'DO', 'El Salvador': 'SV', Grenada: 'GD',
  Guatemala: 'GT', Haiti: 'HT', Honduras: 'HN', Jamaica: 'JM',
  Mexico: 'MX', Nicaragua: 'NI', Panama: 'PA', 'Saint Kitts and Nevis': 'KN',
  'Saint Lucia': 'LC', 'Saint Vincent and the Grenadines': 'VC',
  'Trinidad and Tobago': 'TT', 'United States': 'US',
  // South America
  Argentina: 'AR', Bolivia: 'BO', Brazil: 'BR', Chile: 'CL',
  Colombia: 'CO', Ecuador: 'EC', Guyana: 'GY', Paraguay: 'PY',
  Peru: 'PE', Suriname: 'SR', Uruguay: 'UY', Venezuela: 'VE',
};

function isoToFlag(code: string): string {
  return String.fromCodePoint(
    ...code.toUpperCase().split('').map(c => 0x1f1e6 + c.charCodeAt(0) - 65)
  );
}

export function getFlag(name: string): string {
  const code = ISO[name];
  return code ? isoToFlag(code) : '';
}
