
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 4000;


app.use(cors());
app.use(bodyParser.json());


app.get("/", (req, res) => {
  res.json({ status: "Backend running 🚀" });
});


const simulateRoutes = require("./routes/simulate");
const exportRoutes = require("./routes/export");


app.use("/simulate", simulateRoutes);
app.use("/export", exportRoutes);


app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
