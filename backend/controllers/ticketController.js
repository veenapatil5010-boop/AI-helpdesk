const { PythonShell } = require("python-shell");
const path = require("path");

const db = require("../config/db");


// =========================
// CREATE TICKET
// =========================

const createTicket = (req, res) => {

  const {
      employee_name,
    subject,
    description,
    user_id
  } = req.body;

  const ticketText =
    `${subject} ${description}`;

  const options = {

    mode: "text",

    pythonOptions: ["-u"],

    scriptPath: path.join(
      __dirname,
      "../ml"
    ),

    args: [ticketText]

  };

  console.time("Ticket Creation");

  PythonShell.run(
    "predict_priority.py",
    options
  )

  .then((results) => {

    const predictedPriority =
      results[0].trim();

    console.log(
      "AI Predicted Priority:",
      predictedPriority
    );

const sql = `
  INSERT INTO tickets
  (
    employee_name,
    subject,
    description,
    priority,
    user_id
  )
  VALUES (?, ?, ?, ?, ?)
`;

    db.query(

      sql,

      [
        employee_name,
        subject,
        description,
        predictedPriority,
        user_id
      ],

      (err, result) => {

        if (err) {

          console.log(err);

          return res.status(500).json({
            message:
              "Error creating ticket"
          });

        }

        console.timeEnd("Ticket Creation");

        res.status(201).json({

          message:
            "Ticket created successfully",

          priority:
            predictedPriority

        });

      }

    );

  })

  .catch((err) => {

    console.log(err);

    return res.status(500).json({
      message:
        "AI prediction failed"
    });

  });

};


// =========================
// GET ALL TICKETS
// =========================

const getTickets = (req, res) => {

  const sql = `
    SELECT
      tickets.*,
      users.name,
      users.email
    FROM tickets
    LEFT JOIN users
      ON tickets.user_id = users.id
  `;

  db.query(sql, (err, result) => {

    if (err) {

      console.log(err);

      return res.status(500).json({
        message:
          "Error fetching tickets"
      });

    }

    res.status(200).json(result);

  });

};


// =========================
// UPDATE TICKET STATUS / DEPARTMENT
// =========================

const updateTicketStatus = (req, res) => {

  const { id } = req.params;

  const {
    status,
    department
  } = req.body;

  const sql = `
    UPDATE tickets
    SET status = ?, department = ?
    WHERE id = ?
  `;

  db.query(

    sql,

    [
      status,
      department,
      id
    ],

    (err, result) => {

      if (err) {

        console.log(err);

        return res.status(500).json({
          message:
            "Error updating ticket"
        });

      }

      res.status(200).json({
        message:
          "Ticket updated successfully"
      });

    }

  );

};


// =========================
// DELETE TICKET
// =========================

const deleteTicket = (req, res) => {

  const { id } = req.params;

  const sql = `
    DELETE FROM tickets
    WHERE id = ?
  `;

  db.query(

    sql,

    [id],

    (err, result) => {

      if (err) {

        console.log(err);

        return res.status(500).json({
          message:
            "Error deleting ticket"
        });

      }

      res.status(200).json({
        message:
          "Ticket deleted successfully"
      });

    }

  );

};


// =========================
// EXPORTS
// =========================

module.exports = {

  createTicket,

  getTickets,

  updateTicketStatus,

  deleteTicket

};