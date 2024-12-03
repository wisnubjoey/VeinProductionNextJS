export default function AdminHeader() {
    return (
      <header className="fixed top-0 right-0 h-16 bg-white shadow-sm pl-64 w-full">
        <div className="h-full px-6 flex items-center justify-between">
          <h2 className="font-semibold">Dashboard</h2>
          <div className="flex items-center gap-4">
            {/* Add notifications, profile, etc */}
          </div>
        </div>
      </header>
    );
  }