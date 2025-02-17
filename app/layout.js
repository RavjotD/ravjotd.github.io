import TransitionProvider from "./components/transitionProvider";
import Footer from "./components/Footer";
import "./globals.css";

// Root page of children. Surrounding children elements from Transition page layout.
export const metadata = {
  title: "Ravjot Duhra",
  description: "Ravjot Duhra's Portfolio",
  icons: {
    icon: ["/icon.png"],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
