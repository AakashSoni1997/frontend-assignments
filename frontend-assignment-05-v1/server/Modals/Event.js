const mongoose =require("mongoose");
const { route } = require("../Controllers/CalendarController");

const EventSchema=mongoose.Schema({
    eventTitle: {type:String},
    startDate: {
        "type": "string",
        "format": "date"
      },
    endDate: {
        "type": "string",
        "format": "date"
      },
    eventDescription: {type:String},
    eventpriority: {type:Number}
})

const Event=mongoose.model("Event",EventSchema)

module.exports=Event