import express from 'express';
import { addFile, addFolder , getFile, getFolder, getUploads , removeFolder ,removeFile , removeUploads, uploadFile} from '../Controllers/postController.js';

const postRouter = express.Router();

postRouter.post('/post/folder',addFolder);
postRouter.post('/post/file',addFile);
postRouter.post('/post/upload',uploadFile);

postRouter.get('/post/folder',getFolder);
postRouter.get('/post/file',getFile);
postRouter.get('/post/upload',getUploads);

postRouter.delete('/post/folder',removeFolder);
postRouter.delete('/post/file',removeFile);
postRouter.delete('/post/upload',removeUploads);

export default postRouter;