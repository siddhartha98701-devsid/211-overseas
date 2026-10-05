import type { Metadata, Viewport } from 'next';
import { Newsreader, Hanken_Grotesk } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';
import { siteContent } from '@/content/site';
import { FlightPath } from '@/components/ui/FlightPath';
import { ContactFloatingButtons } from '@/components/ContactFloatingButtons';

const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#F6F3EE',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://211overseas.com'),
  title: {
    default: '211 Overseas — Your Future Has No Borders',
    template: '%s | 211 Overseas',
  },
  description: siteContent.brand.description,
  keywords: [
    'Study in South Korea',
    'Work in Germany',
    'Healthcare in Germany',
    'Nurses Germany',
    'Work in UAE',
    'Dubai Jobs',
    'Overseas Education Ahmedabad',
    'Study Abroad Consultancy Gujarat',
  ],
  authors: [{ name: '211 Overseas' }],
  creator: '211 Overseas',
  openGraph: {
    title: '211 Overseas — Your Future Has No Borders',
    description: siteContent.brand.description,
    url: 'https://211overseas.com',
    siteName: '211 Overseas',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '211 Overseas — Your Future Has No Borders',
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
    <html lang="en" className={`${hankenGrotesk.variable} ${newsreader.variable}`}>
      <body className="font-sans antialiased bg-[#F6F3EE] text-[#15140F] selection:bg-[#2F4A3C]/15 selection:text-[#15140F]">
        <FlightPath />
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
              name: '211 Overseas',
              alternateName: '211 Overseas Consultancy',
              description: siteContent.brand.description,
              telephone: siteContent.brand.phone,
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Ahmedabad',
                addressRegion: 'Gujarat',
                addressCountry: 'IN',
              },
              url: 'https://211overseas.com',
              priceRange: '₹₹',
              openingHours: 'Mo-Sa 10:00-19:00',
            }),
          }}
        />
        <ContactFloatingButtons />
      </body>
    </html>
  );
}
