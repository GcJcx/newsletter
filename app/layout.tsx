import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Coming Soon - TradixAI',
  description: 'Something amazing is coming soon. Join our newsletter for exclusive updates and early access.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}