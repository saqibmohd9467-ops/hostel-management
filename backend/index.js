
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
// CREATE - Assign room to renter
app.post("/rentroom", async (req, res) => {
  try {
    const {
      id,          // room id
      rn,          // renter name
      mobile,
      adh,
      rnadrs,
      pp,
      paidrent     // paid rent from frontend
    } = req.body;

    // Check room exists
    const roomdata = await room.findById(id);
    if (!roomdata) {
      return res.status(404).json({ msg: "No room found" });
    }

    const totalRent = Number(roomdata.roomrent);
    const paidAmount = Number(paidrent);

    // Validation
    if (paidAmount > totalRent) {
      return res.status(400).json({ msg: "Paid rent cannot exceed total rent" });
    }

    const pendingrent = totalRent - paidAmount;

    let rentstatus = pendingrent === 0 ? "paid" : "pending";

    // Create rent entry
    const rm = new rentroom({
      roomid: id,
      roomno: roomdata.roomno,
      rentername: rn,
      paidroomrent: paidAmount,
      totalrent: totalRent,
      pendingrent: pendingrent,
      renteradhar: adh,
      rentstatus: rentstatus,
      renterno: mobile,
      renteraddress: rnadrs,
      renterpurpose: pp,
    });

    await rm.save();

    res.status(201).json({ msg: "Rent Room added successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// READ - Get all rent records
app.get("/rentroom", async (req, res) => {
  try {
    const data = await rentroom.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// READ - Get single rent record by id
app.get("/rentroom/:id", async (req, res) => {
  try {
    const data = await rentroom.findById(req.params.id);

    if (!data) {
      return res.status(404).json({ msg: "Record not found" });
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



// UPDATE - Update rent record
app.put("/updaterentroom/:id", async (req, res) => {
  try {
    const {
      rn,
      mobile,
      adh,
      rnadrs,
      pp,
      paidrent
    } = req.body;

    const existing = await rentroom.findById(req.params.id);
    if (!existing) {
      return res.status(404).json({ msg: "Record not found" });
    }

    const totalRent = Number(existing.totalrent);
    const paidAmount = Number(paidrent);

    if (paidAmount > totalRent) {
      return res.status(400).json({ msg: "Paid rent cannot exceed total rent" });
    }

    const pendingrent = totalRent - paidAmount;
    const rentstatus = pendingrent === 0 ? "paid" : "pending";

    const updated = await rentroom.findByIdAndUpdate(
      req.params.id,
      {
        rentername: rn,
        renterno: mobile,
        renteradhar: adh,
        renteraddress: rnadrs,
        renterpurpose: pp,
        paidroomrent: paidAmount,
        pendingrent: pendingrent,
        rentstatus: rentstatus,
      },
      { new: true }
    );

    res.status(200).json({ msg: "Rent Room updated", data: updated });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE - Remove rent record
app.delete("/rentroom/:id", async (req, res) => {
  try {
    const deleted = await rentroom.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ msg: "Record not found" });
    }

    res.status(200).json({ msg: "Rent record deleted successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



// ------------------------------ Room APIs ------------------------------

// creating new room 
app.post("/room", async (req, res) => {
    const existingRoom = await room.findOne({ roomno: req.body.rm })
    if (existingRoom) return res.json({ msg: `${req.body.rm} already exists` })
    const rm = new room({
        roomno: req.body.rm,
        roomtype: req.body.rt,
        roomstatus: req.body.rtt,
        roomrent: req.body.rmst
    })
    await rm.save();
    res.json({ msg: "Room added" })
})

// getting all rooms
app.get("/room", async (req, res) => {
    const rrr = await room.find();
    res.json(rrr)
})

// getting single room 
app.get("/room/:id", async (req, res) => {
    const rm = await room.findById(req.params.id);
    res.json(rm)
})

// deleting room 
app.delete("/room/:id", async (req, res) => {
    await room.findByIdAndDelete(req.params.id)
    res.json({ msg: "Room Deleted" })
})
// updating room 
app.put("/room/:id", async (req, res) => {
    await room.findByIdAndUpdate(req.params.id, {
        roomno:  req.body.roomno,
        roomtype: req.body.roomtype,
        roomstatus: req.body.roomstatus,
        roomrent: req.body.roomrent
    })
    res.json({ msg: "Room Updated" })
})


// ------------------ APIs Roomtype  ------------------
// creating roomtype api 
app.post("/roomtype", async (req, res) => {
    const existingRoomType = await roomtype.findOne({ roomtype: req.body.rt })
    if (existingRoomType) return res.json({ msg: `${req.body.rt} already exists` })
    const rm = new roomtype({
        roomtype: req.body.rt
    })
    await rm.save();
    res.json({ msg: "RoomType added" })
})
// updating roomtype api 
app.put("/roomtype/:id", async (req, res) => {
    await roomtype.findByIdAndUpdate(req.params.id, {
        roomtype: req.body.rt,
    })
    res.json({ msg: "Roomtype Updated" })
})

// getting all roomtypes 
app.get("/roomtype", async (req, res) => {
    const rt = await roomtype.find();
    res.json(rt)
})

// getting single roomtypes
app.get("/roomtype/:id", async (req, res) => {
    const rm = await roomtype.findById(req.params.id);
    res.json(rm)
})

// deleting roomtype api 
app.delete("/roomtype/:id", async (req, res) => {
    await roomtype.findByIdAndDelete(req.params.id)
    res.json({ msg: "Roomtype Deleted" })
})



app.listen(PORT, () => {
    console.log("Server running on port" + PORT)
})