const mongoose = require('mongoose');

const connectDb = async () => {
    try{
        const con = await mongoose.connect(process.env.Mongo_URI);
        if(con)
            console.log("Mongo success");
        else
            console.log("Mongo unsuccessful");
    }
    catch(error) {
        console.log("something went wrong");
        process.exit();
    }
}
module.exports = connectDb;