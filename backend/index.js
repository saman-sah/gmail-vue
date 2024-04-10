const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client('55327540112-8r4oktr353agk4q5vd70ilj1g9104lpj.apps.googleusercontent.com')

app.use(bodyParser.json())
app.use(cors())

app.post('/api/google-login', async (req, res) => {
  try {
    console.log('req.body.token', req.body.token);
    const data = await client.verifyIdToken({
      idToken: req.body.token,
      audience: ''
    });
    res.json(data.getPayload());
  } catch (error) {
    console.error('Error verifying Google token:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(4001, () => {
  console.log('Server is ready at http://localhost:4001');
})