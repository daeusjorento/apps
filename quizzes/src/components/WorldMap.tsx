'use client';

import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

const DEFAULT_GEO_URL =
  'https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson';

interface WorldMapProps {
  guessed: Set<string>;
  isOver: boolean;
  /** Set of canonical quiz names (countries in this region) */
  regionNames: Set<string>;
  /** GeoJSON properties.name → quiz canonical name (for name mismatches) */
  nameMap?: Record<string, string>;
  projection?: string;
  projectionConfig?: { center?: [number, number]; scale?: number };
  /** Override the GeoJSON/TopoJSON source URL */
  geoUrl?: string;
}

export function WorldMap({
  guessed,
  isOver,
  regionNames,
  nameMap = {},
  projection = 'geoMercator',
  projectionConfig,
  geoUrl = DEFAULT_GEO_URL,
}: WorldMapProps) {
  return (
    <ComposableMap
      projection={projection}
      projectionConfig={projectionConfig as any}
      style={{ width: '100%', height: 'auto' }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }: { geographies: any[] }) =>
          geographies.map((geo: any) => {
            const raw: string = geo.properties?.name ?? '';
            const quizName = nameMap[raw] ?? raw;
            const inRegion = regionNames.has(quizName);
            const isGuessed = inRegion && guessed.has(quizName);
            const isMissed = inRegion && isOver && !isGuessed;
            const fill = !inRegion
              ? '#d1d5db'
              : isGuessed
              ? '#374151'
              : isMissed
              ? '#9ca3af'
              : '#e5e7eb';
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={fill}
                stroke="#fff"
                strokeWidth={0.5}
                style={{
                  default: { outline: 'none' },
                  hover: { outline: 'none' },
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
