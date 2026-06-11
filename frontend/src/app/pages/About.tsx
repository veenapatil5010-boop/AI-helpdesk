import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Target, Users, Award, TrendingUp } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">About Our Help Desk System</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Empowering employees with AI-driven support solutions for faster issue resolution and enhanced productivity.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Transforming Internal Support
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Our AI-powered help desk system is designed specifically for industrial enterprises like JSW Steel,
                where efficient employee support is critical to maintaining operational excellence.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                By leveraging artificial intelligence and smart automation, we help organizations reduce ticket
                resolution times, improve employee satisfaction, and streamline support operations across all departments.
              </p>
              <p className="text-lg text-gray-600">
                The system intelligently prioritizes tickets, routes them to the right teams, and provides real-time
                tracking for complete transparency.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <Target className="w-10 h-10 text-blue-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Our Mission</h3>
                <p className="text-sm text-gray-600">
                  Deliver efficient, AI-powered support to every employee
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <Users className="w-10 h-10 text-green-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Our Team</h3>
                <p className="text-sm text-gray-600">
                  Dedicated professionals committed to your success
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <Award className="w-10 h-10 text-purple-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Quality First</h3>
                <p className="text-sm text-gray-600">
                  Maintaining highest standards in support delivery
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <TrendingUp className="w-10 h-10 text-orange-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Innovation</h3>
                <p className="text-sm text-gray-600">
                  Continuously improving with cutting-edge technology
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our System?</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
                <div className="text-gray-600">Employee Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">4.5h</div>
                <div className="text-gray-600">Average Resolution Time</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-gray-600">System Availability</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of employees already using our platform
          </p>
          <Link
            to="/login"
            className="inline-block bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg"
          >
            Access Your Dashboard
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
