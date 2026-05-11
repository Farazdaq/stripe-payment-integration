// The DashboardLayout component serves as a Layout component for the dashboard section of the application.

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
      className="flex h-screen"
      style={{
        backgroundColor: theme.colors.bg,
      }}
    >
      <Sidebar active={activePage} setActive={setActivePage} />
      <div style={{ flex: 1 }}>
        <Navbar />
        <div>
          <main className="flex-1 p-2">
            {activePage === "overview" && <Overview />}
            {activePage === "customer" && <Customer />}
            {activePage === "package" && <Package />}
            {activePage === "invoice" && <Invoice />}
            {activePage === "transaction" && <Transaction />}
            {activePage === "subscription" && <Subscription />}
          </main>
        </div>
      </div>
    </div>
  );
}
