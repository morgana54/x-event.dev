// @TODO: generate uuid
// @TODO: send clientIP in the POST request

console.log("start analytics.js");

// Register 'page-load' event
document.addEventListener("DOMContentLoaded", (event) => {
  const payload = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ timestamp: Date.now(), eventName: "page-load" }),
  };

  const response = fetch("http://localhost:3000/send-event", payload);
});
