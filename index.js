import express from 'express';
const app = express();
const port = process.env.PORT || 3000;


const user_id = "harshit_prakash_06032001";
const email = "hp5024@srmist.edu.in";
const roll_number = "RA2011029010022";

app.use(json());

app.post('/api/bhfl', (req, res) => {
  try {
    const data = req.body.data || [];
    const numbers = data.filter((x) => typeof x === 'number');
    const alphabets = data.filter((x) => typeof x === 'string' && x.length === 1 && x.match(/[a-zA-Z]/));
    const highest_alphabet = alphabets.length > 0 ? [alphabets.reduce((a, b) => (a.toLowerCase() > b.toLowerCase() ? a : b))] : [];

    const response = {
      is_success: true,
      user_id,
      email,
      roll_number,
      numbers,
      alphabets,
      highest_alphabet,
    };

    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/api/bhfl', (req, res) => {
  const response = { operation_code: 1 };
  res.status(200).json(response);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
