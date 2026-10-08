import { countryHref } from '@/content/subpages';

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
  { name: 'Seoul', country: 'South Korea', lat: 37.5665, lon: 126.9780, href: '/study-in-south-korea', isPrimary: true },
  { name: 'Berlin', country: 'Germany', lat: 52.5200, lon: 13.4050, href: '/work-in-germany', isPrimary: true },
  { name: 'Dubai', country: 'UAE', lat: 25.2048, lon: 55.2708, href: '/work-in-uae', isPrimary: true },
  { name: 'Tokyo', country: 'Japan', lat: 35.6762, lon: 139.6503, href: countryHref('Japan') },
  { name: 'Taipei', country: 'Taiwan', lat: 25.0330, lon: 121.5654, href: countryHref('Taiwan') },
  { name: 'Singapore', country: 'Singapore', lat: 1.3521, lon: 103.8198, href: countryHref('Singapore') },
  { name: 'London', country: 'United Kingdom', lat: 51.5074, lon: -0.1278, href: countryHref('United Kingdom') },
  { name: 'New York', country: 'United States', lat: 40.7128, lon: -74.0060, href: countryHref('United States') },
  { name: 'Toronto', country: 'Canada', lat: 43.6532, lon: -79.3832, href: countryHref('Canada') },
  { name: 'Sydney', country: 'Australia', lat: -33.8688, lon: 151.2093, href: countryHref('Australia') },
];

