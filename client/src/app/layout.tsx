import ReduxProvider from '@/components/provider'
import './globals.css'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Whether App',
  description: 'app sencilla del clima',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en" data-theme="ligth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="icon.ico" type="image/x-icon" />
        <title></title>
      </head>


      <body className={inter.className}><ReduxProvider>{children}</ReduxProvider></body>



    </html>
  )
}
