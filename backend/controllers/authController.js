const db = require("../config/db");


// LOGIN
const loginUser = (req, res) => {

  const {
    email,
    password
  } = req.body;

  const sql = `
    SELECT *
    FROM users
    WHERE email = ?
    AND password = ?
  `;

  db.query(

    sql,

    [email, password],

    (err, result) => {

      if (err) {

        console.log(err);

        return res.status(500).json({

          message:
            "Server error"

        });

      }

      if (result.length === 0) {

        return res.status(401).json({

          message:
            "Invalid credentials"

        });

      }

      const user =
        result[0];

      res.status(200).json({

        message:
          "Login successful",

        user: {

          id: user.id,

          name: user.name,

          email: user.email,

          role: user.role

        }

      });

    }

  );

};


module.exports = {

  loginUser

};