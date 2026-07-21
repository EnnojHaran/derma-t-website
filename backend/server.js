const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

app.post('/api/contact', (req, res) => {
  const { name, email, role, message } = req.body;

  if (!name || !email || !role) {
    return res.status(400).json({ error: 'Name, email, and role are required.' });
  }

  console.log('New contact form submission:');
  console.log({ name, email, role, message });

  // To send emails, install nodemailer and configure it here.
  res.json({ success: true, message: 'Thank you for your interest! We will be in touch soon.' });
});

app.listen(PORT, () => {
  console.log(`Derma-T backend running on http://localhost:${PORT}`);
});
