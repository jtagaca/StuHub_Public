const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const bcrypt = require("bcrypt");
const saltRounds = 10;
/* const cv = require("opencv4nodejs"); */
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
      "INSERT INTO User (Login_ID,First_Name,Last_Name, password, Email, Phone  ) VALUES (?,?, ? , ?, ?, ?)",
      [username, firstname, lastname, hash, email, phone],
      (err, result) => {
        if (err) {
          // console.log("User does not exist");
          console.log(err);
        } else {
          console.log(result);
          // res.send(result);
        }
      }
    );
  });

  res.send();
});
app.get("/getuser", (req, res) => {
  const login_id = req.query.LoginID;

  console.log(login_id);
  db.query(
    "SELECT * FROM User WHERE Login_ID = ?",
    [login_id],

    (err, result) => {
      if (err) {
        console.log("User does not exist");
        console.log(err);
      } else {
        console.log(result);
        res.send(result);
      }
    }
  );
});

app.get("/getStuCourses", (req, res) => {
  const login_id = req.query.LoginID;

  db.query(
    "SELECT Takes.sLogin_ID, Takes.CRN, Course.Course_ID, Course_Info.Course_Name, Course.Term, Takes.Grade FROM Takes INNER JOIN Course ON Course.CRN = Takes.CRN INNER JOIN Course_Info ON Course_Info.Course_ID = Course.Course_ID WHERE sLogin_ID = ?;",
    [login_id],

    (err, result) => {
      if (err) {
        console.log("ERROR");
        console.log(err);
      } else {
        console.log(result);
        res.send(result);
      }
    }
  )
});

app.get("/getSpecificCourse", (req, res) => {
  const depID = req.query.depID;

  db.query(
    "SELECT Course.CRN, Course.Course_ID, Course_Info.Course_Name, Course.Term FROM Course INNER JOIN Course_Info ON Course.Course_ID = Course_Info.Course_ID WHERE Course_Info.Department_ID = ?;",
    [depID],

    (err, result) => {
      if (err) {
        console.log("ERROR");
        console.log(err);
      } else {
        console.log(result);
        res.send(result);
      }
    }
  )
});

app.get("/getAllCourses", (req, res) => {
  const login_id = req.query.LoginID;

  db.query(
    "SELECT Course.CRN, Course.Course_ID, Course_Info.Course_Name, Course.Term FROM Course INNER JOIN Course_Info ON Course.Course_ID = Course_Info.Course_ID ORDER BY CRN;",
    [login_id],

    (err, result) => {
      if (err) {
        console.log("ERROR");
        console.log(err);
      } else {
        console.log(result);
        res.send(result);
      }
    }
  )
})

app.get("/getOwnGPA", (req, res) => {
  const login_id = req.query.LoginID;

  db.query(
    "SELECT OverallGPA FROM StudentGPA where Login_ID = ?;",
    [login_id],

    (err, result) => {
      if (err) {
        console.log("ERROR");
        console.log(err);
      } else {
        console.log(result);
        res.send(result);
      }
    }
  )
});

//slow to update whenever passing in requires two time clicks before updating value?
app.get("/col", (req, res) => {
  var table = req.query.table;

  console.log(table);
  db.query(
    "SELECT `COLUMN_NAME` FROM `INFORMATION_SCHEMA`.`COLUMNS` WHERE `TABLE_SCHEMA` = 'StuHub' AND `TABLE_NAME` = ? ;",
    [table],

    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        delete table; // tried to force delete in order to update instant
        res.send(result);
      }
    }
  );

});

app.get("/query", (req, res) => {
  var eventKey = req.query.eventKey;
  let sqlQueries = ["SELECT * FROM Student WHERE NOT EXISTS (SELECT * FROM StudentGPA WHERE StudentGPA.Login_ID = Student.sLogin_ID)", "SELECT u.* FROM User AS u NATURAL JOIN( SELECT fLogin_ID AS Login_ID, COUNT(sLogin_ID) AS numberofStudents FROM Advises GROUP BY fLogin_ID HAVING COUNT(sLogin_ID) >= 1 ORDER BY numberofStudents DESC LIMIT 1) AS k", "SELECT t.Grade, COUNT(DISTINCT sLogin_ID) AS number_per_student_grade FROM Takes as t WHERE t.Grade IS NOT NULL GROUP BY t.Grade HAVING number_per_student_grade= (SELECT COUNT(DISTINCT sLogin_ID) FROM Student)", "SELECT sLogin_ID FROM Takes WHERE Grade IS NULL GROUP BY sLogin_ID HAVING COUNT(*) >=1", "SELECT User.*, OverallGPA FROM StudentGPA NATURAL JOIN User WHERE OverallGPA = (SELECT MAX(OverallGPA) FROM StudentGPA)", "SELECT c_info.* FROM Course_Info as c_info NATURAL JOIN	(SELECT Course_ID, COUNT(*) AS perCourseID FROM Takes NATURAL JOIN Course GROUP BY Course_ID HAVING perCourseID= (SELECT COUNT(*) FROM Student)) AS pertable"];
  eventKey = eventKey - 1;
  console.log(eventKey);
  console.log(sqlQueries[0]);

  db.query(sqlQueries[eventKey],

    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        delete table; // tried to force delete in order to update instant
        res.send(result);
      }
    }
  );

});

app.get("/studentUser", (req, res) => {

  db.query("SELECT * FROM StuHub.StudentUsers ",

    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        res.send(result);
      }
    }
  );
});



app.delete("http://localhost:3001/delete/:id", (req, res) => {
  const id = req.params.id;
  console.log("running this" + id);
  db.query("DELETE FROM User WHERE Login_ID = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});


app.get("/getPersonalinfo", (req, res) => {
  const login_id = req.query.LoginID;

  db.query(
    "SELECT Students_No_Password.*, Student.Address, User.role FROM Students_No_Password INNER JOIN Student ON Student.sLogin_ID = Students_No_Password.Login_ID INNER JOIN User ON User.Login_ID = Students_No_Password.Login_ID WHERE Students_No_Password.Login_ID = ?;",
    [login_id],

    (err, result) => {
      if (err) {
        console.log("ERROR");
        console.log(err);
      } else {
        console.log(result);
        res.send(result);
      }
    }
  )
});
app.put("/update", (req, res) => {
  const value = req.body.updateval;
  const table = req.body.table;
  const conditioncol = req.body.conditioncol;
  const conditionvalue = req.body.conditionValue;
  const column = req.body.col;
  console.log("this is running");
  db.query(
    "UPDATE ?? SET ?? = ? WHERE ?? = ?",
    [table, column, value, conditioncol, conditionvalue],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
app.get("/login", (req, res) => {
  console.log(req.session);
  if (req.session.user) {
    // console.log("I'm in here ");

    res.send({ loggedIn: true, user: req.session.user });
  } else {
    // console.log("I'm in here ");
    // res.send({ loggedIn: true, user: "" });
    console.log("err")
  }
});

app.get("/getStudentinfo", (req, res) => {
  // console.log(req.session.user);
  console.log("inhere")
  console.log(req.session.user)

  res.send(req.session.user)

});



// used to login from front to backend
app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log(username);

  // console.log(username);
  db.query(
    "SELECT * FROM User WHERE  Login_ID= ?;",
    [username],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      // console.log(result[0].Password);
      if (result.length > 0) {
        bcrypt.compare(password, result[0].Password, (error, response) => {

          // console.log(response.session);
          if (response) {
            req.session.user = result;
            console.log(req.session.user);
            res.send(result);
          } else {
            res.send({ message: "Wrong username/password combination!" });
          }
        });
      } else {
        console.log("user don't exist");
        res.send({ message: "User doesn't exist" });
      }
    }
  );
});

app.listen(3001, () => {
  console.log("running server");
});
