const db = require("../config/db");


// =========================
// CREATE FEEDBACK
// =========================

const createFeedback = (req, res) => {

  const {
    ticket_id,
    rating,
    comment
  } = req.body;

  const checkSql = `
    SELECT *
    FROM feedback
    WHERE ticket_id = ?
  `;

  db.query(

    checkSql,

    [ticket_id],

    (checkErr, checkResult) => {

      if (checkErr) {

        console.log(checkErr);

        return res.status(500).json({
          message: "Error checking feedback"
        });

      }

      if (checkResult.length > 0) {

        return res.status(400).json({
          message:
            "Feedback already submitted for this ticket"
        });

      }

      const insertSql = `
        INSERT INTO feedback
        (
          ticket_id,
          rating,
          comment
        )
        VALUES (?, ?, ?)
      `;

      db.query(

        insertSql,

        [
          ticket_id,
          rating,
          comment
        ],

        (err, result) => {

          if (err) {

            console.log(err);

            return res.status(500).json({
              message:
                "Error submitting feedback"
            });

          }

          res.status(201).json({
            message:
              "Feedback submitted successfully"
          });

        }

      );

    }

  );

};


// =========================
// GET ALL FEEDBACK
// =========================

const getFeedback = (req, res) => {

  const sql = `
    SELECT
      feedback.*,
      tickets.category,
      tickets.description
    FROM feedback

    JOIN tickets

    ON feedback.ticket_id = tickets.id
  `;

  db.query(sql, (err, result) => {

    if (err) {

      console.log(err);

      return res.status(500).json({

        message:
          "Error fetching feedback"

      });

    }

    res.status(200).json(result);

  });

};


// =========================
// EXPORTS
// =========================

module.exports = {

  createFeedback,

  getFeedback

};