import { useState } from "react";

export default function AdminLogin() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (

    <div className="min-h-screen flex items-center justify-center bg-slate-100">

      <div className="bg-white p-10 rounded-2xl shadow-2xl w-[450px]">

        <h1 className="text-3xl font-bold text-center mb-8">
          Admin Login
        </h1>

        <form
  onSubmit={(e) => {
    e.preventDefault();
    window.location.href = "/admin";
  }}
  className="flex flex-col gap-5"
>

          <input
            type="email"
            placeholder="Admin Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="border border-gray-300 p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="border border-gray-300 p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold text-lg"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
}