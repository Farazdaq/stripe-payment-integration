import {
  FaChartPie,
  FaUsers,
  FaBoxOpen,
  FaFileInvoice,
  FaExchangeAlt,
  FaSyncAlt,
} from "react-icons/fa";

export const sidebarItems = [
  {
    key: "overview",
    label: "Overview",
    icon: FaChartPie,
  },

  {
    key: "customer",
    label: "Customer",
    icon: FaUsers,
  },

  {
    key: "package",
    label: "Package",
    icon: FaBoxOpen,
  },

  {
    key: "invoice",
    label: "Invoice",
    icon: FaFileInvoice,
  },

  {
    key: "transaction",
    label: "Transaction",
    icon: FaExchangeAlt,
  },

  {
    key: "subscription",
    label: "Subscription",
    icon: FaSyncAlt,
  },
];
