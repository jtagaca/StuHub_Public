// WORK IN PROGRESS
const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "admin",
  host: "database-1.co2pklgzywdb.us-east-1.rds.amazonaws.com",
  password: "admin12345",
  database: "test_db",
  port: "3306"
});

db.connect((err)=>{
  if(err){
    throw err;
  }
  else{
    console.log("connected to database")
  }
})

console.log("hello");
// db.query("CREATE table testtable(name VARCHAR(255))",(err,rows)=>{
//   if(err){
//     throw err;
//   }
//   else{
//     console.log("created")}
// })

//inserts new user, **need to ask about what to do for student/faculty
app.post("/create", (req, res) => {
  const login_id = req.body.Login_ID;
  const first_name = req.body.First_Name;
  const last_name = req.body.Last_Name;
  const password = req.body.Password;
  const email = req.body.Email;
  const phone = req.body.Phone;

  db.query(
    "INSERT INTO User (Login_ID, First_Name, Last_Name, Password, Email, Phone) VALUES (?,?,?,?,?,?)",
    [login_id, first_name, last_name, password, email, phone],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("User Added");
      }
    }
  );
});

//inserts new department
app.post("/create2", (req, res) => {
  const department_id = req.body.Department_ID;
  const department_name = req.body.Department_Name;

  db.query(
    "INSERT INTO Department (Department_ID, Department_Name) VALUES (?,?)",
    [department_id, department_name],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Department Added");
      }
    }
  );
});

//inserts new course
app.post("/create3", (req, res) => {
  const course_id = req.body.Course_ID;
  const crn = req.body.CRN;
  const course_name = req.body.Course_Name;
  const term = req.body.Term;
  const department_id = req.body.Department_ID;

  db.query(
    "INSERT INTO Course (Course_ID, CRN, Course_Name, Term, Department_ID) VALUES (?,?,?,?,?)",
    [course_id, crn, course_name, term, department_id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Course Added");
      }
    }
  );
});

// sample user retrieval
app.get("/user", (req, res) => {
  db.query("SELECT * FROM User", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// retrieve user info via login id
app.get("/idGetUser", (req, res) => {
  const login_id = req.body.Login_ID;

  db.query("SELECT * FROM User WHERE Login_ID = ?", 
  [login_id],
  (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result)
    }
  });
});

// retrieve user info via first and last name
app.get("/nameGetUser", (req, res) => {
  const first_name = req.body.First_Name;
  const last_name = req.body.Last_Name;

  db.query("SELECT * FROM User WHERE First_Name = ? AND Last_Name = ?",
  [first_name, last_name],
  (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result)
    }
  });
});

app.put("/update", (req, res) => {
  const login_id = req.body.login_id;
  const wage = req.body.wage;
  db.query(
    "UPDATE employees SET wage = ? WHERE id = ?",
    [wage, login_id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

// deletes user via user id
app.delete("/delete/:id", (req, res) => {
  const login_id = req.params.Login_ID;
  db.query("DELETE FROM User WHERE Login_ID = ?", login_id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});
