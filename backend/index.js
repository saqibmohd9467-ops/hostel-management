
const express = require("express");
const app = express()
const cors = require("cors")
const PORT = 5000;

app.use(express.json())
app.use(cors());

// ==============importing models 
// const Student= require("./models/Student")
const room = require("./models/room")
const roomtype = require("./models/roomtype")
const rentroom = require("./models/rentroom")
const db = require("./config/db")
db()

//  ========= rent Room APIs========================= =======
app.post("/rentroom", async (req, res) => {

    const roomdata = await room.findOne({ _id: req.body.id })
    console.log(roomdata);
    if (!roomdata) return res.json({ msg: "No room found" })
    let rentstatus = "pending";
    if (Number(roomdata.roomrent) < Number(req.body.paidroomrent)) {
        rentstatus = "pending"
    }
    else if (Number(roomdata.roomrent) > Number(req.body.paidroomrent)) {
        return res.json({ msg: "Room rent is maximum" })
    }
    else {
        rentstatus = "paid"
    }
    const rm = new rentroom({
        roomid: req.body.id,
        roomno: roomdata.roomno,
        rentername: req.body.rn,
        paidroomrent: req.body.roomrent,
        renteradhar: req.body.adh,
        rentstatus: rentstatus,
        renterno: req.body.mobile,
        renteraddress: req.body.rnadrs,
        renterpurpose: req.body.pp,
    })
    await rm.save();
    res.json({ msg: "Rent Room added" })
})

app.get("/rentroom", async (req, res) => {
    const aa = await rentroom.find();
    res.json(aa)
})

app.get("/rentroom/:id", async (req, res) => {
    const rr = await rentroom.findById(req.params.id);
    res.json(rr)
})

app.delete("/rentroom/:id", async (req, res) => {
    await rentroom.findByIdAndDelete(req.params.id);
    res.json({ msg: "Rent Room Deleted" })
})

app.put("/rentroom/:id", async (req, res) => {
    await rentroom.findByIdAndUpdate(req.params.id, {
        roomid: req.body.id,
        rentername: req.body.rn,
        renteradhar: req.body.adh,
        renterno: req.body.nmbr,
        renteraddress: req.body.rnadrs,
        renterpurpose: req.body.pp
    })

    res.json({ msg: "Rent Room Updated" })
})

app.get("/rentroom/:id", async (req, res) => {
    const dd = await rentroom.findById(req.params.id)
    res.json(dd)
})


// ===================== Room APIs===============//

app.post("/room", async (req, res) => {
    const rm = new room({
        roomno: req.body.rm,
        roomtype: req.body.rt,
        roomstatus: req.body.rtt,
        roomrent: req.body.rmst
    })
    await rm.save();
    res.json({ msg: "Room added" })
})

app.get("/room", async (req, res) => {
    const rrr = await room.find();
    res.json(rrr)
})

app.get("/room/:id", async (req, res) => {
    const rm = await room.findById(req.params.id);
    res.json(rm)
})

app.delete("/room/:id", async (req, res) => {
    await room.findByIdAndDelete(req.params.id)
    res.json({ msg: "Record Deleted" })
})

app.put("/room/:id", async (req, res) => {
    await room.findByIdAndUpdate(req.params.id, {
        roomno: req.body.rm,
        roomtype: req.body.rt,
        // rentername:req.body.rnt,
        roomstatus: req.body.rtt,
        roomrent: req.body.rmst
    })
    res.json({ msg: "Record Updated" })
})


// ====APIs Roomtype=====

app.post("/roomtype", async (req, res) => {
    const rm = new roomtype({
        roomtype: req.body.rt
    })
    await rm.save();
    res.json({ msg: "Room added" })
})
app.put("/roomtype/:id", async (req, res) => {
    await roomtype.findByIdAndUpdate(req.params.id, {
        roomtype: req.body.rt,
    })
    res.json({ msg: "Record Updated" })
})


app.get("/roomtype", async (req, res) => {
    const rt = await roomtype.find();
    res.json(rt)
})

app.get("/roomtype/:id", async (req, res) => {
    const rm = await roomtype.findById(req.params.id);
    res.json(rm)
})

app.delete("/roomtype/:id", async (req, res) => {
    await roomtype.findByIdAndDelete(req.params.id)
    res.json({ msg: "Record Deleted" })
})



app.listen(PORT, () => {
    console.log("Server running on port" + PORT)
})