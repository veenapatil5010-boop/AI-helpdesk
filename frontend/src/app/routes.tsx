import { createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import UserDashboard from "./pages/user/UserDashboard";
import UserDashboardHome from "./pages/user/Dashboard";
import CreateTicket from "./pages/user/CreateTicket";
import MyTickets from "./pages/user/MyTickets";
import ProcessingTickets from "./pages/user/ProcessingTickets";
import UserFeedback from "./pages/user/UserFeedback";
import UserProfile from "./pages/user/UserProfile";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminDashboardHome from "./pages/admin/Dashboard";
import NewTickets from "./pages/admin/NewTickets";
import PriorityTickets from "./pages/admin/PriorityTickets";
import DepartmentTickets from "./pages/admin/DepartmentTickets";
import AdminFeedback from "./pages/admin/AdminFeedback";
import About from "./pages/About";
import Contact from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Homepage,
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/contact",
    Component: Contact,
  },
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/user",
    Component: UserDashboard,
    children: [
      { index: true, Component: UserDashboardHome },
      { path: "create-ticket", Component: CreateTicket },
      { path: "my-tickets", Component: MyTickets },
      { path: "processing", Component: ProcessingTickets },
      { path: "feedback", Component: UserFeedback },
      { path: "profile", Component: UserProfile },
    ],
  },
  {
    path: "/admin",
    Component: AdminDashboard,
    children: [
      { index: true, Component: AdminDashboardHome },
      { path: "new-tickets", Component: NewTickets },
      { path: "priority-tickets", Component: PriorityTickets },
      { path: "department-tickets", Component: DepartmentTickets },
      { path: "feedback", Component: AdminFeedback },
    ],
  },
]);
