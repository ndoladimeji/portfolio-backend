const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON body
app.use(express.json());

// Route to handle contact form submissions
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  console.log(`New message from ${name} <${email}>: ${message}`);
  res.json({ message: "Thanks for contacting me, " + name + "!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
