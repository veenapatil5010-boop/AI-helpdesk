const express = require('express');

const router = express.Router();

const {
  createTicket,
  getTickets,
  updateTicketStatus,
  deleteTicket
} = require("../controllers/ticketController");

// CREATE
router.post('/', createTicket);

// READ
router.get('/', getTickets);

// UPDATE
router.put('/:id', updateTicketStatus);

// DELETE
router.delete('/:id', deleteTicket);

module.exports = router;