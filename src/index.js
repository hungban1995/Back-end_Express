import express from "express";
import * as dotenv from "dotenv";
import createError from 'http-errors'
import routers from '../src/router/index.js'
import parseConfig from "./configs/parser.config.js";
const app = express();
dotenv.config();
const port = process.env.PORT || 8080;
//parser
parseConfig(app)
//router
routers.userRouter(app)



app.use((req, res, next) => {
next(createError(404) )
});

app.use((err,req,res,next)=>{
    res.status(err.status||500);
    res.json({
        status: err.status||500,
        message:err.message
    })
})
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
