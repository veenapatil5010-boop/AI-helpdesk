import "../index.css";
import AdminLogin from "./pages/AdminLogin";
import EmployeeLogin from "./pages/EmployeeLogin";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Main Pages
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import About from "./pages/About";
import Contact from "./pages/Contact";

// User Layout + Pages
import UserDashboard from "./pages/user/UserDashboard";
import Dashboard from "./pages/user/Dashboard";
import CreateTicket from "./pages/user/CreateTicket";
import MyTickets from "./pages/user/MyTickets";
import UserFeedback from "./pages/user/UserFeedback";
import UserProfile from "./pages/user/UserProfile";

// Admin Layout + Pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminHome from "./pages/admin/Dashboard";
import NewTickets from "./pages/admin/NewTickets";
import PriorityTickets from "./pages/admin/PriorityTickets";
import AdminFeedback from "./pages/admin/AdminFeedback";

export default function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* ================= PUBLIC ROUTES ================= */}

        <Route path="/" element={<Homepage />} />
        <Route
  path="/login"
  element={<LoginPage />}
/>

        
        <Route path="/admin-login" element={<AdminLogin />} />

<Route path="/employee-login" element={<EmployeeLogin />} />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />


        {/* ================= USER ROUTES ================= */}

        <Route
          path="/user"
          element={<UserDashboard />}
        >

          <Route
            index
            element={<Dashboard />}
          />

          <Route
            path="create-ticket"
            element={<CreateTicket />}
          />

          <Route
            path="my-tickets"
            element={<MyTickets />}
          />

          <Route
            path="feedback"
            element={<UserFeedback />}
          />


        </Route>


        {/* ================= ADMIN ROUTES ================= */}

        <Route
          path="/admin"
          element={<AdminDashboard />}
        >

          <Route
            index
            element={<AdminHome />}
          />

          <Route
            path="new-tickets"
            element={<NewTickets />}
          />

          <Route
            path="priority-tickets"
            element={<PriorityTickets />}
          />

         
          <Route
            path="feedback"
            element={<AdminFeedback />}
          />

        </Route>

      </Routes>

    </BrowserRouter>

  );

}