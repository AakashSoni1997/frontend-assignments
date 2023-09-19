const express = require("express")
const mongoose=require("mongoose")
const bodyParser=require("body-parser");
const router=require("./Controllers/CalendarController")
const cors=require("cors")
const app = express();
app.use(bodyParser.json());
app.use("/api/calendar",router)
app.use(cors({
    origin:"http://localhost:3000"
}))

mongoose.connect("mongodb+srv://sonipronaldo1996:calendar@calendar.wpxsdhc.mongodb.net/").then(()=>{
    console.log("db is  connected");
})

const dotenv=require("dotenv");
dotenv.config()




app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`);
})