import { PerformanceDashboard } from "@/components/admin/performance-dashboard"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Performance Dashboard</h1>
        <PerformanceDashboard />
      </div>
    </div>
  )
}

