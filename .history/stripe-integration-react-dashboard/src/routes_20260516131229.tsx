import { createBrowserRouter } from "react-router-dom"; // Import the necessary components for routing
import DashboardLayout from "./features/dashboard/layout/DashboardLayout"; // Import the layout component for the dashboard, which will be used as a wrapper for the child routes.

// Define the router configuration using createBrowserRouter
// The router is structured as follows:
// - The root path ("/") uses the DashboardLayout component as its element.
// - The DashboardLayout component has child routes
// - The index route ("/") renders the DashboardPage component.

export const router = createBrowserRouter([
  // MAIN APP
  {
    path: "/LoginScreen",
    element: "App page",
  },

  // DASHBOARD
  {
    path: "/dashboard",
    element: <DashboardLayout />,
  },
]);
