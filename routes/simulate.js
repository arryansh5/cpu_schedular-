const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  res.json({ message: "Simulate route working ✅" });
});

module.exports = router;
