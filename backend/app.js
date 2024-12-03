import express from 'express';
import cors from 'cors';

import dotenv from "dotenv";
dotenv.config({path:"config/.env"});

const app = express();

const corsOptions = {
    origin : `${process.env.FRONTENDURL}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
    allowedHeaders: ['Content-Type' , 'auth-token' , 'Accept' , 'Code' , 'Origin', 'Authorization'],
    credentials: true
}

app.use(cors(corsOptions)); 

app.use(express.json());

import userRouter from "./Views/user.js";
app.use(userRouter);

import postRouter from "./Views/post.js";
app.use(postRouter);


//mongoose connection
import connectDatabase from "./Config/database.js"
connectDatabase();


import authRouter from "./Views/msAuth.js"
app.use(authRouter);

const port = process.env.PORT || 4000;

app.listen(port, (req,res,err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("Server listening on PORT ", port);
    }
})
