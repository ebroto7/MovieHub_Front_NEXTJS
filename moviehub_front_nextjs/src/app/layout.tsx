import type { Metadata } from 'next'
import './globals.css'

import { CommentsProvider } from "@/context/commentsContext"
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { UserLoggedProvider } from '@/context/userContext';


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

      <UserProvider>
        <UserLoggedProvider>
          <CommentsProvider>
            <body className={inter.className}>
              {children}
            </body>
          </CommentsProvider>
        </UserLoggedProvider>
      </UserProvider>

    </html>
  )
}
