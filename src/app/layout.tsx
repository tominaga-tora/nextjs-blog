import './globals.css'

import type { Metadata } from 'next'
import { Inter, Kosugi_Maru, Noto_Sans_JP } from 'next/font/google'
import localFont from 'next/font/local'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
})

const kosugi = Kosugi_Maru({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-kosugi-maru'
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-inter'
})

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-noto-sans-jp'
})

export const metadata: Metadata = {
  title: '<Notion ブログサンプル> 記事一覧',
  description: 'notionAPIを利用したブログサンプル'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={``}>{children}</body>
    </html>
  )
}
