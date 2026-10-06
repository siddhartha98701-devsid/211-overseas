import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Outfit } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';
import { siteContent } from '@/content/site';
import { CallbackProvider } from '@/components/lead/CallbackProvider';
import { MotionProvider } from '@/components/ui/MotionProvider';
import { FlightPathLayer } from '@/components/ui/FlightPathLayer';
import { ContactFloatingButtons } from '@/components/ContactFloatingButtons';

// Free look-alikes for the brand fonts (Boston Angel Bold / Gordita). The licensed
// fonts, when added, are listed first in the --font-serif / --font-sans stacks.
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#000000',
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
    <html lang="en" className={`${outfit.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-[#FFFFFF] text-[#000000]">
        <MotionProvider>
        <CallbackProvider>
        <FlightPathLayer />
        <Navbar />
        <main className="relative z-[1] min-h-screen">{children}</main>
        <div className="relative z-[1]">
          <Footer />
        </div>
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
        </CallbackProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
