import type { Metadata } from 'next'
import './globals.css'

import { CommentsProvider } from "@/context/commentsContext"


import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Movie Share',
  description: 'An application to share your movies and give your opinion',
}

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en">
      <CommentsProvider>
        <body className={inter.className}>
          {children}
        </body>
      </CommentsProvider>

    </html>
  )
}
