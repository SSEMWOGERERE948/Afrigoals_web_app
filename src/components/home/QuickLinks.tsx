import { FiTruck, FiShoppingBag } from "react-icons/fi";
import { MdConfirmationNumber } from "react-icons/md"; 

export default function QuickLinks() {
  const links = [
    {
      icon: <MdConfirmationNumber className="w-8 h-8" />,
      title: "Book Tickets",
      description: "Secure your seats for upcoming matches",
      href: "/tickets",
    },
    {
      icon: <FiTruck className="w-8 h-8" />,
      title: "Find Transportation",
      description: "Easy travel to and from matches",
      href: "/transport",
    },
    {
      icon: <FiShoppingBag className="w-8 h-8" />,
      title: "Shop Jerseys",
      description: "Official team merchandise",
      href: "/shop",
    },
  ];

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold">Quick Links</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {links.map((link) => (
          <a
            key={link.title}
            href={link.href}
            className="card hover:shadow-lg transition-shadow flex flex-col items-center text-center p-6"
          >
            <div className="text-primary mb-4">{link.icon}</div>
            <h3 className="font-semibold mb-2">{link.title}</h3>
            <p className="text-gray-600 text-sm">{link.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
