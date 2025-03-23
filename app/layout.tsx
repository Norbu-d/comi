import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "ComicK - Read Manga Online",
  description: "Read manga online for free on ComicK with no ads, high quality images and support for all devices!",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#1a202c] text-gray-100`}>{children}</body>
    </html>
  )
}



import './globals.css'