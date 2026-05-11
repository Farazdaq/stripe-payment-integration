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
      className="flex h-screen w-screen overflow-hidden"
      style={{ backgroundColor: theme.colors.bg }}
    >
      <Navbar />
      <Sidebar active={activePage} setActive={setActivePage} />

      <div className="flex flex-col flex-1 min-w-0 w-full">
        <main className="flex-1 p-1 overflow-auto w-full">
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
