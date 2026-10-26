export interface GlobePin {
  name: string;
  country: string;
  lat: number;
  lon: number;
  href: string;
  isOrigin?: boolean;
  isPrimary?: boolean;
}

export const GLOBE_PINS: GlobePin[] = [
  { name: 'Ahmedabad', country: 'India (HQ)', lat: 23.0225, lon: 72.5714, href: '/contact', isOrigin: true },
  { name: 'Seoul', country: 'South Korea', lat: 37.5665, lon: 126.9780, href: '/study/south-korea', isPrimary: true },
  { name: 'Singapore', country: 'Singapore', lat: 1.3521, lon: 103.8198, href: '/study/singapore', isPrimary: true },
  { name: 'Luxembourg', country: 'Luxembourg', lat: 49.6116, lon: 6.1319, href: '/study/luxembourg', isPrimary: true },
  { name: 'Tokyo', country: 'Japan', lat: 35.6762, lon: 139.6503, href: '/study/japan', isPrimary: true },
  { name: 'Dubai', country: 'UAE', lat: 25.2048, lon: 55.2708, href: '/work/uae', isPrimary: true },
  { name: 'Taipei', country: 'Taiwan', lat: 25.0330, lon: 121.5654, href: '/study/taiwan' },
  { name: 'Berlin', country: 'Europe (Germany)', lat: 52.5200, lon: 13.4050, href: '/study/europe' },
  { name: 'London', country: 'United Kingdom', lat: 51.5074, lon: -0.1278, href: '/study/uk' },
  { name: 'New York', country: 'United States', lat: 40.7128, lon: -74.0060, href: '/study/usa' },
  { name: 'Toronto', country: 'Canada', lat: 43.6532, lon: -79.3832, href: '/study/canada' },
  { name: 'Sydney', country: 'Australia', lat: -33.8688, lon: 151.2093, href: '/study/australia' },
];
