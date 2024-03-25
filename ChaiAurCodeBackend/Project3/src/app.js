import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}));
app.use(express.json({limit:"16kb"}));
//There might be sometimes when you want to parse the incoming data from the client side in the form of JSON.
//For that, you can use the express.json() middleware.
app.use(express.urlencoded({extended:true,limit:"16kb"}));
//The express.urlencoded() middleware is used to parse the incoming requests with urlencoded payloads.
app.use(express.static('public'));
app.use(cookieParser());


export default app;