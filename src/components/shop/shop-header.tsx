import { ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function ShopHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <h1 className="text-2xl font-bold">SHOPS</h1>
        <Button variant="ghost" size="icon">
          <ShoppingCart className="h-6 w-6" />
          <span className="sr-only">Shopping cart</span>
        </Button>
      </div>
    </header>
  )
}

