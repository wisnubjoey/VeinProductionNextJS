import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              Total Bookings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">12</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              Pending Bookings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">3</p>
          </CardContent>
        </Card>
        
        {/* Add more stats cards */}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Bookings</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Add recent bookings table */}
        </CardContent>
      </Card>
    </div>
  );
}