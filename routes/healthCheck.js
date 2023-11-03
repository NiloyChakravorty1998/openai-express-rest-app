import express from 'express';
const healthCheckRouter = express.Router();

healthCheckRouter.get('/', (req, res) => {
    const status = {
        status: "UP and Running",
        time: Date()
    };
    res.send(`<Html><Body><Center><H4> Server is Up and Running on ${Date()}</H4></Center></Body></Html>`)
});

export default healthCheckRouter;
