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
app.post("/register", async (req, res) => {
  const { email, password } = req.body;
  const emailCheck = await sequelize.query(
    `
      select * from users where email='${email}';
    `
  )
  if (emailCheck[0].length > 0) {
    res.status(400).send('that email exists')
  } else {
    const newUser = await sequelize.query(
      `
      insert into users (email, password) values ('${email}', '${password}')

      select * from users where email='${email}';
      `
    )
    res.status(200).send(newUser)
  }
});

app.listen(PORT, () => console.log(`server running on ${PORT}`));
