import { useEffect, useState } from "react";

import axios from "axios";

import {
  Building2,
  Search,
  Filter,
} from "lucide-react";

export default function MyTickets() {

  const [userTickets, setUserTickets] = useState<any[]>([]);

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
console.log(
  "Logged User:",
  JSON.stringify(user, null, 2)
);

console.log(
  "All Tickets:",
  JSON.stringify(response.data, null, 2)
);

console.log(
  "Filtered Tickets:",
  JSON.stringify(myTickets, null, 2)
);
setUserTickets(myTickets);
  } catch (error) {

    console.log(error);

  }

};

  const getPriorityColor = (priority: string) => {

    switch (priority) {

      case "High":
        return "bg-red-100 text-red-700";

      case "Medium":
        return "bg-orange-100 text-orange-700";

      case "Low":
        return "bg-green-100 text-green-700";

      default:
        return "bg-gray-100 text-gray-700";

    }

  };

  const getStatusColor = (status: string) => {

    switch (status) {

      case "Open":
        return "bg-orange-100 text-orange-700";

      case "In Progress":
        return "bg-blue-100 text-blue-700";

      case "Resolved":
        return "bg-green-100 text-green-700";

      default:
        return "bg-gray-100 text-gray-700";

    }

  };

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

const ticketsPerPage = 10;
const filteredTickets = userTickets.filter(
  (ticket) =>
    ticket.subject
      .toLowerCase()
      .includes(searchTerm.toLowerCase()) ||
    ticket.description
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
);

const indexOfLastTicket =
  currentPage * ticketsPerPage;

const indexOfFirstTicket =
  indexOfLastTicket - ticketsPerPage;

const currentTickets =
  filteredTickets.slice(
    indexOfFirstTicket,
    indexOfLastTicket
  );

const totalPages = Math.ceil(
  filteredTickets.length / ticketsPerPage
);
  return (

    <div className="flex-1 bg-gray-50 min-h-screen">

      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-8 py-4">

        <div className="flex items-center justify-between">

          <div>

            <h1 className="text-2xl font-bold text-gray-900">
              My Tickets
            </h1>

            <p className="text-gray-600 mt-1">
              View and track all your support tickets
            </p>

          </div>

          <div className="flex items-center gap-3">

            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2 rounded-lg">

              <Building2 className="w-6 h-6 text-white" />

            </div>

          </div>

        </div>

      </header>


      {/* Main Content */}
      <main className="p-8">

        {/* Search */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6 flex gap-4">

          <div className="flex-1 relative">

            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

            <input
                type="text"
                placeholder="Search tickets..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />

          </div>

        </div>


        {/* Tickets Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="bg-gray-50 border-b border-gray-200">

                <tr>

                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Ticket ID
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Subject
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Description
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Priority
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Department
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Status
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Date
                  </th>

                </tr>

              </thead>

              <tbody className="divide-y divide-gray-200">

                {currentTickets.map((ticket) => (

                  <tr
                    key={ticket.id}
                    className="hover:bg-gray-50 transition-colors"
                  >

                    {/* Ticket ID */}
                    <td className="px-6 py-4">

                      <div className="font-medium text-blue-600">
                        #{ticket.id}
                      </div>

                    </td>

                    {/* Subject */}
                    <td className="px-6 py-4">

                      <div className="text-sm font-medium text-gray-900">
                        {ticket.subject}
                      </div>

                    </td>

                  {/* Description */}
<td className="px-6 py-4">

  <div className="text-sm text-gray-600 max-w-[300px] whitespace-normal">
    {ticket.description}
  </div>

</td> 

                    {/* Priority */}
                    <td className="px-6 py-4">

                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(ticket.priority)}`}
                      >
                        {ticket.priority}
                      </span>

                    </td>

                   {/* Department */}
<td className="px-6 py-4 whitespace-nowrap">

  <span
    className={`inline-flex items-center justify-center whitespace-nowrap px-3 py-1 rounded-full text-xs font-medium ${
      ticket.department === "Not Assigned"
        ? "bg-gray-100 text-gray-700"
        : "bg-blue-100 text-blue-700"
    }`}
  >
    {ticket.department}
  </span>

</td>

{/* Status */}
<td className="px-6 py-4 whitespace-nowrap">

  <span
    className={`inline-flex items-center justify-center whitespace-nowrap px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(ticket.status)}`}
  >
    {ticket.status}
  </span>

</td>

                    {/* Date */}
                    <td className="px-6 py-4">

                      <div className="text-sm text-gray-600">

                        {new Date(ticket.created_at).toLocaleDateString("en-GB")}

                      </div>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>


        {/* Footer */}
      {/* Footer */}
<div className="mt-6 flex items-center justify-between">

  <div className="text-sm text-gray-600">

    Showing {currentTickets.length} of {filteredTickets.length} tickets

  </div>

  <div className="flex gap-2">

    <button
      onClick={() =>
        setCurrentPage((prev) =>
          Math.max(prev - 1, 1)
        )
      }
      disabled={currentPage === 1}
      className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors disabled:opacity-50"
    >
      Previous
    </button>

    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm">

      {currentPage}

    </button>

    <button
      onClick={() =>
        setCurrentPage((prev) =>
          Math.min(prev + 1, totalPages)
        )
      }
      disabled={currentPage === totalPages}
      className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors disabled:opacity-50"
    >
      Next
    </button>

  </div>

</div>

      </main>

    </div>

  );

}