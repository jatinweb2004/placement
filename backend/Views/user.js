import express from 'express';
import { login, register, sendFeedback,newStudent } from '../Controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/user/feedback',sendFeedback);
userRouter.post('/user/createuser',register);
userRouter.post('/user/login',login);
userRouter.post("/user/newstudent",newStudent);
// userRouter.post('/user/uploadfile',uploadFile);

export default userRouter;