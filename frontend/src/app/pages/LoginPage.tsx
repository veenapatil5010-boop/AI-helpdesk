import { Link } from "react-router-dom";
import logo from "../../assets/jsw-logo.svg";

export default function LoginPage() {

  return (

    <div className="min-h-screen flex items-center justify-center bg-slate-100">

      <div className="bg-white p-10 rounded-2xl shadow-2xl w-[420px] text-center">

        <img
          src={logo}
          alt="JSW Logo"
          className="w-40 mx-auto mb-6"
        />

        <h1 className="text-3xl font-bold mb-3">
          Choose Login Type
        </h1>

        <p className="text-gray-500 mb-8">
          Select your portal access
        </p>

        <div className="flex flex-col gap-5">

          <Link
            to="/admin-login"
            className="bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold text-lg transition-all"
          >
            Admin Login
          </Link>

          <Link
            to="/employee-login"
            className="bg-red-700 hover:bg-red-800 text-white py-4 rounded-xl font-semibold text-lg transition-all"
          >
            Employee Login
          </Link>

        </div>

      </div>

    </div>
  );
}