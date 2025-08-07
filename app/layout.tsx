import type React from "react"
import { Poppins } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata = {
  title: "Bokang Lethamaga Tladi | Portfolio",
  description: "Professional portfolio of Bokang Lethamaga Tladi",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-poppins bg-white text-gray-800`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Navbar />
          <main className="min-h-screen">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
