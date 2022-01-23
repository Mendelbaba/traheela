const express = require("express");
const cors = require("cors");
const path = require("path");
const PORT = process.env.PORT || 4000;
const { sequelize } = require("./sequelize");
const app = express();
const bcrypt = require("bcrypt");

// middleware
app.use(express.json());
app.use(cors());

// put endpoints here
app.post("/register", async (req, res) => {
  const { email, password } = req.body;
  const checkEmail = await sequelize.query(`
SELECT * FROM users WHERE email = '${email}'
`);
  if (checkEmail[1].rowCount !== 0) {
    res.status(500).send("User already exists");
  } else {
    const salt = bcrypt.genSaltSync(10);
    const passwordHash = bcrypt.hashSync(password, salt);
    await sequelize.query(`
  INSERT INTO users(email,password)
  VALUES (
      '${email}'
      '${passwordHash}'
  )
  `);
  }
});

app.listen(PORT, () => console.log(`server running on ${PORT}`));
