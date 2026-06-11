import { useEffect, useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import logo from "../../../assets/jsw-logo.svg";

import {
  Ticket,
  Clock,
  MessageSquare,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Building2,
  PlusCircle,
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

    const user = JSON.parse(
      localStorage.getItem("user") || "{}"
    );

    const myTickets = response.data.filter(
      (ticket: any) =>
        ticket.user_id === user.id
    );

    setTickets(myTickets);

  } catch (error) {

    console.log(error);

  }

};

const userTickets = tickets;

  // Using all tickets temporarily
  

  const totalTickets = userTickets.length;

  const openTickets = userTickets.filter(
    (t) => t.status === "Open"
  ).length;

  const inProgressTickets = userTickets.filter(
    (t) => t.status === "In Progress"
  ).length;

  const resolvedTickets = userTickets.filter(
    (t) => t.status === "Resolved"
  ).length;

  return (

    <div className="flex-1">

      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-8 py-4">

        <div className="flex items-center justify-between">

          <div>

            <h1 className="text-3xl font-bold text-gray-900">
              Employee Dashboard
            </h1>



          </div>

          <div className="flex items-center gap-3">

            <div className="text-right">

              <div className="flex items-center gap-3">

  <img
    src={logo}
    alt="JSW Logo"
    className="w-16 h-18"
  />

  <div>

    <h2 className="text-1xl font-bold text-gray-800">
      AI Helpdesk
    </h2>

    <p className="text-gray-500">
      Employee Portal
    </p>

  </div>

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

            <div className="text-3xl font-bold text-gray-900 mb-1">

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

                <AlertCircle className="w-6 h-6 text-orange-600" />

              </div>

            </div>

            <div className="text-3xl font-bold text-gray-900 mb-1">

              {openTickets}

            </div>

            <div className="text-sm text-gray-600">

              Open Tickets

            </div>

          </div>


          {/* In Progress */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">

            <div className="flex items-center justify-between mb-4">

              <div className="bg-blue-100 p-3 rounded-lg">

                <Clock className="w-6 h-6 text-blue-600" />

              </div>

            </div>

            <div className="text-3xl font-bold text-gray-900 mb-1">

              {inProgressTickets}

            </div>

            <div className="text-sm text-gray-600">

              In Progress

            </div>

          </div>


          {/* Resolved */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">

            <div className="flex items-center justify-between mb-4">

              <div className="bg-green-100 p-3 rounded-lg">

                <CheckCircle className="w-6 h-6 text-green-600" />

              </div>

            </div>

            <div className="text-3xl font-bold text-gray-900 mb-1">

              {resolvedTickets}

            </div>

            <div className="text-sm text-gray-600">

              Resolved

            </div>

          </div>

        </div>

      
        {/* Recent Tickets */}
        <div className="bg-white rounded-xl shadow-sm p-6">

          <div className="flex items-center justify-between mb-4">

            <h2 className="text-lg font-semibold text-gray-900">
              Recent Tickets
            </h2>

            <Link
              to="/user/my-tickets"
              className="text-sm text-blue-600 hover:text-blue-700"
            >
              View All
            </Link>

          </div>

          <div className="space-y-3">

            {userTickets.slice(0, 3).map((ticket) => (

              <div
                key={ticket.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >

                <div>

                  <div className="font-medium text-gray-900">
                    {ticket.id}
                  </div>

                  <div className="text-sm text-gray-600">
                    {ticket.category}
                  </div>

                </div>

                <div>

                  <div
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      ticket.status === "Resolved"
                        ? "bg-green-100 text-green-700"
                        : ticket.status === "In Progress"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-orange-100 text-orange-700"
                    }`}
                  >
                    {ticket.status}
                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </main>

    </div>

  );

}