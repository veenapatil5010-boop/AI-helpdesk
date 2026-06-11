import { useEffect, useState } from "react";
import axios from "axios";

import {
  Building2,
  AlertTriangle,
} from "lucide-react";

export default function PriorityTickets() {

  const [tickets, setTickets] =
    useState<any[]>([]);

  useEffect(() => {

    fetchTickets();

  }, []);

  const fetchTickets = async () => {

    try {

      const response =
        await axios.get(
          "http://localhost:5000/api/tickets"
        );

      // ONLY HIGH PRIORITY
      const highPriorityTickets =
        response.data.filter(

          (ticket: any) =>

            ticket.priority
              .toLowerCase() === "high"

        );

      setTickets(
        highPriorityTickets
      );

    } catch (error) {

      console.log(error);

    }

  };

  const getStatusColor = (
    status: string
  ) => {

    switch (
      status?.toLowerCase()
    ) {

      case "resolved":
        return
          "bg-green-100 text-green-700";

      case "in progress":
        return
          "bg-blue-100 text-blue-700";

      default:
        return
          "bg-orange-100 text-orange-700";

    }

  };

  const pendingTickets = tickets.filter(
  (ticket) => ticket.status !== "Resolved"
);

  return (

    <div className="flex-1">
   <div className="bg-white rounded-xl shadow-sm p-6 mb-6">

  <h1 className="text-3xl font-bold text-gray-800">
    Priority Tickets
  </h1>

</div>

      {/* Header */}
      <div className="flex justify-end mb-6">



</div>

      {/* Main */}
      <main className="p-8">

        {/* Alert Box */}
      {pendingTickets.length > 0 ? (

  <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 flex items-start gap-3">

    <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />

    <div>

      <div className="font-semibold text-red-900 mb-1">
        Critical Attention Required
      </div>

      <div className="text-sm text-red-700">
        {pendingTickets.length} high priority tickets require immediate action.
      </div>

    </div>

  </div>

) : (

  <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">

    <div className="font-semibold text-green-800">
      All Critical Tickets Resolved
    </div>

    <div className="text-sm text-green-700">
      No pending high priority tickets.
    </div>

  </div>

)}

        {/* Tickets */}
        <div className="grid gap-6">

          {tickets.map((ticket) => (

            <div

              key={ticket.id}
className={`bg-white rounded-xl shadow-sm border-l-4 p-6 ${
  ticket.status === "Resolved"
    ? "border-green-500"
    : "border-red-500"
}`}

            >

              {/* Top */}
              <div className="flex items-start justify-between mb-4">

                <div>

                  <div className="flex items-center gap-3 mb-2">

                    <h3
  className={`text-lg font-semibold ${
    ticket.status === "Resolved"
      ? "text-green-700"
      : "text-gray-900"
  }`}
>
  Ticket #{ticket.id}
</h3>

                    <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">

                      High Priority

                    </span>

                    <span

                      className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        ticket.status
                      )}`}

                    >

                      {ticket.status || "Open"}

                    </span>

                  </div>

                  <div className="text-sm text-gray-600">

                    {ticket.category}

                  </div>

                </div>

                <div className="text-right">

                  <div className="text-sm text-gray-600 mb-1">

                    Created

                  </div>

                  <div className="font-medium text-gray-900">

                    {
                      new Date(
                        ticket.created_at
                      ).toLocaleDateString(
                        "en-GB"
                      )
                    }

                  </div>

                </div>

              </div>

              {/* Description */}
              <div className="mb-4">
<div
  className={`text-sm font-medium mb-2 ${
    ticket.status === "Resolved"
      ? "text-green-700"
      : "text-gray-700"
  }`}
>
  Issue Description
</div>

<div
  className={
    ticket.status === "Resolved"
      ? "text-green-600"
      : "text-gray-600"
  }
>
  {ticket.description}
</div>

              </div>

              {/* Info Cards */}
              <div className="grid md:grid-cols-3 gap-4 mb-4">

                <div className="bg-gray-50 p-4 rounded-lg">

                  <div className="text-sm text-gray-600 mb-1">

                    Category

                  </div>

                  <div className="font-medium text-gray-900">

                    {ticket.category}

                  </div>

                </div>

                <div className="bg-gray-50 p-4 rounded-lg">

                  <div className="text-sm text-gray-600 mb-1">

                    AI Priority

                  </div>

                  <div className="font-medium text-red-600">

                    {ticket.priority}

                  </div>

                </div>

                <div className="bg-gray-50 p-4 rounded-lg">

                  <div className="text-sm text-gray-600 mb-1">

                    Estimated Resolution

                  </div>

                  <div className="font-medium text-red-600">

                    1-2 Hours

                  </div>

                </div>

              </div>

              {/* Buttons */}

{ticket.status === "Resolved" ? (

  <span className="px-4 py-2 bg-green-100 text-green-700 rounded-lg font-medium">

    Resolved ✓

  </span>

) : ticket.department && ticket.department !== "Not Assigned" ? (

  <div className="flex gap-3">

    <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-medium">

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

      className="px-4 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors"
    >

      Mark Resolved

    </button>

  </div>

) : (

  <span className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-lg font-medium">

    Assign Department First

  </span>

)}

            </div>

          ))}

          {/* Empty */}
          {tickets.length === 0 && (

            <div className="bg-white rounded-xl shadow-sm p-12 text-center">

              <AlertTriangle className="w-16 h-16 text-gray-300 mx-auto mb-4" />

              <h3 className="text-lg font-semibold text-gray-900 mb-2">

                No high priority tickets

              </h3>

              <p className="text-gray-600">

                All critical tickets are resolved

              </p>

            </div>

          )}

        </div>

      </main>

    </div>

  );

}