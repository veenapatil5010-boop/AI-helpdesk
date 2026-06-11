import logo from "../../../assets/jsw-logo.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import {
  Ticket,
  AlertCircle,
  TrendingUp,
  Clock,
  CheckCircle,
  MessageSquare,
} from "lucide-react";

export default function Dashboard() {

  const [tickets, setTickets] = useState<any[]>([]);

  useEffect(() => {

    fetchTickets();

  }, []);

  const fetchTickets = async () => {

    try {

      const response = await axios.get(
        "http://localhost:5000/api/tickets"
      );

      setTickets(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  const totalTickets = tickets.length;

  const openTickets = tickets.filter(
    (t) => t.status === "Open"
  ).length;

  const highPriorityTickets = tickets.filter(
    (t) => t.priority === "High"
  ).length;

  const resolvedTickets = tickets.filter(
    (t) => t.status === "Resolved"
  ).length;


  return (

    <div className="flex-1">

      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-8 py-4">

        <div className="flex items-center justify-between">

          <div>
            <h1 className="text-3xl font-bold text-gray-900">
            Admin Dashboard
            </h1>

            
          </div>

          <div className="flex items-center gap-3">

            <div className="bg-white p-2 rounded-lg shadow-sm">

  <img
    src={logo}
    alt="JSW Logo"
    className="w-16"
  />

</div>
            <div className="text-right">
              <div className="font-semibold text-gray-900">
                JSW Steel
              </div>

              <div className="text-sm text-gray-600">
                Admin Portal
              </div>
            </div>

          </div>

        </div>

      </header>


      {/* Main Content */}
      <main className="p-8">

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">

          {/* Total Tickets */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">

            <div className="flex items-center justify-between mb-4">

              <div className="bg-blue-100 p-3 rounded-lg">
                <Ticket className="w-6 h-6 text-blue-600" />
              </div>

              <TrendingUp className="w-5 h-5 text-gray-400" />

            </div>

            <div className="text-2xl font-bold text-gray-900 mb-1">
              {totalTickets}
            </div>

            <div className="text-sm text-gray-600">
              Total Tickets
            </div>

          </div>


          {/* Open Tickets */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">

            <div className="flex items-center justify-between mb-4">

              <div className="bg-orange-100 p-3 rounded-lg">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>

            </div>

            <div className="text-2xl font-bold text-gray-900 mb-1">
              {openTickets}
            </div>

            <div className="text-sm text-gray-600">
              Open Tickets
            </div>

          </div>


          {/* High Priority */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">

            <div className="flex items-center justify-between mb-4">

              <div className="bg-red-100 p-3 rounded-lg">
                <AlertCircle className="w-6 h-6 text-red-600" />
              </div>

            </div>

            <div className="text-2xl font-bold text-gray-900 mb-1">
              {highPriorityTickets}
            </div>

            <div className="text-sm text-gray-600">
              High Priority
            </div>

          </div>


          {/* Resolved */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">

            <div className="flex items-center justify-between mb-4">

              <div className="bg-green-100 p-3 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>

            </div>

            <div className="text-2xl font-bold text-gray-900 mb-1">
              {resolvedTickets}
            </div>

            <div className="text-sm text-gray-600">
              Resolved
            </div>

          </div>

        </div>


        {/* Recent Tickets + Overview */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">

          {/* Recent Tickets */}
          <div className="bg-white rounded-xl shadow-sm p-6">

            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Recent Tickets
            </h2>

            <div className="space-y-3">

              {tickets.slice(0, 5).map((ticket) => (

                <div
                  key={ticket.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >

                  <div>

                    <div className="font-medium text-gray-900">
                      #{ticket.id}
                    </div>

                    <div className="text-sm text-gray-600">
                      {ticket.category}
                    </div>

                    <div className="text-xs text-gray-500 mt-1">
                      {ticket.description}
                    </div>

                  </div>

                  <div className="text-right">

                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        ticket.priority === "High"
                          ? "bg-red-100 text-red-700"
                          : ticket.priority === "Medium"
                          ? "bg-orange-100 text-orange-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {ticket.priority}
                    </span>

                  </div>

                </div>

              ))}

            </div>

            <Link
              to="/admin/new-tickets"
              className="block mt-4 text-center text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              View All Tickets
            </Link>

          </div>


          {/* Ticket Overview */}
          <div className="bg-white rounded-xl shadow-sm p-6">

            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Ticket Overview
            </h2>

            <div className="space-y-4">

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">

                <div className="font-medium text-gray-900">
                  Total Tickets
                </div>

                <div className="text-sm text-gray-600">
                  {totalTickets}
                </div>

              </div>


              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">

                <div className="font-medium text-gray-900">
                  Open Tickets
                </div>

                <div className="text-sm text-gray-600">
                  {openTickets}
                </div>

              </div>


              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">

                <div className="font-medium text-gray-900">
                  Resolved Tickets
                </div>

                <div className="text-sm text-gray-600">
                  {resolvedTickets}
                </div>

              </div>

            </div>

          </div>

        </div>


        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm p-6">

          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Quick Actions
          </h2>

          <div className="grid md:grid-cols-3 gap-4">

            {/* Priority Tickets */}
            <Link
              to="/admin/priority-tickets"
              className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg hover:border-red-500 hover:bg-red-50 transition-all group"
            >

              <div className="bg-red-100 p-3 rounded-lg group-hover:bg-red-200 transition">
                <AlertCircle className="w-6 h-6 text-red-600" />
              </div>

              <div>

                <div className="font-semibold text-gray-900">
                  Priority Tickets
                </div>

                <div className="text-sm text-gray-600">
                  {highPriorityTickets} high priority
                </div>

              </div>

            </Link>


            {/* All Tickets */}
            <Link
              to="/admin/new-tickets"
              className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all group"
            >

              <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-200 transition">
                <Ticket className="w-6 h-6 text-blue-600" />
              </div>

              <div>

                <div className="font-semibold text-gray-900">
                  All Tickets
                </div>

                <div className="text-sm text-gray-600">
                  Manage all tickets
                </div>

              </div>

            </Link>


            {/* Feedback */}
            <Link
              to="/admin/feedback"
              className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-all group"
            >

              <div className="bg-green-100 p-3 rounded-lg group-hover:bg-green-200 transition">
                <MessageSquare className="w-6 h-6 text-green-600" />
              </div>

              <div>

                <div className="font-semibold text-gray-900">
                  View Feedback
                </div>

                <div className="text-sm text-gray-600">
                  Employee ratings
                </div>

              </div>

            </Link>

          </div>

        </div>

      </main>

    </div>

  );

}