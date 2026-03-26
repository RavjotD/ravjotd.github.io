import { DM_Serif_Display, Outfit, JetBrains_Mono } from "next/font/google";
import TransitionProvider from "./components/transitionProvider";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata = {
  title: "Ravjot Duhra — Infrastructure & Systems Engineer",
  description:
    "Systems and infrastructure engineer delivering technical solutions across enterprise integrations, cloud deployments, and full-stack application lifecycles.",
  icons: {
    icon: ["/icon.png"],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${outfit.variable} ${jetbrains.variable}`}>
      <body className="flex flex-col min-h-screen font-sans" suppressHydrationWarning>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
