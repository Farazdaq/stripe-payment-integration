import { createBrowserRouter } from "react-router-dom"; // Import the necessary components for routing
import DashboardLayout from "./features/dashboard/layout/DashboardLayout"; // Import the layout component for the dashboard, which will be used as a wrapper for the child routes.
import LoginScreen from "./features/dashboard/pages/LoginScreen";

// Define the router configuration using createBrowserRouter
// The router is structured as follows:
// - The root path ("/") uses the DashboardLayout component as its element.
// - The DashboardLayout component has child routes
// - The index route ("/") renders the DashboardPage component.

export const router = createBrowserRouter([
  // MAIN APP
  {
    path: "/",
    element: <LoginScreen />,
  },

  // DASHBOARD
  {
    path: "/dashboard",
    element: <DashboardLayout />,
  },
]);
