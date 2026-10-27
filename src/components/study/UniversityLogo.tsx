'use client';

import React from 'react';
import { CountryFlag } from '@/components/ui/CountryFlag';

export interface UniversityMeta {
  shortName: string;
  motto: string;
  established: string;
  primaryColor: string;
  secondaryColor: string;
  symbol:
    | 'gingko'
    | 'tree'
    | 'lion'
    | 'eagle'
    | 'tiger'
    | 'swan'
    | 'shield-book'
    | 'tech'
    | 'gate'
    | 'blossom'
    | 'crown';
  country: string;
  typeBadge: string;
}

export const UNIVERSITY_LOGO_DATA: Record<string, UniversityMeta> = {
  // ── Japan ──────────────────────────────────────────
  'university of tokyo': {
    shortName: 'UTokyo',
    motto: 'Veritas et Justitia',
    established: '1877',
    primaryColor: '#00205B',
    secondaryColor: '#EAA023',
    symbol: 'gingko',
    country: 'Japan',
    typeBadge: 'National Flagship University',
  },
  'kyoto university': {
    shortName: 'KyotoU',
    motto: 'Freedom of Academic Spirit',
    established: '1897',
    primaryColor: '#002B49',
    secondaryColor: '#A33E11',
    symbol: 'tree',
    country: 'Japan',
    typeBadge: 'Imperial Research University',
  },
  'osaka university': {
    shortName: 'Handai',
    motto: 'Live Locally, Grow Globally',
    established: '1931',
    primaryColor: '#0080C6',
    secondaryColor: '#003366',
    symbol: 'blossom',
    country: 'Japan',
    typeBadge: 'Designated National University',
  },
  'tohoku university': {
    shortName: 'Tohoku',
    motto: 'Research First, Open Doors',
    established: '1907',
    primaryColor: '#49166D',
    secondaryColor: '#9B51E0',
    symbol: 'blossom',
    country: 'Japan',
    typeBadge: 'Designated National University',
  },
  'nagoya university': {
    shortName: 'Meidai',
    motto: 'Courageous Intellectuals',
    established: '1939',
    primaryColor: '#004D25',
    secondaryColor: '#A3D977',
    symbol: 'tree',
    country: 'Japan',
    typeBadge: 'Imperial Research University',
  },
  'kyushu university': {
    shortName: 'Kyudai',
    motto: 'Open the Door to the Century',
    established: '1911',
    primaryColor: '#8B1B3F',
    secondaryColor: '#C44D6A',
    symbol: 'blossom',
    country: 'Japan',
    typeBadge: 'Designated National University',
  },
  'institute of science tokyo': {
    shortName: 'Science Tokyo',
    motto: 'Creating the Future of Science',
    established: '2024',
    primaryColor: '#005BAC',
    secondaryColor: '#00A3E0',
    symbol: 'tech',
    country: 'Japan',
    typeBadge: 'Top Science & Technology Institute',
  },
  'waseda university': {
    shortName: 'Waseda',
    motto: 'Independence of Learning',
    established: '1882',
    primaryColor: '#8E1728',
    secondaryColor: '#C68A4C',
    symbol: 'blossom',
    country: 'Japan',
    typeBadge: 'Premier Private Research University',
  },
  'keio university': {
    shortName: 'Keio',
    motto: 'Independence and Self-Respect',
    established: '1858',
    primaryColor: '#002147',
    secondaryColor: '#C41230',
    symbol: 'shield-book',
    country: 'Japan',
    typeBadge: 'Oldest Higher Institution in Japan',
  },
  'sophia university': {
    shortName: 'Sophia',
    motto: 'Sedes Sapientiae',
    established: '1913',
    primaryColor: '#7A1C2C',
    secondaryColor: '#B8860B',
    symbol: 'eagle',
    country: 'Japan',
    typeBadge: 'Global Jesuit Academic Institution',
  },

  // ── South Korea ────────────────────────────────────
  'seoul national university': {
    shortName: 'SNU',
    motto: 'Veritas Lux Mea',
    established: '1946',
    primaryColor: '#0F0F70',
    secondaryColor: '#D4AF37',
    symbol: 'gate',
    country: 'South Korea',
    typeBadge: 'National Flagship University',
  },
  'snu': {
    shortName: 'SNU',
    motto: 'Veritas Lux Mea',
    established: '1946',
    primaryColor: '#0F0F70',
    secondaryColor: '#D4AF37',
    symbol: 'gate',
    country: 'South Korea',
    typeBadge: 'National Flagship University',
  },
  kaist: {
    shortName: 'KAIST',
    motto: 'Global Value-Creative Leading University',
    established: '1971',
    primaryColor: '#004191',
    secondaryColor: '#ED1B2F',
    symbol: 'tech',
    country: 'South Korea',
    typeBadge: 'National Science & Tech Academy',
  },
  'yonsei university': {
    shortName: 'Yonsei',
    motto: 'The Truth Will Set You Free',
    established: '1885',
    primaryColor: '#003876',
    secondaryColor: '#00204A',
    symbol: 'shield-book',
    country: 'South Korea',
    typeBadge: 'SKY League Private University',
  },
  'korea university': {
    shortName: 'Korea U',
    motto: 'Libertas, Justitia, Veritas',
    established: '1905',
    primaryColor: '#8A0027',
    secondaryColor: '#C41230',
    symbol: 'tiger',
    country: 'South Korea',
    typeBadge: 'SKY League Private University',
  },
  'hanyang university': {
    shortName: 'Hanyang',
    motto: 'Love in Truth and Deed',
    established: '1939',
    primaryColor: '#0E2B5C',
    secondaryColor: '#2B6CB0',
    symbol: 'lion',
    country: 'South Korea',
    typeBadge: 'Leader in Engineering & Business',
  },
  'sungkyunkwan university': {
    shortName: 'SKKU',
    motto: 'Benevolence, Righteousness, Propriety, Wisdom',
    established: '1398',
    primaryColor: '#1E5631',
    secondaryColor: '#F5A623',
    symbol: 'gingko',
    country: 'South Korea',
    typeBadge: 'Historic Royal Academy & Tech Leader',
  },
  postech: {
    shortName: 'POSTECH',
    motto: 'Integrity, Creativity, Aspiration',
    established: '1986',
    primaryColor: '#E85A19',
    secondaryColor: '#A33E11',
    symbol: 'tech',
    country: 'South Korea',
    typeBadge: 'Elite Science & Technology University',
  },
  'pusan national university': {
    shortName: 'PNU',
    motto: 'Truth, Liberty, Dedication',
    established: '1946',
    primaryColor: '#003974',
    secondaryColor: '#1D70B8',
    symbol: 'eagle',
    country: 'South Korea',
    typeBadge: 'Top Regional Flagship University',
  },
  'kyung hee university': {
    shortName: 'Kyung Hee',
    motto: 'Democratization of Society, Peace for Humanity',
    established: '1949',
    primaryColor: '#9B111E',
    secondaryColor: '#D4AF37',
    symbol: 'blossom',
    country: 'South Korea',
    typeBadge: 'Global Interdisciplinary Center',
  },
  'sejong university': {
    shortName: 'Sejong',
    motto: 'Virtue, Creativity, Service',
    established: '1940',
    primaryColor: '#7A0019',
    secondaryColor: '#F5A623',
    symbol: 'crown',
    country: 'South Korea',
    typeBadge: 'Distinguished Private University',
  },
  'ewha womans university': {
    shortName: 'Ewha',
    motto: 'Truth, Goodness, Beauty',
    established: '1886',
    primaryColor: '#0A5C36',
    secondaryColor: '#5C9E7A',
    symbol: 'blossom',
    country: 'South Korea',
    typeBadge: 'Global Women Leadership Institute',
  },
  'kyungpook national university': {
    shortName: 'KNU',
    motto: 'Truth, Pride, Service',
    established: '1946',
    primaryColor: '#002E6E',
    secondaryColor: '#E53E3E',
    symbol: 'gate',
    country: 'South Korea',
    typeBadge: 'Leading National Research University',
  },

  // ── Singapore ──────────────────────────────────────
  'national university of singapore': {
    shortName: 'NUS',
    motto: 'Towards a Global Knowledge Enterprise',
    established: '1905',
    primaryColor: '#003D7C',
    secondaryColor: '#EF7C00',
    symbol: 'lion',
    country: 'Singapore',
    typeBadge: 'Asia #1 Flagship University',
  },
  'nanyang technological university': {
    shortName: 'NTU',
    motto: 'Co-creating a Sustainable Future',
    established: '1991',
    primaryColor: '#C41230',
    secondaryColor: '#003D7C',
    symbol: 'tech',
    country: 'Singapore',
    typeBadge: 'World Leading Engineering University',
  },
  'singapore management university': {
    shortName: 'SMU',
    motto: 'Transforming Minds, Impacting Business',
    established: '2000',
    primaryColor: '#00205B',
    secondaryColor: '#B39255',
    symbol: 'lion',
    country: 'Singapore',
    typeBadge: 'Premier City Business & Law Center',
  },
  'singapore university of technology and design': {
    shortName: 'SUTD',
    motto: 'A Better World by Design',
    established: '2009',
    primaryColor: '#ED1B2F',
    secondaryColor: '#2B2B2B',
    symbol: 'tech',
    country: 'Singapore',
    typeBadge: 'Pioneering Tech-Design Institution',
  },
  'singapore institute of technology': {
    shortName: 'SIT',
    motto: 'Applied Learning for the Future',
    established: '2009',
    primaryColor: '#E4002B',
    secondaryColor: '#1A1A1A',
    symbol: 'tech',
    country: 'Singapore',
    typeBadge: 'Singapore Applied Degree Center',
  },
  'singapore university of social sciences': {
    shortName: 'SUSS',
    motto: 'Knowledge, Purpose, Society',
    established: '2005',
    primaryColor: '#002E6E',
    secondaryColor: '#C53030',
    symbol: 'crown',
    country: 'Singapore',
    typeBadge: 'National Lifelong Education Leader',
  },

  // ── Taiwan ─────────────────────────────────────────
  'national taiwan university': {
    shortName: 'NTU',
    motto: 'Integrity, Diligence, Fidelity, Compassion',
    established: '1928',
    primaryColor: '#003366',
    secondaryColor: '#CC9900',
    symbol: 'gate',
    country: 'Taiwan',
    typeBadge: 'Taiwan Top Flagship University',
  },
  'national tsing hua university': {
    shortName: 'NTHU',
    motto: 'Self-Discipline and Social Commitment',
    established: '1911',
    primaryColor: '#660066',
    secondaryColor: '#DDA0DD',
    symbol: 'gate',
    country: 'Taiwan',
    typeBadge: 'Pinnacle in Sciences & High-Tech',
  },
  'national yang ming chiao tung university': {
    shortName: 'NYCU',
    motto: 'Absorption of New Knowledge, Practical Application',
    established: '1896',
    primaryColor: '#003366',
    secondaryColor: '#008080',
    symbol: 'tech',
    country: 'Taiwan',
    typeBadge: 'Leading Semiconductor & Medicine Institute',
  },
  'national cheng kung university': {
    shortName: 'NCKU',
    motto: 'Pragmatism and Truth',
    established: '1931',
    primaryColor: '#B22222',
    secondaryColor: '#DAA520',
    symbol: 'tree',
    country: 'Taiwan',
    typeBadge: 'Premier Engineering & Aerospace Center',
  },
  'national chengchi university': {
    shortName: 'NCCU',
    motto: 'Harmony, Independence, Balance, Progress',
    established: '1927',
    primaryColor: '#003399',
    secondaryColor: '#E65100',
    symbol: 'shield-book',
    country: 'Taiwan',
    typeBadge: 'Leader in Social Sciences & Humanities',
  },

  // ── United Kingdom ─────────────────────────────────
  'imperial college london': {
    shortName: 'Imperial',
    motto: 'Scientia Imperii Decus et Tutamen',
    established: '1907',
    primaryColor: '#002147',
    secondaryColor: '#005A9C',
    symbol: 'lion',
    country: 'United Kingdom',
    typeBadge: 'Global Science, Tech & Medicine Leader',
  },
  'university college london': {
    shortName: 'UCL',
    motto: 'Cuncti Adsint Meritaeque Expectent Praemia Palmae',
    established: '1826',
    primaryColor: '#500778',
    secondaryColor: '#002855',
    symbol: 'shield-book',
    country: 'United Kingdom',
    typeBadge: 'London Multi-Faculty Powerhouse',
  },
  'king’s college london': {
    shortName: 'KCL',
    motto: 'Sancte et Sapienter',
    established: '1829',
    primaryColor: '#E4002B',
    secondaryColor: '#0A2540',
    symbol: 'crown',
    country: 'United Kingdom',
    typeBadge: 'Historic Royal Charter University',
  },
  'university of manchester': {
    shortName: 'Manchester',
    motto: 'Cognitio, Sapientia, Humanitas',
    established: '1824',
    primaryColor: '#660099',
    secondaryColor: '#FFCC00',
    symbol: 'shield-book',
    country: 'United Kingdom',
    typeBadge: 'Russell Group Research Titan',
  },
  'university of edinburgh': {
    shortName: 'Edinburgh',
    motto: 'Approbate Nihil Nisi Probissimum',
    established: '1583',
    primaryColor: '#041E42',
    secondaryColor: '#D50032',
    symbol: 'lion',
    country: 'United Kingdom',
    typeBadge: 'Ancient Scottish Research University',
  },
  'university of warwick': {
    shortName: 'Warwick',
    motto: 'Mens Agitat Molem',
    established: '1965',
    primaryColor: '#C8102E',
    secondaryColor: '#00205B',
    symbol: 'shield-book',
    country: 'United Kingdom',
    typeBadge: 'Top Tier Economics & Tech Center',
  },
  'university of bristol': {
    shortName: 'Bristol',
    motto: 'Vim Promovet Insitam',
    established: '1876',
    primaryColor: '#B01C2E',
    secondaryColor: '#002B49',
    symbol: 'shield-book',
    country: 'United Kingdom',
    typeBadge: 'World Leading Russell Group Member',
  },
  'university of birmingham': {
    shortName: 'Birmingham',
    motto: 'Per Ardua Ad Alta',
    established: '1900',
    primaryColor: '#002147',
    secondaryColor: '#C99700',
    symbol: 'lion',
    country: 'United Kingdom',
    typeBadge: 'Founding Red Brick University',
  },

  // ── United States ──────────────────────────────────
  'massachusetts institute of technology': {
    shortName: 'MIT',
    motto: 'Mens et Manus',
    established: '1861',
    primaryColor: '#A31F34',
    secondaryColor: '#8A8B8C',
    symbol: 'tech',
    country: 'United States',
    typeBadge: 'World #1 Engineering & Science Institute',
  },
  'stanford university': {
    shortName: 'Stanford',
    motto: 'Die Luft der Freiheit weht',
    established: '1885',
    primaryColor: '#8C1515',
    secondaryColor: '#B1040E',
    symbol: 'tree',
    country: 'United States',
    typeBadge: 'Silicon Valley Innovation Flagship',
  },
  'university of california, berkeley': {
    shortName: 'UC Berkeley',
    motto: 'Fiat Lux',
    established: '1868',
    primaryColor: '#003262',
    secondaryColor: '#FDB515',
    symbol: 'shield-book',
    country: 'United States',
    typeBadge: 'Top Public Research University in the World',
  },
  'carnegie mellon university': {
    shortName: 'CMU',
    motto: 'My Heart is in the Work',
    established: '1900',
    primaryColor: '#C41230',
    secondaryColor: '#1A1A1A',
    symbol: 'tech',
    country: 'United States',
    typeBadge: 'Global Leader in AI & Computer Science',
  },
  'georgia institute of technology': {
    shortName: 'Georgia Tech',
    motto: 'Progress and Service',
    established: '1885',
    primaryColor: '#B3A369',
    secondaryColor: '#003057',
    symbol: 'tech',
    country: 'United States',
    typeBadge: 'Top Tier Engineering Institution',
  },
  'university of michigan': {
    shortName: 'U-M',
    motto: 'Artes, Scientia, Veritas',
    established: '1817',
    primaryColor: '#00274C',
    secondaryColor: '#FFCB05',
    symbol: 'shield-book',
    country: 'United States',
    typeBadge: 'Public Ivy Research Giant',
  },
  'purdue university': {
    shortName: 'Purdue',
    motto: 'Education, Research, Service',
    established: '1869',
    primaryColor: '#CEB888',
    secondaryColor: '#000000',
    symbol: 'tech',
    country: 'United States',
    typeBadge: 'Cradle of Astronauts & Engineering',
  },
  'university of illinois urbana-champaign': {
    shortName: 'UIUC',
    motto: 'Learning and Labor',
    established: '1867',
    primaryColor: '#13294B',
    secondaryColor: '#FF5F05',
    symbol: 'shield-book',
    country: 'United States',
    typeBadge: 'Pioneering Computing & Engineering Academy',
  },
  'university of california, los angeles': {
    shortName: 'UCLA',
    motto: 'Fiat Lux',
    established: '1919',
    primaryColor: '#2774AE',
    secondaryColor: '#FFD100',
    symbol: 'shield-book',
    country: 'United States',
    typeBadge: 'America #1 Applied Public University',
  },

  // ── Canada ─────────────────────────────────────────
  'university of toronto': {
    shortName: 'U of T',
    motto: 'Velut Arbor Aevo',
    established: '1827',
    primaryColor: '#002A5C',
    secondaryColor: '#E31837',
    symbol: 'tree',
    country: 'Canada',
    typeBadge: 'Canada #1 Flagship University',
  },
  'university of british columbia': {
    shortName: 'UBC',
    motto: 'Tuum Est',
    established: '1908',
    primaryColor: '#0C2340',
    secondaryColor: '#0055B7',
    symbol: 'shield-book',
    country: 'Canada',
    typeBadge: 'Global Top Tier Research Center',
  },
  'mcgill university': {
    shortName: 'McGill',
    motto: 'Grandescunt Aucta Labore',
    established: '1821',
    primaryColor: '#ED1B2F',
    secondaryColor: '#000000',
    symbol: 'shield-book',
    country: 'Canada',
    typeBadge: 'Historic Canadian Research Titan',
  },
  'university of waterloo': {
    shortName: 'Waterloo',
    motto: 'Concordia Cum Veritate',
    established: '1957',
    primaryColor: '#FFD54F',
    secondaryColor: '#000000',
    symbol: 'tech',
    country: 'Canada',
    typeBadge: 'World Capital of Co-op & Computer Science',
  },
  'mcmaster university': {
    shortName: 'McMaster',
    motto: 'In Christo Omnia Constant',
    established: '1887',
    primaryColor: '#7A003C',
    secondaryColor: '#FDB515',
    symbol: 'eagle',
    country: 'Canada',
    typeBadge: 'Pioneering Medicine & Discovery',
  },
  'university of alberta': {
    shortName: 'U of A',
    motto: 'Quaecumque Vera',
    established: '1908',
    primaryColor: '#007C41',
    secondaryColor: '#FFDB05',
    symbol: 'tree',
    country: 'Canada',
    typeBadge: 'Leading Energy & AI Research Institute',
  },
  'western university': {
    shortName: 'Western',
    motto: 'Veritas et Utilitas',
    established: '1878',
    primaryColor: '#4F2683',
    secondaryColor: '#807F84',
    symbol: 'shield-book',
    country: 'Canada',
    typeBadge: 'Excellence in Business & Medical Sciences',
  },
  'queen’s university': {
    shortName: 'Queen’s',
    motto: 'Sapientia et Doctrina Stabilitas',
    established: '1841',
    primaryColor: '#002452',
    secondaryColor: '#FABD0F',
    symbol: 'crown',
    country: 'Canada',
    typeBadge: 'Royal Charter Traditional University',
  },

  // ── Australia ──────────────────────────────────────
  'university of melbourne': {
    shortName: 'UniMelb',
    motto: 'Postera Crescam Laude',
    established: '1853',
    primaryColor: '#094183',
    secondaryColor: '#A33E11',
    symbol: 'shield-book',
    country: 'Australia',
    typeBadge: 'Australia #1 Flagship University',
  },
  'university of sydney': {
    shortName: 'USyd',
    motto: 'Sidere Mens Eadem Mutato',
    established: '1850',
    primaryColor: '#E64626',
    secondaryColor: '#0148A4',
    symbol: 'lion',
    country: 'Australia',
    typeBadge: 'Oldest & Premier Australian University',
  },
  'unsw sydney': {
    shortName: 'UNSW',
    motto: 'Scientia Corde Manu et Mente',
    established: '1949',
    primaryColor: '#FFE600',
    secondaryColor: '#000000',
    symbol: 'lion',
    country: 'Australia',
    typeBadge: 'Group of Eight Engineering Leader',
  },
  'australian national university': {
    shortName: 'ANU',
    motto: 'Naturam Primum Cognoscere Rerum',
    established: '1946',
    primaryColor: '#00205B',
    secondaryColor: '#BE8925',
    symbol: 'shield-book',
    country: 'Australia',
    typeBadge: 'Federal Flagship Research Center',
  },
  'monash university': {
    shortName: 'Monash',
    motto: 'Ancora Imparo',
    established: '1958',
    primaryColor: '#006DAE',
    secondaryColor: '#000000',
    symbol: 'shield-book',
    country: 'Australia',
    typeBadge: 'Global Top 50 Research Giant',
  },
  'university of queensland': {
    shortName: 'UQ',
    motto: 'Scientia ac Labore',
    established: '1909',
    primaryColor: '#51247A',
    secondaryColor: '#962A8B',
    symbol: 'shield-book',
    country: 'Australia',
    typeBadge: 'Sandstone Biomedical & Tech Leader',
  },
  'university of adelaide': {
    shortName: 'Adelaide',
    motto: 'Sub Cruce Lumen',
    established: '1874',
    primaryColor: '#102542',
    secondaryColor: '#C41230',
    symbol: 'shield-book',
    country: 'Australia',
    typeBadge: 'Distinguished Group of Eight Member',
  },
  'university of western australia': {
    shortName: 'UWA',
    motto: 'Seek Wisdom',
    established: '1911',
    primaryColor: '#002B54',
    secondaryColor: '#FDB913',
    symbol: 'swan',
    country: 'Australia',
    typeBadge: 'Indian Ocean Rim Research Flagship',
  },

  // ── Germany ────────────────────────────────────────
  'technical university of munich': {
    shortName: 'TUM',
    motto: 'The Entrepreneurial University',
    established: '1868',
    primaryColor: '#0065BD',
    secondaryColor: '#FFFFFF',
    symbol: 'tech',
    country: 'Germany',
    typeBadge: 'Germany #1 University of Excellence',
  },
  'ludwig maximilian university of munich': {
    shortName: 'LMU Munich',
    motto: 'Universitas Ludovico-Maximilianea',
    established: '1472',
    primaryColor: '#00885B',
    secondaryColor: '#004731',
    symbol: 'shield-book',
    country: 'Germany',
    typeBadge: 'Historic Elite University of Excellence',
  },
  'lmu munich': {
    shortName: 'LMU Munich',
    motto: 'Universitas Ludovico-Maximilianea',
    established: '1472',
    primaryColor: '#00885B',
    secondaryColor: '#004731',
    symbol: 'shield-book',
    country: 'Germany',
    typeBadge: 'Historic Elite University of Excellence',
  },
  'heidelberg university': {
    shortName: 'Uni Heidelberg',
    motto: 'Semper Apertus',
    established: '1386',
    primaryColor: '#C00000',
    secondaryColor: '#1B1C1A',
    symbol: 'shield-book',
    country: 'Germany',
    typeBadge: 'Germany Oldest University of Excellence',
  },
  'rwth aachen university': {
    shortName: 'RWTH Aachen',
    motto: 'Zukunft denken',
    established: '1870',
    primaryColor: '#00549F',
    secondaryColor: '#407FB7',
    symbol: 'eagle',
    country: 'Germany',
    typeBadge: 'Europe Premier Engineering Titan',
  },
  'karlsruhe institute of technology': {
    shortName: 'KIT',
    motto: 'The Research University in Helmholtz',
    established: '1825',
    primaryColor: '#009682',
    secondaryColor: '#4664AA',
    symbol: 'tech',
    country: 'Germany',
    typeBadge: 'National AI & Advanced Engineering Hub',
  },
  'humboldt university of berlin': {
    shortName: 'HU Berlin',
    motto: 'Universitas Litterarum',
    established: '1810',
    primaryColor: '#00376C',
    secondaryColor: '#B5A36A',
    symbol: 'gate',
    country: 'Germany',
    typeBadge: 'Mother of Modern Universities',
  },
  'free university of berlin': {
    shortName: 'FU Berlin',
    motto: 'Veritas, Justitia, Libertas',
    established: '1948',
    primaryColor: '#003366',
    secondaryColor: '#99CC00',
    symbol: 'tree',
    country: 'Germany',
    typeBadge: 'International Research University of Excellence',
  },
  'technical university of berlin': {
    shortName: 'TU Berlin',
    motto: 'Wir haben die Ideen für die Zukunft',
    established: '1879',
    primaryColor: '#C50F3C',
    secondaryColor: '#717171',
    symbol: 'tech',
    country: 'Germany',
    typeBadge: 'Metropolitan TU9 Technical Pioneer',
  },
  'university of freiburg': {
    shortName: 'Uni Freiburg',
    motto: 'Die Wahrheit wird euch frei machen',
    established: '1457',
    primaryColor: '#004A99',
    secondaryColor: '#002D62',
    symbol: 'crown',
    country: 'Germany',
    typeBadge: 'Comprehensive Research University of Excellence',
  },
  'university of stuttgart': {
    shortName: 'Uni Stuttgart',
    motto: 'Intelligente Systeme für die Zukunft',
    established: '1829',
    primaryColor: '#004191',
    secondaryColor: '#EE7F00',
    symbol: 'tech',
    country: 'Germany',
    typeBadge: 'Automotive & High-Tech TU9 Leader',
  },

  // ── Europe ─────────────────────────────────────────
  'delft university of technology': {
    shortName: 'TU Delft',
    motto: 'Challenge the Future',
    established: '1842',
    primaryColor: '#00A6D6',
    secondaryColor: '#000000',
    symbol: 'tech',
    country: 'Netherlands',
    typeBadge: 'Global Leader in Architecture & Technology',
  },
  'university of amsterdam': {
    shortName: 'UvA',
    motto: 'Led by Ambition, Bound by Integrity',
    established: '1632',
    primaryColor: '#BC0031',
    secondaryColor: '#1F1E1E',
    symbol: 'shield-book',
    country: 'Netherlands',
    typeBadge: 'Historic European Academic Leader',
  },
  'trinity college dublin': {
    shortName: 'TCD',
    motto: 'Perpetuis Futuris Temporibus Duraturam',
    established: '1592',
    primaryColor: '#08295E',
    secondaryColor: '#DAA520',
    symbol: 'lion',
    country: 'Ireland',
    typeBadge: 'Ireland #1 Ancient University',
  },
  'university college dublin': {
    shortName: 'UCD',
    motto: 'Ad Astra',
    established: '1854',
    primaryColor: '#003366',
    secondaryColor: '#EAA023',
    symbol: 'shield-book',
    country: 'Ireland',
    typeBadge: 'Global Research & Innovation Hub',
  },
  'politecnico di milano': {
    shortName: 'PoliMi',
    motto: 'Engineering, Architecture, Design',
    established: '1863',
    primaryColor: '#1F2F44',
    secondaryColor: '#C49A45',
    symbol: 'tech',
    country: 'Italy',
    typeBadge: 'Italy #1 Technical University',
  },
  'sciences po': {
    shortName: 'Sciences Po',
    motto: 'Comprendre Notre Temps Pour Agir Sur Le Monde',
    established: '1872',
    primaryColor: '#A6192E',
    secondaryColor: '#1A1A1A',
    symbol: 'lion',
    country: 'France',
    typeBadge: 'Global Top School in Politics & International Affairs',
  },

  // ── Luxembourg ─────────────────────────────────────
  'university of luxembourg': {
    shortName: 'Uni.lu',
    motto: 'Multilingual, International, Research-Oriented',
    established: '2003',
    primaryColor: '#E50046',
    secondaryColor: '#003A63',
    symbol: 'tree',
    country: 'Luxembourg',
    typeBadge: 'Europe Multilingual Research Flagship',
  },
  'luxembourg school of business': {
    shortName: 'LSB',
    motto: 'Leadership for Tomorrow',
    established: '2014',
    primaryColor: '#0D2C54',
    secondaryColor: '#C5A059',
    symbol: 'lion',
    country: 'Luxembourg',
    typeBadge: 'Accredited European Business School',
  },

  // ── United Arab Emirates ───────────────────────────
  'university of birmingham dubai': {
    shortName: 'UoB Dubai',
    motto: 'Per Ardua Ad Alta',
    established: '2018',
    primaryColor: '#002147',
    secondaryColor: '#C99700',
    symbol: 'lion',
    country: 'UAE',
    typeBadge: 'First Global Top 100 Dubai Branch',
  },
  'heriot-watt university dubai': {
    shortName: 'Heriot-Watt',
    motto: 'Heart, Hand, Mind',
    established: '2005',
    primaryColor: '#002D62',
    secondaryColor: '#F2A900',
    symbol: 'crown',
    country: 'UAE',
    typeBadge: 'Pioneering British Campus in Dubai',
  },
  'middlesex university dubai': {
    shortName: 'MDX Dubai',
    motto: 'Learn, Innovate, Succeed',
    established: '2005',
    primaryColor: '#D31145',
    secondaryColor: '#000000',
    symbol: 'crown',
    country: 'UAE',
    typeBadge: 'Award-Winning British University',
  },
  'university of wollongong in dubai': {
    shortName: 'UOWD',
    motto: 'Personalised Excellence in Education',
    established: '1993',
    primaryColor: '#001C3D',
    secondaryColor: '#E31B23',
    symbol: 'crown',
    country: 'UAE',
    typeBadge: 'Longest-Established Australian Campus in UAE',
  },
  'canadian university dubai': {
    shortName: 'CUD',
    motto: 'Inspiring Minds, Transforming Lives',
    established: '2006',
    primaryColor: '#D8232A',
    secondaryColor: '#C5A059',
    symbol: 'tree',
    country: 'UAE',
    typeBadge: 'Premier Canadian Curriculum Gateway',
  },
  'american university in dubai': {
    shortName: 'AUD',
    motto: 'Education for Global Competence',
    established: '1995',
    primaryColor: '#005A36',
    secondaryColor: '#C5A059',
    symbol: 'eagle',
    country: 'UAE',
    typeBadge: 'US-Accredited Private Institution',
  },
  'university of sharjah': {
    shortName: 'UOS',
    motto: 'Where Knowledge Meets Values',
    established: '1997',
    primaryColor: '#0A5C36',
    secondaryColor: '#DAA520',
    symbol: 'crown',
    country: 'UAE',
    typeBadge: 'Leading Research & Heritage Academy',
  },
  'khalifa university': {
    shortName: 'KU UAE',
    motto: 'Innovating for Tomorrow',
    established: '2007',
    primaryColor: '#004B87',
    secondaryColor: '#17B978',
    symbol: 'eagle',
    country: 'UAE',
    typeBadge: 'UAE #1 Science & Engineering University',
  },
  'united arab emirates university': {
    shortName: 'UAEU',
    motto: 'The University of the Future',
    established: '1976',
    primaryColor: '#007A3D',
    secondaryColor: '#C5A059',
    symbol: 'eagle',
    country: 'UAE',
    typeBadge: 'National Comprehensive University of UAE',
  },
};

export function getUniversityMeta(uniName: string): UniversityMeta {
  const key = uniName.toLowerCase().trim();
  if (UNIVERSITY_LOGO_DATA[key]) return UNIVERSITY_LOGO_DATA[key];

  // Try substring lookup
  for (const [k, v] of Object.entries(UNIVERSITY_LOGO_DATA)) {
    if (key.includes(k) || k.includes(key)) return v;
  }

  // Fallback metadata
  const initials = uniName
    .replace(/\([^)]*\)/g, '')
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0].toUpperCase())
    .slice(0, 4)
    .join('');

  return {
    shortName: initials || 'UNI',
    motto: 'Excellence in International Higher Education',
    established: 'EST.',
    primaryColor: '#00222B',
    secondaryColor: '#A33E11',
    symbol: 'shield-book',
    country: 'International',
    typeBadge: 'Recognized Higher Institution',
  };
}

function EmblemSymbol({
  symbol,
  primaryColor,
  secondaryColor,
  className = 'w-10 h-10',
}: {
  symbol: UniversityMeta['symbol'];
  primaryColor: string;
  secondaryColor: string;
  className?: string;
}) {
  switch (symbol) {
    case 'gingko':
      // Two Ginkgo biloba leaves (UTokyo & SKKU)
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" aria-hidden="true">
          <path
            d="M50 85 C48 70 30 65 20 50 C10 35 25 20 40 25 C48 28 50 35 50 35 C50 35 52 28 60 25 C75 20 90 35 80 50 C70 65 52 70 50 85 Z"
            fill={primaryColor}
            opacity="0.95"
          />
          <path
            d="M50 85 C51 72 65 65 74 52 C82 40 70 28 58 32 C51 35 50 40 50 40 C50 40 49 35 42 32 C30 28 18 40 26 52 C35 65 49 72 50 85 Z"
            fill={secondaryColor}
            opacity="0.9"
          />
          <circle cx="50" cy="50" r="6" fill="#FFFFFF" />
        </svg>
      );

    case 'tree':
      // Majestic academic oak/camphor/redwood tree
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" aria-hidden="true">
          <circle cx="50" cy="42" r="32" fill={primaryColor} opacity="0.95" />
          <path
            d="M50 78 L50 48 M50 56 L42 46 M50 52 L58 44 M46 78 L54 78"
            stroke="#FFFFFF"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <circle cx="50" cy="30" r="4" fill={secondaryColor} />
          <circle cx="36" cy="40" r="4" fill={secondaryColor} />
          <circle cx="64" cy="40" r="4" fill={secondaryColor} />
        </svg>
      );

    case 'lion':
      // Heraldic lion rampant (NUS, Imperial, Birmingham, Edinburgh)
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" aria-hidden="true">
          <circle cx="50" cy="50" r="44" fill={primaryColor} />
          <path
            d="M38 32 C38 28 44 26 48 26 C53 26 58 29 58 34 C58 37 55 40 52 42 L52 46 C57 44 64 47 64 54 C64 60 58 64 52 64 L48 64 L48 72 L42 72 L42 46 C39 46 36 43 36 40 C36 36 38 34 38 32 Z"
            fill={secondaryColor}
          />
          <path
            d="M60 36 C64 34 68 38 66 42 M35 56 C30 60 32 68 38 68"
            stroke="#FFFFFF"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="48" cy="32" r="2.5" fill="#FFFFFF" />
        </svg>
      );

    case 'eagle':
      // Heraldic eagle with outstretched wings
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" aria-hidden="true">
          <circle cx="50" cy="50" r="44" fill={primaryColor} />
          <path
            d="M50 26 L54 36 L66 32 L60 44 L74 44 L62 54 L70 66 L56 60 L50 76 L44 60 L30 66 L38 54 L26 44 L40 44 L34 32 L46 36 Z"
            fill={secondaryColor}
          />
          <circle cx="50" cy="48" r="5" fill="#FFFFFF" />
        </svg>
      );

    case 'tiger':
      // Korea University tiger badge
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" aria-hidden="true">
          <circle cx="50" cy="50" r="44" fill={primaryColor} />
          <path
            d="M35 32 L42 42 M65 32 L58 42 M50 36 L50 48 M40 52 C45 56 55 56 60 52 M46 62 L54 62 L50 68 Z"
            stroke="#FFFFFF"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle cx="38" cy="48" r="3.5" fill={secondaryColor} />
          <circle cx="62" cy="48" r="3.5" fill={secondaryColor} />
        </svg>
      );

    case 'swan':
      // UWA black swan
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" aria-hidden="true">
          <circle cx="50" cy="50" r="44" fill={primaryColor} />
          <path
            d="M42 32 C42 26 50 24 54 28 C58 32 54 40 50 48 C44 56 36 62 44 68 C52 74 68 70 72 60 C66 64 56 64 54 58 C52 52 58 46 62 42"
            stroke={secondaryColor}
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle cx="51" cy="28" r="2.5" fill="#FFFFFF" />
        </svg>
      );

    case 'gate':
      // Classical academic temple / gate (SNU, NTU Taiwan)
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" aria-hidden="true">
          <circle cx="50" cy="50" r="44" fill={primaryColor} />
          {/* Classical pediment & columns */}
          <path d="M26 40 L50 26 L74 40 Z" fill={secondaryColor} />
          <rect x="28" y="42" width="44" height="4" fill="#FFFFFF" />
          <rect x="32" y="48" width="6" height="24" fill="#FFFFFF" />
          <rect x="42" y="48" width="6" height="24" fill="#FFFFFF" />
          <rect x="52" y="48" width="6" height="24" fill="#FFFFFF" />
          <rect x="62" y="48" width="6" height="24" fill="#FFFFFF" />
          <rect x="26" y="74" width="48" height="4" fill={secondaryColor} />
        </svg>
      );

    case 'blossom':
      // Academic flower blossom (Kyung Hee, Osaka, Waseda)
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" aria-hidden="true">
          <circle cx="50" cy="50" r="44" fill={primaryColor} />
          <circle cx="50" cy="30" r="14" fill={secondaryColor} opacity="0.9" />
          <circle cx="69" cy="44" r="14" fill={secondaryColor} opacity="0.9" />
          <circle cx="62" cy="67" r="14" fill={secondaryColor} opacity="0.9" />
          <circle cx="38" cy="67" r="14" fill={secondaryColor} opacity="0.9" />
          <circle cx="31" cy="44" r="14" fill={secondaryColor} opacity="0.9" />
          <circle cx="50" cy="50" r="9" fill="#FFFFFF" />
          <circle cx="50" cy="50" r="4" fill={primaryColor} />
        </svg>
      );

    case 'tech':
      // Torch / gear / atomic technology emblem (MIT, KAIST, POSTECH, TUM)
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" aria-hidden="true">
          <circle cx="50" cy="50" r="44" fill={primaryColor} />
          {/* Torch and flame */}
          <path
            d="M50 22 C44 32 56 36 50 48 C46 38 42 34 50 22 Z"
            fill={secondaryColor}
          />
          <path d="M44 48 L56 48 L53 74 L47 74 Z" fill="#FFFFFF" />
          {/* Dual orbital tech rings */}
          <ellipse cx="50" cy="50" rx="34" ry="12" stroke={secondaryColor} strokeWidth="2.5" transform="rotate(-30 50 50)" />
          <ellipse cx="50" cy="50" rx="34" ry="12" stroke="#FFFFFF" strokeWidth="2" transform="rotate(30 50 50)" />
        </svg>
      );

    case 'crown':
      // Imperial crown and battlements
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" aria-hidden="true">
          <circle cx="50" cy="50" r="44" fill={primaryColor} />
          <path
            d="M26 62 L32 38 L42 50 L50 32 L58 50 L68 38 L74 62 Z"
            fill={secondaryColor}
          />
          <rect x="26" y="64" width="48" height="6" rx="2" fill="#FFFFFF" />
          <circle cx="32" cy="36" r="3" fill="#FFFFFF" />
          <circle cx="50" cy="30" r="3.5" fill="#FFFFFF" />
          <circle cx="68" cy="36" r="3" fill="#FFFFFF" />
        </svg>
      );

    case 'shield-book':
    default:
      // Traditional classical university shield with open book
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" aria-hidden="true">
          <path
            d="M24 24 L76 24 C76 48 72 70 50 82 C28 70 24 48 24 24 Z"
            fill={primaryColor}
            stroke={secondaryColor}
            strokeWidth="3"
          />
          {/* Open Book */}
          <path
            d="M34 40 C42 38 48 42 50 44 C52 42 58 38 66 40 L66 58 C58 56 52 60 50 62 C48 60 42 56 34 58 Z"
            fill="#FFFFFF"
          />
          <line x1="50" y1="44" x2="50" y2="62" stroke={primaryColor} strokeWidth="2" />
          <line x1="38" y1="46" x2="46" y2="46" stroke={primaryColor} strokeWidth="1.5" />
          <line x1="38" y1="52" x2="46" y2="52" stroke={primaryColor} strokeWidth="1.5" />
          <line x1="54" y1="46" x2="62" y2="46" stroke={primaryColor} strokeWidth="1.5" />
          <line x1="54" y1="52" x2="62" y2="52" stroke={primaryColor} strokeWidth="1.5" />
        </svg>
      );
  }
}

/**
 * UniversityLogo component:
 * - variant="banner": Full hero banner showcase with illuminated crest, official motto, and verification
 * - variant="card": 16:10 top card image replacement with authentic crest and metadata
 * - variant="seal": Standalone circular heraldic seal badge
 */
export function UniversityLogo({
  university,
  destinationName,
  variant = 'card',
  className = '',
}: {
  university: string;
  destinationName?: string;
  variant?: 'banner' | 'card' | 'seal';
  className?: string;
}) {
  const meta = getUniversityMeta(university);
  const dest = destinationName || meta.country;

  if (variant === 'seal') {
    return (
      <div
        className={`w-14 h-14 rounded-full flex items-center justify-center p-1.5 shadow-md border-2 ${className}`}
        style={{ backgroundColor: meta.primaryColor, borderColor: meta.secondaryColor }}
        title={`${university} Official Crest`}
      >
        <EmblemSymbol
          symbol={meta.symbol}
          primaryColor={meta.primaryColor}
          secondaryColor={meta.secondaryColor}
          className="w-full h-full"
        />
      </div>
    );
  }

  if (variant === 'card') {
    return (
      <div
        className={`relative aspect-[16/10] w-full overflow-hidden flex flex-col justify-between p-4 bg-[#FAF8F5] border-b border-[#E6DDCC] group-hover:bg-white transition-colors select-none ${className}`}
        style={{
          background: `radial-gradient(circle at 50% 40%, #FFFFFF 0%, #FAF8F5 70%, #F5EFE6 100%)`,
        }}
      >
        {/* Subtle Watermark Monogram behind */}
        <span
          aria-hidden="true"
          className="absolute -right-2 -bottom-4 font-serif text-7xl font-bold opacity-[0.06] pointer-events-none select-none"
          style={{ color: meta.primaryColor }}
        >
          {meta.shortName}
        </span>

        {/* Top Badges Row */}
        <div className="flex items-center justify-between z-10">
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/95 border border-[#E6DDCC] shadow-xs">
            <CountryFlag country={dest} width={13} height={9} className="rounded-xs object-cover" />
            <span className="text-[10px] font-bold text-[#1B1C1A] uppercase tracking-wider">{dest}</span>
          </div>

          <span
            className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold border shadow-xs"
            style={{
              backgroundColor: `${meta.primaryColor}10`,
              borderColor: `${meta.primaryColor}30`,
              color: meta.primaryColor,
            }}
          >
            {meta.established !== 'EST.' ? `Est. ${meta.established}` : meta.shortName}
          </span>
        </div>

        {/* Center: University Logo / Emblem Shield */}
        <div className="flex flex-col items-center justify-center my-auto z-10 py-1">
          <div
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center p-2.5 shadow-md border group-hover:scale-105 transition-transform duration-300"
            style={{
              backgroundColor: '#FFFFFF',
              borderColor: `${meta.primaryColor}30`,
              boxShadow: `0 8px 20px -6px ${meta.primaryColor}25`,
            }}
          >
            <EmblemSymbol
              symbol={meta.symbol}
              primaryColor={meta.primaryColor}
              secondaryColor={meta.secondaryColor}
              className="w-full h-full drop-shadow-xs"
            />
          </div>

          <span
            className="mt-2 text-xs font-serif font-bold tracking-wide uppercase"
            style={{ color: meta.primaryColor }}
          >
            {meta.shortName}
          </span>
        </div>

        {/* Bottom Banner Accent Line */}
        <div className="h-1 w-full rounded-full opacity-60" style={{ backgroundColor: meta.primaryColor }} />
      </div>
    );
  }

  // Variant === "banner" (The Large Showcase Slide Banner)
  return (
    <div
      className={`relative w-full h-full flex flex-col justify-between p-4 sm:p-7 lg:p-9 pb-16 sm:pb-8 overflow-hidden select-none ${className}`}
      style={{
        backgroundColor: '#00222B',
        background: `radial-gradient(circle at 85% 30%, ${meta.primaryColor}55 0%, #00222B 80%)`,
      }}
    >
      {/* Decorative Heraldic Geometric Rings & Watermark in background */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none select-none opacity-[0.06] flex items-center justify-center">
        <span className="font-serif text-[130px] sm:text-[220px] font-bold text-white tracking-tighter leading-none">
          {meta.shortName[0]}
        </span>
      </div>

      {/* Top Left: Destination Flag & Badge */}
      <div className="z-10 flex items-center gap-2">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#FC7F4E] shadow-sm">
          <CountryFlag country={dest} width={14} height={10} className="rounded-xs" />
          <span>{dest}</span>
        </div>
        <span className="inline-flex px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-[10px] sm:text-[11px] font-mono text-white/90">
          {meta.typeBadge}
        </span>
      </div>

      {/* Center Layout: Left Title & Credentials, Right Official Logo Crest Plaque */}
      <div className="z-10 flex items-center justify-between gap-3 sm:gap-6 my-auto">
        <div className="flex-1 pr-1 sm:pr-4 max-w-[70%] sm:max-w-[75%]">
          <h3 className="font-serif text-base sm:text-2xl lg:text-3xl font-bold text-white tracking-tight leading-tight drop-shadow-md">
            {university}
          </h3>
          <p className="mt-0.5 sm:mt-1 text-[11px] sm:text-xs lg:text-sm text-white/80 font-medium line-clamp-2 max-w-xl drop-shadow-sm">
            {meta.motto ? `"${meta.motto}"` : 'Accredited international academic pathways & university degrees'}
          </p>
          <div className="hidden sm:flex flex-wrap items-center gap-2.5 mt-2.5 pt-2.5 border-t border-white/15 text-[11px] text-white/70 font-mono">
            <span>{meta.established !== 'EST.' ? `Est. ${meta.established}` : 'Accredited'}</span>
            <span>•</span>
            <span className="text-[#FC7F4E] font-semibold">{meta.shortName}</span>
            <span>•</span>
            <span>Verified International Degree Track</span>
          </div>
        </div>

        {/* Crisp Institutional Crest Plaque (Visible on ALL devices) */}
        <div className="shrink-0 flex items-center justify-center">
          <div
            className="w-16 h-16 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-2xl sm:rounded-3xl bg-white p-2 sm:p-3.5 shadow-2xl border-2 flex flex-col items-center justify-center group"
            style={{
              borderColor: meta.secondaryColor,
              boxShadow: `0 10px 30px -5px ${meta.primaryColor}80`,
            }}
          >
            <EmblemSymbol
              symbol={meta.symbol}
              primaryColor={meta.primaryColor}
              secondaryColor={meta.secondaryColor}
              className="w-9 h-9 sm:w-14 sm:h-14 lg:w-16 lg:h-16 drop-shadow-xs"
            />
            <span
              className="mt-1 text-[9px] sm:text-[11px] font-serif font-bold uppercase tracking-wider block text-center truncate max-w-full px-0.5"
              style={{ color: meta.primaryColor }}
            >
              {meta.shortName}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom spacer for counter & navigation arrow clearance */}
      <div className="h-8 sm:h-6 w-full" />
    </div>
  );
}
