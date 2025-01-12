import { Roboto_Slab } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";

const inter = Roboto_Slab({ weight: ["400"], subsets: ["latin"] });

export const metadata = {
  title: "XLearnIon",
  description: "Learn About Web3 In Web3 Environment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body
        className={inter.className}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
