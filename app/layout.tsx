import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SideBar from '@/components/SideBar';
import { BASE_URL } from '@/config/environment';
import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Portfolio | Suhaan Bhandary',
    template: '%s | Suhaan Bhandary',
  },
  description:
    'Full Stack Developer with a passion for innovation, specializing in React, Express, and TypeScript, dedicated to crafting seamless solutions and enhancing user experiences.',
  alternates: {
    canonical: '/',
  },
  category: 'technology',
  verification: {
    google: 'kGyUpbXLn-r0ykvsjfRlcnhyIhSuZLHuuzGUu4RTAic',
  },
};

export const viewport: Viewport = {
  themeColor: 'rgb(25,25,36)',
};

export default function RootLayout({
  children,
  modal,
  skills,
  experience,
  projects,
  conferences,
  blogs,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
  skills: React.ReactNode;
  experience: React.ReactNode;
  projects: React.ReactNode;
  conferences: React.ReactNode;
  blogs: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <SideBar />
        <main className="px-14 md:px-40">
          {modal}
          {children}
          {skills}
          {experience}
          {projects}
          {conferences}
          {blogs}
          <Footer />
        </main>
      </body>
    </html>
  );
}
