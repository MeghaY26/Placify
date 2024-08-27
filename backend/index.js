import express from "express";
import bodyParser from "body-parser";
import mysql from "mysql";
import cors from "cors";
import twilio from 'twilio';
import dotenv from 'dotenv';

const PORT=process.env.PORT||3001;

const app=express();

app.use(express.json());
dotenv.config()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(cors());

var student_email;

var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'1234',
    port:'3306',
    database:'mini_project'
});

var student_email;
app.post("/signup",(req,res)=>{
    var bpname=req.body["name"];  
    var bpusn=req.body["usn"];    
    var bpbranch="CS";  
    var bpemail=req.body["email"];
    var bpphno=req.body["phno"];
    var bppwd=req.body["password"];
    
    con.query('Select email from student where email=?',[bpemail],function(err,result){
        if(err) {throw err;}
        else{
            console.log(result);
            if(result.length>0){
                res.send("user with same email id exists");
            }else{
                con.query('INSERT INTO student(name,usn,branch,email,phno,password) VALUES (?,?,?,?,?,?)',[bpname,bpusn,bpbranch,bpemail,bpphno,bppwd],function(err,result){
                    if(err) {throw err;}
                    else{
                    student_email=bpemail;
                    res.send("User successfully registered")
                  }
                    console.log("record inserted");
                });
            }
        }
    })
   
});

app.post("/login", async (req, res) => {
    var bpemail = req.body["email"];
    var bpupwd = req.body["password"];
    //console.log(bpemail);
    con.query('select email from student where email =? ', [bpemail], function (error, result) {
        if (error) { throw error; }
        else {
            console.log(result);
            if (result.length > 0) {

                con.query('select password from student where email=? and password=?', [bpemail, bpupwd], function (error, result) {
                    if (error) { throw error; }
                    else {

                        if (result.length > 0) {
                            student_email = bpemail;
                            console.log(student_email);
                            res.json({ message: "Success", success: true });
                        } else {
                            res.json({ message: "Incorrect Password", success: false });
                        }
                    }
                });
            } else {
                res.json({ message: "Incorrect email id", success: false });
            }
        }

    });
});

app.post('/companydetails', (req, res) => {
    const {
      companyName,
      designation,
      package: packageValue,
      location,
      applyBefore,
      stream,
      maxBacklogs,
      description
    } = req.body;
  
    const query = `
      INSERT INTO companydetails (companyName, designation, package, location, applyBefore, stream, maxBacklogs, description)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
  
    con.query(query, [companyName, designation, packageValue, location, applyBefore, stream, maxBacklogs, description], (err, result) => {
      if (err) {
        console.error('Database error:', err);  // Log the full error
        return res.status(500).json({ error: err.message });
      }
      res.status(201).json({ message: 'Company details added successfully!' });
      console.log(result);
    });
  });
  
  app.get('/api/jobs', (req, res) => {
    const query = 'SELECT * FROM companydetails';
    
    con.query(query, (err, results) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ error: err.message });
      }
      res.status(200).json(results);
    });
  });

  app.get('/api/jobs/:id', (req, res) => {
    const jobId = req.params.id;
    console.log(jobId);
    const query = 'SELECT * FROM companydetails WHERE id = ?';
  
    con.query(query, [jobId], (err, results) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ error: err.message });
      }
      console.log(results);
      res.status(200).json(results);
    });
  });

  app.post('/applications', (req, res) => {
    var company_id = req.body;
    const data = company_id ;

// Using dot notation
const company_ID = data.company_Id;

  console.log(company_ID);
    console.log(student_email);
        // Customer exists, add item to their cart
        con.query('INSERT INTO applications (student_email, company_ID) VALUES (?, ?)', [student_email, company_ID], (err) => {
          if (err) {
            console.error('Error adding company to applications:', err);
            res.status(500).send('Internal Server Error');
          } else {
           res.status(200).send('Application added to database');
            
          }
        });
  });

app.post("/adminlogin", (req, res) => {
    var buseremail=req.body["suseremail"];
    var bpassword=req.body["spassword"];
     console.log(buseremail);
    con.query('SELECT email FROM admin WHERE email = ?', [buseremail], (error, result) => {
      if (error) throw error;
  
      if (result.length > 0) {
        con.query('SELECT password FROM admin WHERE email = ? AND password = ?', [buseremail, bpassword], (error, result) => {
          if (error) throw error;
          
          if (result.length > 0) {
           
            res.json({ message: "Success", success: true });
          } else {
            res.json({ message: "Incorrect Password", success: false });
          }
        });
      } else {
        res.json({ message: "Incorrect email id", success: false });
      }
    });
  });

dotenv.config();

app.post('/send-sms', async (req, res) => {
    const { phoneNumber, message } = req.body;
    const client = new twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

    try {
        const sms = await client.messages.create({
            body: message,
            from: '+16508974995',
            to: phoneNumber
        });
        res.json({ message: 'SMS sent successfully', sid: sms.sid });
    } catch (err) {
        console.error('Error sending SMS:', err);
        res.status(500).json({ message: 'Failed to send SMS' });
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });