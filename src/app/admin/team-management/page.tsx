import { TeamManagement } from "@/components/admin/team-management"

export default function TeamManagementPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Team Management</h1>
        <TeamManagement />
      </div>
    </div>
  )
}

