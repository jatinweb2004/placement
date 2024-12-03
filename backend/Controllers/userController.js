import dotenv from "dotenv";
dotenv.config({path:"config/.env"});

import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import nodemailer from 'nodemailer';
import User from "../Models/userSchema.js";
import { google } from 'googleapis';
import Student from "../Models/studentSchema.js"

// import path from 'path';
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
// import fs from 'fs';

const saltRounds = 10;
const oAuthClient = new google.auth.OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET, process.env.REDIRECT_URI)
oAuthClient.setCredentials({ refresh_token: process.env.REFRESH_TOKEN })

// const oAuthClientDrive = new google.auth.OAuth2(process.env.DRIVE_CLIENT_ID, process.env.DRIVE_CLIENT_SECRET, process.env.REDIRECT_URI);
// oAuthClientDrive.setCredentials({ refresh_token: process.env.DRIVE_REFRESH_TOKEN })

// const drive = google.drive({
//     version :'v2',
//     auth : oAuthClientDrive
// })

// const uploadFile = async (req,res) => {
//     try{
//         console.log("hiiii")
//         console.log(req.body)
//         const response = await drive.files.create({
//             requestBody : {
//                 name : req.headers,
//                 mimeType:'image/jpg/jpeg/png/pdf'
//             },
//             media : {
//             mimeType : 'image/jpg/jpeg/png/pdf',
//             body : fs.createWriteStream(path.join(__dirname, '../temp/'))
//         }});
//         console.log(response)
//     }
//     catch (err) {
//         res.status(500).json({"msg":"error while uploading"})
//         console.log(err)
//     }
// }

const sendFeedbackEmail = async(email, body, subject) => {

    try {
        const accessToken = await oAuthClient.getAccessToken();
        var transporter = nodemailer.createTransport({        // function to send mail to register user
            service: 'gmail',     // mail sending platform
            auth: {
                type: 'OAuth2',
                user: 'ankitgurwan083@gmail.com',    // Sender Mail Address
                pass: process.env.EMAIL_PASSWORD,   // Sender Mail Password
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET,
                refreshToken: process.env.REFRESH_TOKEN,
                accessToken: accessToken
            }
        });

        var mailOptions = {
            from: 'ankitgurwan083@gmail.com',             // Sender Email
            to: 'a.gurwan@iitg.ac.in',                             // Email requested by user
            subject: subject,         // Subject Of The Mail
            text: `User with email ${email} has complained :\n${body}`,
            //Custom Mail Message With the link to confirm email address (The link contain the user id and token corresponding)
        };

     


        transporter.sendMail(mailOptions, function (error, info, req, res) {  // Reciving Conformation Of Sent Mail
            if (error) {
                console.log({ error });
            } else {
                console.log("Success");
            }
        });

    } catch (err) {
        console.log("err = ", err);
    }
}

export const register = async (req,res) => {
    try{
        const emailcheck = req.body.email;
        const found = await User.findOne({userId : emailcheck});

        if(found)
        {
            return res.status(401).json({ msg : "User already exists."});
        }
        
        const {
            email,
            password
        } = req.body;


    bcrypt.hash(password, saltRounds , async (err, hash) => {            // Helps to hash password 

        if (err) {
            res.status(400).json({ msg: "Error" });       // If any error then send error
        }
    
        const newUser = new User({
            userId : email,
            password : hash,
            isAuth : true
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser); 
        }
    )
    }
    catch(err) {
        res.status(500).json({msg : err.message});
    }
}

export const login = async (req,res) => {
    try{
        const { email , password } = req.body;
        const user = await User.findOne ( {email:email});

        if(!user) return res.status(400).json({ msg : "User doesn't exist"});

        const ismatch = await bcrypt.compare(password,user.password);

        if(!ismatch) return res.status(401).json({ msg : "Invalid credentials"});

        const token = jwt.sign({ id : user._id}, process.env.JWT_SECRET);

        delete user.password;
        res.status(200).json({ token , user});
    }
    catch(err) {
        res.status(500).json({msg : err.message});
    }
}

const newStudent = async (req, res) => {

    const isValid = await Student.findOne({ email: req.body.userEmail });

    if(!isValid){
        await Student.create({
        name: req.body.userName,
        email: req.body.userEmail,
        rollNum: req.body.userRoll,
        is_banned: false,   
    })}
        res.status(200).json({ msg: "Success" });
    }


const sendFeedback = async (req, res) => {
    const email = req.body.email;
    const header = req.body.header;
    const body = req.body.body;

    
    sendFeedbackEmail(email, body, header);
    res.status(200).json({msg:"Email Sent SuccessFully"})
    
}

export { sendFeedback , newStudent};