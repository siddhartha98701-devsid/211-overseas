import type { Metadata, Viewport } from 'next';
import { Source_Serif_4, Figtree } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';
import { siteContent } from '@/content/site';
import { CallbackProvider } from '@/components/lead/CallbackProvider';
import { NotSureModal } from '@/components/lead/NotSureModal';
import { MotionProvider } from '@/components/ui/MotionProvider';
import { FlightPath } from '@/components/ui/FlightPath';
import { ContactFloatingButtons } from '@/components/ContactFloatingButtons';

// Fonts matched to the owner's poster: Source Serif 4 headings, Figtree body. (Boston Angel / Gordita remain
// first in the --font-serif / --font-sans stacks if licensed files are ever added.) The licensed
// fonts, when added, are listed first in the --font-serif / --font-sans stacks.
const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#2A2A2A',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://211overseas.com'),
  title: {
    default: '211 OVERSEAS study abroad — Your Future Has No Borders',
    template: '%s | 211 OVERSEAS',
  },
  description: siteContent.brand.description,
  keywords: [
    'Study in South Korea',
    'Seoul',
    'Busan',
    'Expert Guidance',
    '100% English-Taught Programs',
    'Undergraduate Programs',
    'Graduate Programs',
    'Game Development',
    'Animation',
    'Film and Visual Effects',
    'Digital Design',
    'Korean Language and Business',
    'Global Business Administration',
    'Computer Science',
    'IELTS 5.5+',
    'Duolingo Accepted',
    'Work in Germany',
    'Work in UAE',
    'Study Abroad Consultancy Ahmedabad',
  ],

  authors: [{ name: '211 OVERSEAS study abroad' }],
  creator: '211 OVERSEAS study abroad',
  openGraph: {
    title: '211 OVERSEAS study abroad — Your Future Has No Borders',
    description: siteContent.brand.description,
    url: 'https://www.211overseas.com',
    siteName: '211 OVERSEAS study abroad',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '211 OVERSEAS study abroad — Your Future Has No Borders',
    description: siteContent.brand.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${figtree.variable} ${sourceSerif.variable}`}>
      <body className="font-sans antialiased text-[#2A2A2A]">
        <MotionProvider>
        <CallbackProvider>
        <FlightPath />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': ['LocalBusiness', 'EducationalOrganization'],
              name: '211 OVERSEAS study abroad',
              alternateName: '211 OVERSEAS',
              description: siteContent.brand.description,
              telephone: siteContent.brand.phone,
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'B-1405, The Capital, Science City Road, Sola',
                addressLocality: 'Ahmedabad',
                addressRegion: 'Gujarat',
                postalCode: '380060',
                addressCountry: 'IN',
              },
              url: 'https://211overseas.com',
              priceRange: '₹₹',
              openingHours: 'Mo-Sa 10:00-19:00',
            }),
          }}
        />
        <ContactFloatingButtons />
        <NotSureModal />
        </CallbackProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
