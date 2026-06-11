import axios from "axios";
import { useState } from "react";

export default function EmployeeLogin() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (

    <div className="min-h-screen flex items-center justify-center bg-slate-100">

      <div className="bg-white p-10 rounded-2xl shadow-2xl w-[450px]">

        <h1 className="text-3xl font-bold text-center mb-8">
          Employee Login
        </h1>

        <form
 onSubmit={async (e) => {

  e.preventDefault();

  try {

    const response =
  await axios.post(
    "http://localhost:5000/api/auth/login",
    {
      email,
      password
    }
  );

console.log(response.data);

localStorage.setItem(
  "user",
  JSON.stringify(
    response.data.user
  )
);
    localStorage.setItem(
      "user",
      JSON.stringify(
        response.data.user
      )
    );

    window.location.href =
      "/user";

  } catch (error) {

    alert(
      "Invalid Email or Password"
    );

  }

}}className="flex flex-col gap-5"
>

          <input
            type="email"
            placeholder="Employee Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="border border-gray-300 p-4 rounded-xl outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="border border-gray-300 p-4 rounded-xl outline-none focus:ring-2 focus:ring-green-500"
          />

          <button
            type="submit"
            className="bg-red-700 hover:bg-red-800 text-white py-4 rounded-xl font-semibold text-lg"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
}