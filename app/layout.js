import NavBar from "../components/NavBar";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider"

import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export default function RootLayout({ children }) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${roboto.className} antialiased width-full`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <NavBar />
          <main className="px-6 md:px-6 pt-16 pb-24 md:pt-20 md:pb-44 max-w-[700px] mx-auto">
            <div>{children}</div>
          </main>
          </ThemeProvider>

      </body>
    </html>
  );
}

