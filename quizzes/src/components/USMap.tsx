'use client';

import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

const GEO_URL = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json';

interface USMapProps {
  guessed: Set<string>;
  gameState: 'playing' | 'given-up' | 'complete';
}

export default function USMap({ guessed, gameState }: USMapProps) {
  const isOver = gameState === 'given-up' || gameState === 'complete';

  return (
    <ComposableMap
      projection="geoAlbersUsa"
      projectionConfig={{ scale: 1000 }}
      style={{ width: '100%', height: 'auto' }}
    >
      <Geographies geography={GEO_URL}>
        {({ geographies }) =>
          geographies.map(geo => {
            const name: string = geo.properties.name;
            const isGuessed = guessed.has(name);
            const isMissed = isOver && !isGuessed;

            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={isGuessed ? '#86efac' : isMissed ? '#fca5a5' : '#e5e7eb'}
                stroke="#ffffff"
                strokeWidth={1}
                style={{
                  default: { outline: 'none' },
                  hover: { outline: 'none', fill: isGuessed ? '#86efac' : isMissed ? '#fca5a5' : '#d1d5db' },
                  pressed: { outline: 'none' },
                }}
              />
            );
          })
        }
      </Geographies>
    </ComposableMap>
  );
}
