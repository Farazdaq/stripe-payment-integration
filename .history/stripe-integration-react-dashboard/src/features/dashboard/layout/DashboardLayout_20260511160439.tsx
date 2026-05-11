import { useState } from "react";
import { useTheme } from "../../../theme/useTheme";

import {
  Navbar,
  Sidebar,
  Overview,
  Customer,
  Package,
  Invoice,
  Transaction,
  Subscription,
} from "./export.ts";

export default function DashboardLayout() {
  const { theme } = useTheme();
  const [activePage, setActivePage] = useState("overview");

  return (
    <div
      className="flex h-screen w-screen"
      style={{
        backgroundColor: theme.colors.bg,
      }}
    >
      {/* Sidebar (fixed left section) */}
      <Sidebar active={activePage} setActive={setActivePage} />

      {/* Right side layout (Navbar + Content) */}
      <div className="flex flex-col flex-1 min-w-0">
        {/* Navbar (now full width of right side) */}
        <Navbar />

        {/* Main content area */}
        <main className="flex-1 p-1 overflow-auto">
          {activePage === "overview" && <Overview />}
          {activePage === "customer" && <Customer />}
          {activePage === "package" && <Package />}
          {activePage === "invoice" && <Invoice />}
          {activePage === "transaction" && <Transaction />}
          {activePage === "subscription" && <Subscription />}
        </main>
      </div>
    </div>
  );
}
