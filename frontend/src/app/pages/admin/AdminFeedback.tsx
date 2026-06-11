import { useEffect, useState } from "react";

import axios from "axios";

import {
  Building2,
  Star,
  TrendingUp,
  MessageSquare,
} from "lucide-react";

export default function AdminFeedback() {

  const [feedback, setFeedback] =
    useState<any[]>([]);

  useEffect(() => {

    fetchFeedback();

  }, []);

  const fetchFeedback = async () => {

    try {

      const response =
        await axios.get(
          "http://localhost:5000/api/feedback"
        );

      setFeedback(
        response.data
      );

    } catch (error) {

      console.log(error);

    }

  };

  // Average Rating
  const averageRating =
    feedback.length > 0

      ? (
          feedback.reduce(

            (sum, item) =>

              sum + item.rating,

            0

          ) / feedback.length

        ).toFixed(1)

      : "0";

  // Positive %
  const positivePercentage =
    feedback.length > 0

      ? Math.round(

          (
            feedback.filter(

              (item) =>
                item.rating >= 4

            ).length /

            feedback.length

          ) * 100

        )

      : 0;

  return (

    <div className="flex-1">
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">

  <h1 className="text-3xl font-bold text-gray-800">
    Feedback
  </h1>

</div>

      {/* Header */}
      <div className="flex justify-end mb-6">



</div>

      {/* Main */}
      <main className="p-8">

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">

          {/* Average */}
          <div className="bg-white rounded-xl shadow-sm p-6">

            <div className="flex items-center justify-between mb-4">

              <div>

                <div className="text-sm text-gray-600">

                  Average Rating

                </div>

                <div className="text-4xl font-bold text-blue-600 mt-2">

                  {averageRating}

                </div>

              </div>

              <Star className="w-10 h-10 text-yellow-400 fill-yellow-400" />

            </div>

          </div>

          {/* Positive */}
          <div className="bg-white rounded-xl shadow-sm p-6">

            <div className="flex items-center justify-between mb-4">

              <div>

                <div className="text-sm text-gray-600">

                  Positive Feedback

                </div>

                <div className="text-4xl font-bold text-green-600 mt-2">

                  {positivePercentage}%

                </div>

              </div>

              <TrendingUp className="w-10 h-10 text-green-500" />

            </div>

          </div>

          {/* Total */}
          <div className="bg-white rounded-xl shadow-sm p-6">

            <div className="flex items-center justify-between mb-4">

              <div>

                <div className="text-sm text-gray-600">

                  Total Reviews

                </div>

                <div className="text-4xl font-bold text-purple-600 mt-2">

                  {feedback.length}

                </div>

              </div>

              <MessageSquare className="w-10 h-10 text-purple-500" />

            </div>

          </div>

        </div>

        {/* Feedback List */}
        <div className="bg-white rounded-xl shadow-sm p-6">

          <h2 className="text-xl font-semibold text-gray-900 mb-6">

            Recent Feedback

          </h2>

          <div className="space-y-6">

            {feedback.map((item) => (

              <div

                key={item.id}

                className="border border-gray-200 rounded-xl p-5"

              >

                {/* Top */}
                <div className="flex items-start justify-between mb-3">

                  <div>

                    <div className="font-semibold text-gray-900">

                      Ticket #{item.ticket_id}

                    </div>

                    <div className="text-sm text-gray-600">

                      {item.category}

                    </div>

                  </div>

                  <div className="flex gap-1">

                    {[1, 2, 3, 4, 5].map(

                      (star) => (

                        <Star

                          key={star}

                          className={`w-5 h-5 ${
                            star <= item.rating

                              ? "fill-yellow-400 text-yellow-400"

                              : "text-gray-300"
                          }`}

                        />

                      )

                    )}

                  </div>

                </div>

                {/* Description */}
                <div className="text-sm text-gray-700 mb-3">

                  <span className="font-medium">

                    Issue:

                  </span>{" "}

                  {item.description}

                </div>

                {/* Comment */}
                <div className="bg-gray-50 rounded-lg p-4 text-gray-700">

                  {item.comment || "No comment provided"}

                </div>

              </div>

            ))}

            {/* Empty */}
            {feedback.length === 0 && (

              <div className="text-center py-12">

                <MessageSquare className="w-16 h-16 text-gray-300 mx-auto mb-4" />

                <h3 className="text-lg font-semibold text-gray-900 mb-2">

                  No feedback available

                </h3>

                <p className="text-gray-600">

                  Employee reviews will appear here

                </p>

              </div>

            )}

          </div>

        </div>

      </main>

    </div>

  );

}