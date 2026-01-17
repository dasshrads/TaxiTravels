const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("TaxiTravels Backend Running");
});

// Women Safety SOS API
// app.post("/sos", (req, res) => {
//   const { user, location } = req.body;

//   console.log("🚨 SOS ALERT 🚨");
//   console.log("User:", user);
//   console.log("Location:", location);

//   res.json({
//     success: true,
//     message: "Emergency contacts alerted"
//   });
// });

app.post("/sos", (req, res) => {
  //console.log("REQ BODY:", req.body);
  const { userType, location } = req.body;

//           OR
//    if (userType === "female") {
//     console.log("🚨 WOMEN SAFETY SOS ALERT");
//   } else {
//     console.log("🚨 SOS ALERT");
//   }

//   console.log("Location:", location);
//   res.send({ message: "SOS received" });
// });

  console.log("🚨 SOS ALERT", userType, location);
  res.send({ message: "SOS received" });
});

app.post("/book", (req, res) => {
  const { pickup, drop, gender } = req.body;

  console.log("🚕 NEW TAXI BOOKING");
  console.log("Pickup:", pickup);
  console.log("Drop:", drop);
  console.log("Gender:", gender);

  res.send({
    message: "Taxi booking received",
    status: "Driver searching"
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚕 TaxiTravels Server running on port ${PORT}`);
});
