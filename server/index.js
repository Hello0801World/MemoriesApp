import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';

const app = express();
dotenv.config();


app.use(bodyParser.json({limit : "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit : "30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes);
app.use('/users', userRoutes);

//const CONNECTION_URL = 'mongodb+srv://Shun0801:Shunktr318@cluster0.8kpvofg.mongodb.net/?retryWrites=true&w=majority';

mongoose.set("strictQuery", false);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log('server running on port: ', PORT)))
    .catch((error) => console.log(error));

//mongoose.set('useFindAndModify', false);