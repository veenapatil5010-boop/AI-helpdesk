import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {
  Building2,
} from "lucide-react";

export default function CreateTicket() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    subject: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);
const user = JSON.parse(
  localStorage.getItem("user") || "{}"
);
  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();
    setLoading(true);

    try {

    const user = JSON.parse(
  localStorage.getItem("user") || "{}"
);

const ticketData = {

  employee_name:
    user.name,

  subject:
    formData.subject,

  description:
    formData.description,

  user_id:
    user.id

};

      const response = await axios.post(

        "http://localhost:5000/api/tickets",

        ticketData

      );

      window.alert(
        `Helpdesk says:\n\nTicket created successfully!\n\nAI Priority: ${response.data.priority.toUpperCase()}`
      );

      navigate("/user/my-tickets");

    } catch (error) {

      console.log(error);

      setLoading(false);

      alert("Error creating ticket");

    }

  };

  return (

    <div className="flex min-h-screen bg-gray-50">

      <div className="flex-1">

        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-8 py-4">

          <div className="flex items-center justify-between">

            <div>

              <h1 className="text-2xl font-bold text-gray-900">
                Create New Ticket
              </h1>

              <p className="text-gray-600 mt-1">
                Submit your support request
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

          <div className="max-w-3xl mx-auto">

            <div className="bg-white rounded-xl shadow-sm p-8">

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
{/* Employee Name */}

<div>

  <label className="block text-sm font-medium text-gray-700 mb-2">

    Employee Name

  </label>

  <input
    type="text"
    value={user.name || ""}
    readOnly
    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-700"
  />

</div>
                

                {/* Subject */}
                <div>

                  <label className="block text-sm font-medium text-gray-700 mb-2">

                    Subject

                  </label>

                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        subject: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="Enter ticket subject"
                    required
                  />

                </div>

                {/* Description */}
                <div>

                  <label className="block text-sm font-medium text-gray-700 mb-2">

                    Problem Description

                  </label>

                  <textarea
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        description: e.target.value,
                      })
                    }
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                    placeholder="Describe your issue..."
                    required
                  />

                </div>

                {/* Buttons */}
                <div className="flex gap-4 pt-4">

                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >

                    {loading ? "Creating Ticket..." : "Submit Ticket"}

                  </button>

                  <button
                    type="button"
                    onClick={() => navigate("/user")}
                    className="px-8 py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                  >

                    Cancel

                  </button>

                </div>

              </form>

            </div>

          </div>

        </main>

      </div>

    </div>

  );

}