// const express = require("express");
// const app = express();
// const mysql = require("mysql");
// const cors = require("cors");

// app.use(cors());
// app.use(express.json());

// const db = mysql.createConnection({
//   user: "admin",
//   host: "database-1.co2pklgzywdb.us-east-1.rds.amazonaws.com",
//   password: "admin12345",
//   database: "test_db",
//   port: "3306"
// });

// db.connect((err)=>{
//   if(err){
//     throw err;
//   }
//   else{
//     console.log("connected to database")
//   }
// })

// console.log("hello");
// // db.query("CREATE table testtable(name VARCHAR(255))",(err,rows)=>{
// //   if(err){
// //     throw err;
// //   }
// //   else{
// //     console.log("created")}
// // })

// app.post("/create", (req, res) => {
//   const name = req.body.name;
//   const age = req.body.age;
//   const country = req.body.country;
//   const position = req.body.position;
//   const wage = req.body.wage;

//   db.query(
//     "INSERT INTO employees (name, age, country, position, wage) VALUES (?,?,?,?,?)",
//     [name, age, country, position, wage],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send("Values Inserted");
//       }
//     }
//   );
// });

// app.get("/employees", (req, res) => {
//   db.query("SELECT * FROM employees", (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(result);
//     }
//   });
// });

// app.put("/update", (req, res) => {
//   const id = req.body.id;
//   const wage = req.body.wage;
//   db.query(
//     "UPDATE employees SET wage = ? WHERE id = ?",
//     [wage, id],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send(result);
//       }
//     }
//   );
// });

// app.delete("/delete/:id", (req, res) => {
//   const id = req.params.id;
//   db.query("DELETE FROM employees WHERE id = ?", id, (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(result);
//     }
//   });
// });

// app.listen(3001, () => {
//   console.log("Yey, your server is running on port 3001");
// });

const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const bcrypt = require("bcrypt");
const saltRounds = 10;
// const cv = require("opencv4nodejs");
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);
const db = mysql.createConnection({
  user: "admin",
  host: "database-1.co2pklgzywdb.us-east-1.rds.amazonaws.com",
  password: "admin12345",
  database: "StuHub",
  port: "3306",
});

db.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log("connected to database aws");
  }
});

app.post("/register", (req, res) => {
  // communicates through the name created in the method to this
  const username = req.body.username;
  const password = req.body.password;
  const firstname = req.body.first;
  const lastname = req.body.lastname;
  const phone = req.body.phone;
  const email = req.body.email;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }

    db.query(
      "INSERT INTO user (Login_ID,First_Name,Last_Name, password, Email, Phone  ) VALUES (?,?, ? , ?, ?, ?)",
      [username, firstname, lastname, hash, email, phone],
      (err, result) => {
        console.log(err);
      }
    );
  });
});

app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

// used to login from front to backend
app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  console.log(username);
  db.query(
    "SELECT * FROM user WHERE  Login_ID= ?;",
    [username],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      console.log(result);
      console.log(password);
      console.log(result[0].Password);
      if (result.length > 0) {
        bcrypt.compare(password, result[0].Password, (error, response) => {
          if (response) {
            req.session.user = result;
            console.log(req.session.user);
            res.send(result);
          } else {
            res.send({ message: "Wrong username/password combination!" });
          }
        });
      } else {
        res.send({ message: "User doesn't exist" });
      }
    }
  );
});

app.listen(3001, () => {
  console.log("running server");
});
