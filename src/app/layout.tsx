import './globals.css'
import Navigation from '@/components/Navigation'
import BottomNav from '@/components/BottomNav'

export const metadata = {
  title: 'AfriGoals - Ugandan Football Platform',
  description: 'Your premier destination for Ugandan football',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Navigation />
        <main className="pb-16">{children}</main>
        <BottomNav />
      </body>
    </html>
  )
}