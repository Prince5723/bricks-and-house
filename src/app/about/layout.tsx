import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Premier Construction Company',
  description: 'Learn about our 25+ years of excellence in construction, our dedicated team, and our commitment to quality building services across residential and commercial projects.',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}