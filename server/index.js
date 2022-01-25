const express = require("express");
const cors = require("cors");
const path = require("path");
const PORT = process.env.PORT || 4000;
const sequelize = require("./sequelize");
const app = express();
const bcrypt = require("bcrypt");

// middleware
app.use(express.json());
app.use(cors());

// put endpoints here
// Sign up endpoint here.
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
      '${email}',
      '${passwordHash}'
  )
  `);

    const userInfo = await sequelize.query(`
      SELECT user_id, email FROM users WHERE email = '${email}'
      `);
    console.log("line 36 baby");
    res.status(200).send(userInfo);
  }
});

// sign in endpoint.
app.post("/SignIn", async (req, res) => {
  const { email, password } = req.body;
  const validUser = await sequelize
    .query(
      `
    SELECT * FROM users WHERE email = '${email}'
    `
    )
    .catch((err) => console.log(err));
  if (validUser[1].rowCount === 1) {
    if (bcrypt.compareSync(password, validUser[0][0].password)) {
      let userInfo = {
        userId: validUser[0][0].user_id,
        email: validUser[0][0].email,
      };
      res.status(200).send(userInfo);
    } else {
      res.status(401).send("password is incorect");
    }
  } else {
    res.status(401).send("email is incorrect");
  }
});

// next sesh endpoint
app.get("/nextSession", async (req, res) => {
  let session = await sequelize.query(
    ` SELECT * FROM workouts WHERE name = '5X5'`
  );
  session = JSON.parse(session[0][0].program);
  res.status(200).send(session);
});

app.listen(PORT, () => console.log(`server running on ${PORT}`));
