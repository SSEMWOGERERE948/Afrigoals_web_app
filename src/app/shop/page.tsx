import { ShopHeader } from "@/components/shop/shop-header"
import { TeamSection } from "@/components/shop/team-section"
import { BottomNavigation } from "@/components/shop/bottom-navigation"

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ShopHeader />
      <main className="container mx-auto px-4 pb-20">
        <TeamSection
          team="UGANDA CRANES"
          logo="/images/uganda_cranes.png"
          products={[
            {
              id: 1,
              name: "Home Jersey 2024",
              price: 79.99,
              image: "/images/cranes_3.jpeg",
              color: "red",
            },
            {
              id: 2,
              name: "Away Jersey 2024",
              price: 79.99,
              image: "/images/cranes_1.jpeg",
              color: "white",
            },
            {
              id: 3,
              name: "Third Kit 2024",
              price: 79.99,
              image: "/images/cranes_2.jpg",
              color: "yellow",
            },
          ]}
        />
        <TeamSection
          team="VIPERS FC"
          logo="/placeholder.svg?height=40&width=40"
          products={[
            {
              id: 4,
              name: "Home Jersey 2024",
              price: 59.99,
              image: "/images/vipers_red.jpeg",
              color: "red",
            },
            {
              id: 5,
              name: "Away Jersey 2024",
              price: 59.99,
              image: "/images/vipers_blue.jpeg",
              color: "blue",
            },
          ]}
        />
        <TeamSection
          team="SC VILLA"
          logo="/images/villa_logo.png"
          products={[
            {
              id: 6,
              name: "Home Jersey 2024",
              price: 59.99,
              image: "/images/sc_villa_white.jpeg",
              color: "blue",
            },
            {
              id: 7,
              name: "Away Jersey 2024",
              price: 59.99,
              image: "/images/golden_villa.jpeg",
              color: "gold",
            },
          ]}
        />
      </main>
      <BottomNavigation />
    </div>
  )
}
