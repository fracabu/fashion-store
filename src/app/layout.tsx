import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/common/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fashion Store',
  description: 'Il tuo negozio di abbigliamento online',
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" suppressHydrationWarning>
      <head>
        <meta
          name="format-detection"
          content="telephone=no, date=no, email=no, address=no"
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <Header />
        <main className="min-h-screen pt-16">
          {children}
        </main>
      </body>
    </html>
  )
}