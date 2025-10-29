const express = require("express");
const router = express.Router();

router.get("/pdf", (req, res) => {
  res.json({ message: "Export PDF route working ✅" });
});

router.get("/excel", (req, res) => {
  res.json({ message: "Export Excel route working ✅" });
});

module.exports = router;
