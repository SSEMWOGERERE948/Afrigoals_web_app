"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ShopManagement() {
  const [selectedTeam, setSelectedTeam] = useState("")
  const [products, setProducts] = useState<{ name: string; price: string; description: string }[]>([])
  const [newProduct, setNewProduct] = useState({ name: "", price: "", description: "" })

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.price) {
      setProducts([...products, newProduct])
      setNewProduct({ name: "", price: "", description: "" })
    }
  }

  const handleSave = () => {
    console.log("Saving shop data:", { selectedTeam, products })
    // Here you would typically make an API call to save the data
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Shop Management</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="team-select">Select Team</Label>
          <Select value={selectedTeam} onValueChange={setSelectedTeam}>
            <SelectTrigger id="team-select">
              <SelectValue placeholder="Select a team" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="vipers">Vipers</SelectItem>
              <SelectItem value="kcca">KCCA</SelectItem>
              <SelectItem value="express">Express</SelectItem>
              {/* Add more teams as needed */}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Add Product</Label>
          <Input
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            placeholder="Product name"
          />
          <Input
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            placeholder="Price"
            type="number"
          />
          <Input
            value={newProduct.description}
            onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
            placeholder="Product description"
          />
          <Button onClick={handleAddProduct}>Add Product</Button>
        </div>
        <div className="space-y-2">
          <Label>Products</Label>
          {products.map((product, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <h3 className="font-bold">{product.name}</h3>
                <p>Price: ${product.price}</p>
                <p>{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Button onClick={handleSave}>Save Shop Data</Button>
      </CardContent>
    </Card>
  )
}

