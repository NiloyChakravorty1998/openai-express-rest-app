import express  from "express";
import promptService from "../service/promptService.js";
const apiRequestRouter = express.Router();

apiRequestRouter.post('/',promptService);

export default apiRequestRouter;