import React from "react";
import Sidebar from "./Sidebar"; // Sidebar Component
import SidebarBanner from "./Sidebar-banner"; // Banner Component

export default function MainLayout() {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      {/* Sidebar */}
      <div className="w-1/4 p-4">
        <Sidebar />
      </div>

      {/* Sidebar Banners */}
      <div className="w-3/4 p-4">
        <SidebarBanner />
      </div>
    </div>
  );
}
