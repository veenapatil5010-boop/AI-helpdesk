const express = require("express");

const router = express.Router();

const {

  createFeedback,
  getFeedback

} = require(
  "../controllers/feedbackController"
);


// CREATE FEEDBACK
router.post(
  "/",
  createFeedback
);


// GET FEEDBACK
router.get(
  "/",
  getFeedback
);


module.exports = router;