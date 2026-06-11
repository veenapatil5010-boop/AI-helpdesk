export interface Ticket {
  id: string;
  employeeName: string;
  employeeId: string;
  department: string;
  category: string;
  description: string;
  priority: "High" | "Medium" | "Low";
  status: "Open" | "In Progress" | "Resolved";
  createdDate: string;
  resolvedDate?: string;
  assignedTo?: string;
}

export interface Feedback {
  id: string;
  ticketId: string;
  employeeName: string;
  rating: number;
  comment: string;
  date: string;
}

export const mockTickets: Ticket[] = [
  {
    id: "TKT-001",
    employeeName: "Rajesh Kumar",
    employeeId: "EMP-1234",
    department: "Production",
    category: "IT Support",
    description: "Unable to access SAP system. Getting authentication error.",
    priority: "High",
    status: "In Progress",
    createdDate: "2026-05-18",
    assignedTo: "IT Department",
  },
  {
    id: "TKT-002",
    employeeName: "Priya Sharma",
    employeeId: "EMP-2345",
    department: "HR",
    category: "HR Query",
    description: "Need clarification on new leave policy implementation.",
    priority: "Medium",
    status: "Open",
    createdDate: "2026-05-19",
    assignedTo: "HR Department",
  },
  {
    id: "TKT-003",
    employeeName: "Amit Patel",
    employeeId: "EMP-3456",
    department: "Logistics",
    category: "System Access",
    description: "Request for inventory management system access.",
    priority: "Low",
    status: "Resolved",
    createdDate: "2026-05-15",
    resolvedDate: "2026-05-17",
    assignedTo: "IT Department",
  },
  {
    id: "TKT-004",
    employeeName: "Sunita Reddy",
    employeeId: "EMP-4567",
    department: "Production",
    category: "Equipment Issue",
    description: "Production line 3 monitoring system showing incorrect readings.",
    priority: "High",
    status: "In Progress",
    createdDate: "2026-05-20",
    assignedTo: "Production Department",
  },
  {
    id: "TKT-005",
    employeeName: "Vikram Singh",
    employeeId: "EMP-5678",
    department: "IT",
    category: "IT Support",
    description: "Laptop overheating issue, need replacement or repair.",
    priority: "Medium",
    status: "Open",
    createdDate: "2026-05-20",
    assignedTo: "IT Department",
  },
];

export const mockFeedback: Feedback[] = [
  {
    id: "FB-001",
    ticketId: "TKT-003",
    employeeName: "Amit Patel",
    rating: 5,
    comment: "Quick resolution and excellent support from IT team!",
    date: "2026-05-17",
  },
  {
    id: "FB-002",
    ticketId: "TKT-006",
    employeeName: "Neha Gupta",
    rating: 4,
    comment: "Good service, took a bit longer than expected but resolved well.",
    date: "2026-05-16",
  },
  {
    id: "FB-003",
    ticketId: "TKT-007",
    employeeName: "Rahul Verma",
    rating: 5,
    comment: "Very professional handling of the issue. Thank you!",
    date: "2026-05-15",
  },
];

export const departmentStats = [
  { name: "IT", total: 45, pending: 12, resolved: 33 },
  { name: "HR", total: 28, pending: 8, resolved: 20 },
  { name: "SAP", total: 36, pending: 15, resolved: 21 },
  { name: "Logistics", total: 22, pending: 6, resolved: 16 },
  { name: "Production", total: 51, pending: 18, resolved: 33 },
];
