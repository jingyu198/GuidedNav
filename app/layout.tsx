import type { Metadata } from 'next';
import './globals.css';
const title = 'GuidedNav: Shaping Vision-Language Navigation Representations through Pre-Action Attention and Spatial Guidance';
const description = 'GuidedNav strengthens vision-and-language navigation with subtask attention, landmark grounding, and spatial guidance. Explore our method, datasets, results, and robot demonstrations.';
export const metadata: Metadata = {
  title, description,
  metadataBase: new URL('https://jingyu198.github.io/GuidedNav/'),
  alternates: { canonical: 'https://jingyu198.github.io/GuidedNav/' },
  openGraph: { title, description, url: 'https://jingyu198.github.io/GuidedNav/', type: 'website', images: [{ url: 'https://jingyu198.github.io/GuidedNav/og.png', alt: 'GuidedNav: vision-language navigation with representation guidance' }] },
  twitter: { card: 'summary_large_image', title, description, images: ['https://jingyu198.github.io/GuidedNav/og.png'] },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}<script src="./interaction.js" defer /></body></html>;
}
