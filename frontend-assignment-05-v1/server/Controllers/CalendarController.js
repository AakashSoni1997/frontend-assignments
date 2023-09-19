const router = require("express").Router();
const Event = require("../Modals/Event");
const moment = require("moment");


router.post("/create-events", async (req, res) => {
    const event = Event(req.body);
    await event.save();
    res.status(201).send({
        status: 1,
        message: "Event Create successfully",
        data: Date.now()
    })
})

router.get("/get-events", async (req, res) => {
    const events = await Event.find()
    res.status(200).send(events)
})

router.put("/update-events", async(req, res)=> {
    const doc=await Event.findByIdAndUpdate(req.body._id,req.body,{
        new:true
    })
    res.status(200).send(doc)
})
router.delete("/delete-event",async (req,res)=>{
    const doc= await Event.findByIdAndDelete(req.body._id)
    res.status(200).send(doc)
})


module.exports = router