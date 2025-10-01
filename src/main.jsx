import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import AppLayout from "./AppLayout"; 
import Coustomerpage from "./employdashboard/Coustomerpage";
import Dashboard from "./employdashboard/Dashboard";
import OrderManagementPage from "./employdashboard/OrderManagementPage";
import PaymentManagement from "./employdashboard/PaymentManagement";
import SupportPage from "./employdashboard/SupportPage";




export const NotFound = () => <div className="p-8 text-2xl font-bold">404 - Page Not Found</div>;

const router = createBrowserRouter([
  {
  
    path: "/",
    element: <AppLayout />, 
    errorElement: <NotFound />, 
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "customer", 
        element: <Coustomerpage />,
      },
      {
        path: "orders", 
        element: <OrderManagementPage />,
      },
 
      {
        path: "payments",
        element: <PaymentManagement/>,
      },
      {
        path: "support",
        element: <SupportPage/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);