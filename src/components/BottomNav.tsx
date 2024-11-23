import { FaFutbol, FaNewspaper, FaTrophy, FaStar, FaShoppingCart, FaBars } from 'react-icons/fa'
import Link from 'next/link'

export default function BottomNav() {
  const navItems = [
    { icon: <FaFutbol />, label: 'Matches', href: '/' },
    { icon: <FaNewspaper />, label: 'News', href: '/news' },
    { icon: <FaTrophy />, label: 'Leagues', href: '/leagues' },
    { icon: <FaStar />, label: 'Favourite', href: '/favourite' },
    { icon: <FaShoppingCart />, label: 'Shop', href: '/shop' },
    { icon: <FaBars />, label: 'More', href: '/' },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="grid grid-cols-6 h-16">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex flex-col items-center justify-center text-gray-600 hover:text-green-600"
          >
            <span className="text-xl mb-1">{item.icon}</span>
            <span className="text-xs">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}