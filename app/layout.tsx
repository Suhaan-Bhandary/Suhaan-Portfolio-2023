import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Suhaan Bhandary",
  description: "Suhaan Bhandary Portfolio Website",
};

export default function RootLayout({
  children,
  modal,
  skills,
  experience,
  projects,
  education,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
  skills: React.ReactNode;
  experience: React.ReactNode;
  projects: React.ReactNode;
  education: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <SideBar />
        <main className="px-2 md:px-40">
          {modal}
          {children}
          {skills}
          {experience}
          {projects}
          {education}
          <Footer />
        </main>
      </body>
    </html>
  );
}
