
import {
  LayoutDashboard,
  PlusCircle,
  Ticket,
  Clock,
  MessageSquare,
  User,
  LogOut,
  Building2,
  TrendingUp,
} from "lucide-react";
import { mockTickets } from "../../data/mockData";

const userLinks = [
  { to: "/user", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/user/create-ticket", icon: PlusCircle, label: "Create Ticket" },
  { to: "/user/my-tickets", icon: Ticket, label: "My Tickets" },
  { to: "/user/processing", icon: Clock, label: "Processing Tickets" },
  { to: "/user/feedback", icon: MessageSquare, label: "Feedback" },
  { to: "/", icon: LogOut, label: "Logout" },
];

export default function ProcessingTickets() {
  const processingTickets = mockTickets.filter(
    (t) => t.employeeId === "EMP-1234" && t.status === "In Progress"
  );

  return (
    <div className="flex min-h-screen bg-gray-50">
      
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Processing Tickets</h1>
              <p className="text-gray-600 mt-1">Track tickets currently being resolved</p>
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
          <div className="grid gap-6">
            {processingTickets.map((ticket) => (
              <div key={ticket.id} className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{ticket.id}</h3>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                        {ticket.status}
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          ticket.priority === "High"
                            ? "bg-red-100 text-red-700"
                            : "bg-orange-100 text-orange-700"
                        }`}
                      >
                        {ticket.priority} Priority
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">{ticket.category}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600 mb-1">Created</div>
                    <div className="font-medium text-gray-900">
                      {new Date(ticket.createdDate).toLocaleDateString()}
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-sm font-medium text-gray-700 mb-2">Issue Description</div>
                  <div className="text-gray-600">{ticket.description}</div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Department</div>
                    <div className="font-medium text-gray-900">{ticket.department}</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Assigned To</div>
                    <div className="font-medium text-gray-900">{ticket.assignedTo}</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Est. Resolution</div>
                    <div className="font-medium text-gray-900">2-4 hours</div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm font-medium text-gray-700">Progress</div>
                    <div className="text-sm text-gray-600">70%</div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: "70%" }}></div>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
                  <TrendingUp className="w-4 h-4" />
                  <span>Your ticket is being actively worked on by our team</span>
                </div>
              </div>
            ))}

            {processingTickets.length === 0 && (
              <div className="bg-white rounded-xl shadow-sm p-12 text-center">
                <Clock className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  No tickets in progress
                </h3>
                <p className="text-gray-600">
                  You don't have any tickets currently being processed
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
