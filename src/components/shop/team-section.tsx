import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Product {
  id: number
  name: string
  price: number
  image: string
  color: string
}

interface TeamSectionProps {
  team: string
  logo: string
  products: Product[]
}

export function TeamSection({ team, logo, products }: TeamSectionProps) {
  return (
    <section className="py-6">
      <div className="flex items-center gap-2 mb-4">
        <Image
          src={logo}
          alt={`${team} logo`}
          width={40}
          height={40}
          className="rounded-full"
        />
        <h2 className="text-xl font-bold">{team}</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <Card key={product.id}>
            <CardContent className="p-4">
              <div className="aspect-square relative mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="font-semibold mb-2">{product.name}</h3>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold">${product.price}</span>
                <Button size="sm">Buy Now</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

