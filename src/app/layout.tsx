import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Sidebar } from './components/Sidebar'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hero Tickets',
  description: 'Cire seu evento rápido e fácil',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <Navbar />
        <Sidebar />
        <div className='mb-8 mt-16 mr-20'>{children}</div>
        <Footer/>
      </body>
    </html>
  )
}
