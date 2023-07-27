import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "嘉劉禎久 | kArtHiK",
  description: "A portfolio website to display my skills and to contact me!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.5.5/css/simple-line-icons.min.css"
        ></link>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
