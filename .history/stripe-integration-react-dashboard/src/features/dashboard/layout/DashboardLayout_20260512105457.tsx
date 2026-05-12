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
      className="flex flex-col w-screen h-screen overflow-hidden"
      style={{
        backgroundColor: theme.colors.bg,
      }}
    >
      {/* TOP NAVBAR */}
      <div className="shrink-0">
        <Navbar />
      </div>

      {/* BODY */}
      <div className="flex flex-1 min-h-0 overflow-hidden">
        {/* SIDEBAR */}
        <div className="h-full shrink-0">
          <Sidebar active={activePage} setActive={setActivePage} />
        </div>

        {/* MAIN CONTENT */}
        <main className="flex-1 h-full overflow-y-auto overflow-x-hidden ">
          <div className="min-h-full">
            {activePage === "overview" && <Overview />}
            {activePage === "customer" && <Customer />}
            {activePage === "package" && <Package />}
            {activePage === "invoice" && <Invoice />}
            {activePage === "transaction" && <Transaction />}
            {activePage === "subscription" && <Subscription />}
          </div>
        </main>
      </div>
    </div>
  );
}
