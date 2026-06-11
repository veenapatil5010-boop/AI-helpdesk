import { useEffect, useState } from "react";

import axios from "axios";

import {
  Building2,
  Search,
  AlertCircle,
} from "lucide-react";

export default function NewTickets() {

  const [tickets, setTickets] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTicket, setSelectedTicket] = useState<any>(null);
const [department, setDepartment] = useState("");
const [showModal, setShowModal] = useState(false);
const [currentPage, setCurrentPage] = useState(1);

const ticketsPerPage = 10;

const filteredTickets = tickets.filter(
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

  return (
    

    <div className="flex-1">
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">

  <h1 className="text-3xl font-bold text-gray-800">
    New Tickets
  </h1>

</div>



      {/* Main Content */}
      <main>

        {/* Search + Filter */}
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
                    Status
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Date
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Action
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

{/* Actions */}
<td className="px-6 py-4">

  {ticket.status === "Resolved" ? (

    <span className="w-32 py-2 text-sm font-medium rounded-lg text-center text-green-700 bg-green-100 inline-block">

      Resolved ✓

    </span>

  ) : ticket.department !== "Not Assigned" ? (

    <div className="flex gap-2">

      <span className="w-28 py-2 text-sm font-medium rounded-lg text-center text-blue-700 bg-blue-100 inline-block">

        Assigned ✓

      </span>

      <button

        onClick={async () => {

          try {

            await axios.put(

              `http://localhost:5000/api/tickets/${ticket.id}`,

              {
                status: "Resolved",
                department: ticket.department
              }

            );

            fetchTickets();

          } catch (error) {

            console.log(error);

          }

        }}

        className="px-4 py-2 text-sm font-medium rounded-lg border border-green-600 text-green-600 hover:bg-green-50"

      >

        Resolve

      </button>

    </div>

  ) : (

    <button

      onClick={() => {

        setSelectedTicket(ticket);

        setDepartment(ticket.department || "");

        setShowModal(true);

      }}

      className="w-24 py-2 text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700"

    >

      Assign

    </button>

  )}

</td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>


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


        {/* High Priority Alert */}
        <div className="mt-6 bg-red-50 border border-red-200 rounded-xl p-4 flex items-center gap-3">

          <AlertCircle className="w-6 h-6 text-red-600" />

          <div>

            <div className="font-semibold text-red-900">
              Admin Notice
            </div>

            <div className="text-sm text-red-700">
              High priority tickets should be resolved immediately.
            </div>

          </div>

        </div>

      </main>
      {showModal && selectedTicket && (

  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

    <div className="bg-white rounded-2xl p-8 w-[600px] shadow-2xl">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold text-gray-800">
          Ticket Details
        </h2>

        <button
          onClick={() => setShowModal(false)}
          className="text-gray-500 hover:text-black text-xl"
        >
          ✕
        </button>

      </div>
<div>
  <span className="font-semibold">
    Employee:
  </span>{" "}
  {selectedTicket.employee_name}
</div>
      <div className="space-y-4">

        <div>
          <span className="font-semibold">
            Ticket ID:
          </span>{" "}
          #TKT-{selectedTicket.id}
        </div>

        <div>
          <span className="font-semibold">
            Subject:
          </span>{" "}
          {selectedTicket.subject}
        </div>

        
        <div>
          <span className="font-semibold">
            Priority:
          </span>{" "}
          {selectedTicket.priority}
        </div>

        <div>
          <span className="font-semibold">
            Status:
          </span>{" "}
          {selectedTicket.status}
        </div>

      <div>

  <span className="font-semibold">
    Department:
  </span>

  <select

    value={department}

    onChange={(e) =>
      setDepartment(e.target.value)
    }

    className="ml-2 border border-gray-300 rounded-lg px-3 py-2"

  >

    <option value="">
      Select Department
    </option>

    <option value="IT Support">
      IT Support
    </option>

    <option value="HR">
      HR
    </option>

    <option value="Finance">
      Finance
    </option>

    <option value="Network Team">
      Network Team
    </option>

    <option value="Administration">
      Administration
    </option>

  </select>

</div>

        <div>
          <span className="font-semibold">
            Description:
          </span>

          <div className="mt-2 bg-gray-100 p-4 rounded-lg text-gray-700">

            {selectedTicket.description}

          </div>

        </div>
        <div className="mt-6">

  <button

    onClick={async () => {

      try {

        await axios.put(

          `http://localhost:5000/api/tickets/${selectedTicket.id}`,

          {

            status: "In Progress",

            department: department

          }

        );

        fetchTickets();

        setShowModal(false);

      } catch (error) {

        console.log(error);

      }

    }}

    className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"

  >

    Assign Department

  </button>

</div>

      </div>

    </div>

  </div>

)}

    </div>

  );

}