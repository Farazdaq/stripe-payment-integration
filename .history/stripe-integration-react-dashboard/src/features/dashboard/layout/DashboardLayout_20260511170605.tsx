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
      className="flex flex-col h-screen w-screen"
      style={{
        backgroundColor: theme.colors.bg,
      }}
    >
      {/* TOP NAVBAR (FULL WIDTH) */}
      <Navbar />

      {/* BELOW NAVBAR: SIDEBAR + CONTENT */}
      <div className="flex flex-1 min-h-0">
        {/* Sidebar */}
        <Sidebar active={activePage} setActive={setActivePage} />

        {/* Main content */}
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
