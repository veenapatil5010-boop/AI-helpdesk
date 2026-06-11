import { Outlet } from "react-router-dom";
import logo from "../../../assets/jsw-logo.svg";
import { Sidebar } from "../../components/Sidebar";

import {
  LayoutDashboard,
  PlusCircle,
  Ticket,
  MessageSquare,
  User,
  LogOut,
} from "lucide-react";

const userLinks = [
  { to: "/user", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/user/create-ticket", icon: PlusCircle, label: "Create Ticket" },
  { to: "/user/my-tickets", icon: Ticket, label: "My Tickets" },
  { to: "/user/feedback", icon: MessageSquare, label: "Feedback" },
  { to: "/", icon: LogOut, label: "Logout" },
];

export default function UserDashboard() {

  return (

    <div className="flex min-h-screen bg-gray-50">

      <Sidebar links={userLinks} />

      <div className="flex-1 p-8">

  {/* Top Header */}


  <Outlet />

</div>

    </div>

  );

}