import { ShopManagement } from "@/components/admin/shop-management"

export default function ShopManagementPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Shop Management</h1>
        <ShopManagement />
      </div>
    </div>
  )
}

