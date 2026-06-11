import { Outlet } from "react-router-dom";

import { Sidebar } from "../../components/Sidebar";

import {
  LayoutDashboard,
  Ticket,
  AlertCircle,
  MessageSquare,
  LogOut,
} from "lucide-react";

const adminLinks = [
  {
    to: "/admin",
    icon: LayoutDashboard,
    label: "Dashboard"
  },

  {
    to: "/admin/new-tickets",
    icon: Ticket,
    label: "New Tickets"
  },

  {
    to: "/admin/priority-tickets",
    icon: AlertCircle,
    label: "Priority Tickets"
  },

  {
    to: "/admin/feedback",
    icon: MessageSquare,
    label: "Feedback"
  },

  {
    to: "/",
    icon: LogOut,
    label: "Logout"
  },
];

export default function AdminDashboard() {

  return (

    <div className="flex min-h-screen bg-gray-100">

      <Sidebar links={adminLinks} />

      <div className="flex-1 p-8">

  <div className="bg-white rounded-2xl shadow-sm p-6 min-h-[95vh]">

    <Outlet />

  </div>

</div>

    </div>

  );

}