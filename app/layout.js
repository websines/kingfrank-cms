import { Jost } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import PrelineScript from "@/components/PrelineComponent";

const jost = Jost({ subsets: ["latin"] });

export const metadata = {
  title: "King Frank Co.",
  description: "Bicycles for Sale",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-white">
      <body
        className={`${jost.className} md:mx-auto mx-4 md:px-16 md:max-w-[80%] bg-white`}
      >
        <Navbar />
        {children}
      </body>
      <PrelineScript />
    </html>
  );
}
