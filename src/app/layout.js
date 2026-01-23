import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Pushkar Agnihotri - Software Engineer",
  description: "Software Engineer with 4+ years of experience in Android development. Specializing in Kotlin, Jetpack Compose, and modern mobile app development.",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon16.webp', sizes: '16x16', type: 'image/webp' },
      { url: '/favicon32.webp', sizes: '32x32', type: 'image/webp' },
    ],
    apple: [
      { url: '/appleicon.webp', type: 'image/webp' },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://s.pageclip.co/v1/pageclip.css" media="screen" />
      </head>
      <body className={outfit.className}>
        {children}
        <script src="https://s.pageclip.co/v1/pageclip.js" charSet="utf-8"></script>
      </body>
    </html>
  );
}
