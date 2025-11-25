import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Pushkar Agnihotri - Software Engineer",
  description: "Software Engineer with 4+ years of experience in Android development. Specializing in Kotlin, Jetpack Compose, and modern mobile app development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
