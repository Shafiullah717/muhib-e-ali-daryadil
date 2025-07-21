// app/layout.tsx
import '@/styles/globals.css'; // Make sure your global CSS file is imported

// Import your Header and Footer components
import Header from '@/components/common/Header/Header'; // Assuming your header component is at this path and named Header.tsx
import Footer from '@/components/common/Footer/Footer'; // Assuming your footer component is at this path and named Footer.tsx

// Metadata for your application (important for SEO)
export const metadata = {
  title: 'MUHIB-E-ALI-DARYADIL - Humanitarian Welfare Organization',
  description: 'MUHIB-E-ALI-DARYADIL is a dedicated humanitarian welfare organization committed to uplifting underprivileged communities through sustainable initiatives in Pakistan. Donate now to support our mission in education, food, and essential resources.',
  keywords: 'MUHIB-E-ALI-DARYADIL, humanitarian, welfare, organization, NGO, Pakistan, charity, donate, education, food, community development, social work',
  // You can add more metadata here like openGraph, twitter, etc.
  openGraph: {
    title: 'MUHIB-E-ALI-DARYADIL - Humanitarian Welfare Organization',
    description: 'MUHIB-E-ALI-DARYADIL is a dedicated humanitarian welfare organization committed to uplifting underprivileged communities through sustainable initiatives in Pakistan.',
    icons: {
    icon: '/favicon.ico', // Or use '/favicon.png'
    },
    url: 'https://www.yourwebsite.org', // Replace with your actual website URL
    siteName: 'MUHIB-E-ALI-DARYADIL',
    images: [
      {
        url: 'https://www.yourwebsite.org/assets/images/og-image.jpg', // Replace with a suitable OG image
        width: 1200,
        height: 630,
        alt: 'MUHIB-E-ALI-DARYADIL',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MUHIB-E-ALI-DARYADIL - Humanitarian Welfare Organization',
    description: 'Uplifting communities through sustainable welfare initiatives in Pakistan.',
    creator: '@yourtwitterhandle', // Replace with your Twitter handle if you have one
    images: ['https://www.yourwebsite.org/assets/images/twitter-image.jpg'], // Replace with a suitable Twitter image
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header /> {/* Your updated Header component */}
        <main className="pt-[76px]">
          {/* IMPORTANT: The 'pt-[76px]' class adds padding to the top of your main content.
            This is necessary because your Header component is 'fixed' at the top,
            which takes it out of the normal document flow and allows content to
            scroll underneath it.

            Adjust '76px' if your Header's actual height is different.
            You can find the exact height using your browser's developer tools.
          */}
          {children} {/* This is where your individual page content will be rendered */}
        </main>
        <Footer /> {/* Your updated Footer component */}
      </body>
    </html>
  );
}