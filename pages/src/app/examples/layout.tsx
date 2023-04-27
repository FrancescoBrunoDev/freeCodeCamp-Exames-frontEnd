import { Inter } from 'next/font/google'
import Header from '../components/header'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div lang="en" className='relative'>
      <Header />
      <div className={inter.className}>{children}
      </div>
    </div>
  )
}