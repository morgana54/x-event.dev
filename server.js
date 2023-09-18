const express = require("express");
const bp = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(bp.json());

const events = [];

app.post("/send-event", (req, res) => {
  const { eventName, timestamp } = req.body;
  console.log(eventName, timestamp);

  events.push({ eventName, timestamp });

  res.status(200).json({ message: "Event sent successfully" });
});

app.get("/events", (req, res) => {
  console.log(events);
  res.status(200).json({ events });
});

app.get("/admin", (req, res) => {
  const fileName = "admin-panel.html";

  const options = {
    root: __dirname,
  };

  res.sendFile(fileName, options, function (err) {
    if (err) {
      res.status(500);
    } else {
      res.status(200);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
