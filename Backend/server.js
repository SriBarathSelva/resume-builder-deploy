const express = require('express');
const connectDb = require('./config/db');
const authRoutes = require('./route/authRoutes');
const cors = require('cors');  
require('dotenv').config();
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;


connectDb();

app.use(cors());  
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));


app.use('/auth', authRoutes);

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static('resume_builder/dist'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'resume_builder/dist/index.html'))
    })
}



app.listen(port, () => console.log(`Server listening on ${port}`));
