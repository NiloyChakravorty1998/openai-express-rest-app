import express from "express";
import dotenv from "dotenv";
import healthCheckRouter from './routes/healthCheck.js';
import request from "./config/apiRequest.js";
import apiRequestRouter from "./routes/postRequest.js";

//INITIALIZING DOTENV TO READ CONFIG
dotenv.config();

// INITIALIZING SERVER PORT 
const port = process.env.PORT || 3000;

// INITIALIZING APP
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended : true }))

// ROUTERS
app.use('/api/health',healthCheckRouter);
app.use('/api/prompt',apiRequestRouter);

//APP STARTUP
app.listen(port,() => {
    console.log(`Server started at ${port} on ${Date()}`)
})