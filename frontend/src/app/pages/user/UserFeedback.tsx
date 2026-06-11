import { useEffect, useState } from "react";
import axios from "axios";

import {
  Building2,
  Star,
  CheckCircle,
  MessageSquare,
} from "lucide-react";

export default function UserFeedback() {

  const [tickets, setTickets] =
    useState<any[]>([]);

  const [feedbackData, setFeedbackData] =
    useState<any>({});

    const [existingFeedback, setExistingFeedback] =
  useState<any>({});
  const fetchExistingFeedback = async () => {

  try {

    const response =
      await axios.get(
        "http://localhost:5000/api/feedback"
      );

    const feedbackMap: any = {};

    response.data.forEach((item: any) => {

      feedbackMap[item.ticket_id] = item;

    });

    setExistingFeedback(feedbackMap);

  } catch (error) {

    console.log(error);

  }

};

  // FETCH RESOLVED TICKETS
 useEffect(() => {

  fetchResolvedTickets();

  fetchExistingFeedback();

}, []);

  const fetchResolvedTickets = async () => {

    try {

      const response =
        await axios.get(
          "http://localhost:5000/api/tickets"
        );

      const resolvedTickets =
        response.data.filter(

          (ticket: any) =>

            ticket.status === "Resolved"

        );

      setTickets(
        resolvedTickets
      );

    } catch (error) {

      console.log(error);

    }

  };

  // HANDLE STAR RATING
  const handleRating = (
    ticketId: number,
    rating: number
  ) => {

    setFeedbackData({

      ...feedbackData,

      [ticketId]: {

        ...feedbackData[ticketId],

        rating

      }

    });

  };

  // HANDLE COMMENT
  const handleComment = (
    ticketId: number,
    comment: string
  ) => {

    setFeedbackData({

      ...feedbackData,

      [ticketId]: {

        ...feedbackData[ticketId],

        comment

      }

    });

  };

  // SUBMIT FEEDBACK
  const handleSubmit = async (
    ticketId: number
  ) => {

    const feedback =
      feedbackData[ticketId];

    if (
      !feedback ||
      !feedback.rating
    ) {

      alert(
        "Please provide rating"
      );

      return;

    }

    try {

      await axios.post(

        "http://localhost:5000/api/feedback",

        {

          ticket_id: ticketId,

          rating:
            feedback.rating,

          comment:
            feedback.comment || ""

        }

      );

      alert(
        "Feedback submitted successfully!"
      );
      fetchExistingFeedback();

    } catch (error) {

      console.log(error);

      alert(
        "Error submitting feedback"
      );

    }

  };

  return (

    <div className="flex-1">

      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-8 py-4">

        <div className="flex items-center justify-between">

          <div>

            <h1 className="text-2xl font-bold text-gray-900">

              Feedback

            </h1>

            <p className="text-gray-600 mt-1">

              Rate your resolved tickets

            </p>

          </div>

          <div className="flex items-center gap-3">

            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2 rounded-lg">

              <Building2 className="w-6 h-6 text-white" />

            </div>

          </div>

        </div>

      </header>

      {/* Main */}
      <main className="p-8">

        {tickets.length > 0 ? (

          <div className="grid gap-6">

            {tickets.map((ticket) => (

              <div

                key={ticket.id}

                className="bg-white rounded-xl shadow-sm p-6"

              >

                {/* Top */}
                <div className="flex items-start justify-between mb-4">

                  <div className="flex-1">

                    <div className="flex items-center gap-3 mb-2">

                      <h3 className="text-lg font-semibold text-gray-900">

                        Ticket #{ticket.id}

                      </h3>

                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">

                        Resolved

                      </span>

                    </div>

                    <div className="text-sm text-gray-600 mb-1">

                      {ticket.category}

                    </div>

                    <div className="text-gray-700">

                      {ticket.description}

                    </div>

                  </div>

                </div>

                {/* Submitted */}
                {existingFeedback[ticket.id] ? (

  <div className="bg-green-50 border border-green-200 rounded-lg p-4">

    <div className="font-medium text-green-900">

      Feedback Submitted ✓

    </div>

    <div className="text-sm text-green-700 mt-2">

      Rating: {existingFeedback[ticket.id].rating} Stars

    </div>

    <div className="text-sm text-green-700 mt-1">

      Comment: {existingFeedback[ticket.id].comment || "No Comment"}

    </div>

  </div>

) : (

                  <div className="border-t border-gray-200 pt-4 mt-4">

                    {/* Rating */}
                    <div className="mb-4">

                      <label className="block text-sm font-medium text-gray-700 mb-3">

                        Rate your experience

                      </label>

                      <div className="flex gap-2">

                        {[1, 2, 3, 4, 5].map(

                          (star) => (

                            <button

                              key={star}

                              onClick={() =>
                                handleRating(
                                  ticket.id,
                                  star
                                )
                              }

                              className="focus:outline-none transition-transform hover:scale-110"

                            >

                              <Star

                                className={`w-8 h-8 ${
                                  feedbackData[
                                    ticket.id
                                  ]?.rating >=
                                  star

                                    ? "fill-yellow-400 text-yellow-400"

                                    : "text-gray-300"
                                }`}

                              />

                            </button>

                          )

                        )}

                      </div>

                    </div>

                    {/* Comment */}
                    <div className="mb-4">

                      <label className="block text-sm font-medium text-gray-700 mb-2">

                        Additional Comments

                      </label>

                      <textarea

                        value={
                          feedbackData[
                            ticket.id
                          ]?.comment || ""
                        }

                        onChange={(e) =>
                          handleComment(
                            ticket.id,
                            e.target.value
                          )
                        }

                        rows={3}

                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"

                        placeholder="Share your support experience..."

                      />

                    </div>

                    {/* Submit */}
                    <button

                      onClick={() =>
                        handleSubmit(
                          ticket.id
                        )
                      }

                      className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"

                    >

                      Submit Feedback

                    </button>

                  </div>

                )}

              </div>

            ))}

          </div>

        ) : (

          <div className="bg-white rounded-xl shadow-sm p-12 text-center">

            <MessageSquare className="w-16 h-16 text-gray-300 mx-auto mb-4" />

            <h3 className="text-lg font-semibold text-gray-900 mb-2">

              No resolved tickets to rate

            </h3>

            <p className="text-gray-600">

              Once tickets are resolved,
              you can provide feedback here.

            </p>

          </div>

        )}

      </main>

    </div>

  );

}