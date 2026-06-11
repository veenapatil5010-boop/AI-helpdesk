import { Brain, Route, BarChart3, MessageSquarePlus } from "lucide-react";
import logo from "../../assets/jsw-logo.svg";
import { Link } from "react-router-dom";

export default function Homepage() {

  return (

    <div className="min-h-screen flex flex-col bg-gray-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-br bg-gradient-to-br from-slate-100 to-blue-200text-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div>

              <h1 className="text-5xl font-bold mb-6 leading-tight">
                AI-Powered Employee Help Desk System
              </h1>

              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Smart ticket management system for faster employee support and issue resolution.
                Streamline your internal support operations with intelligent automation.
              </p>

              <Link
  to="/login"
  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl shadow-xl hover:scale-105 transition-all duration-300 font-semibold text-lg"
>
  Login to Dashboard
</Link>
            </div>

            <div className="hidden md:block">

              <img
  src={logo}
  alt="JSW Logo"
  className="w-[500px] mx-auto"
/>

            </div>

          </div>

        </div>

      </section>


      {/* Features Section */}
      <section className="py-20">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">

            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Powerful Features for Efficient Support
            </h2>

            <p className="text-lg text-gray-600">
              Our AI-powered system makes employee support faster and more efficient
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">

              <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-7 h-7 text-blue-600" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                AI Ticket Prioritization
              </h3>

              <p className="text-gray-600">
                Intelligent system automatically categorizes and prioritizes tickets based on urgency and impact.
              </p>

            </div>


            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">

              <div className="bg-green-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Route className="w-7 h-7 text-green-600" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Smart Ticket Routing
              </h3>

              <p className="text-gray-600">
                Automatically routes tickets to the right department for faster resolution times.
              </p>

            </div>


            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">

              <div className="bg-purple-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-7 h-7 text-purple-600" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Real-Time Tracking
              </h3>

              <p className="text-gray-600">
                Track your tickets in real-time with instant updates and status notifications.
              </p>

            </div>


            {/* Feature 4 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">

              <div className="bg-orange-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <MessageSquarePlus className="w-7 h-7 text-orange-600" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Feedback & Analytics
              </h3>

              <p className="text-gray-600">
                Collect employee feedback and gain insights to continuously improve support quality.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* Stats Section */}
      <section className="bg-white py-16">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">
                2+
              </div>

              <div className="text-gray-600">
                Tickets Resolved
              </div>
            </div>

            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">
                100%
              </div>

              <div className="text-gray-600">
                Satisfaction Rate
              </div>
            </div>

            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">
                24/7
              </div>

              <div className="text-gray-600">
                System Availability
              </div>
            </div>

            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">
                1 - 1.5h
              </div>

              <div className="text-gray-600">
                Avg Resolution Time
              </div>
            </div>

          </div>

        </div>

      </section>

    </div>

  );

}