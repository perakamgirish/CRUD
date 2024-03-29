const express = require("express");

const router = express.Router();
const name = require("../models/name");

router.get("/", async (req, res) => {
  try {
    const names = await name.find();
    res.json(names);
  } catch (err) {
    res.send("Error, check your line of code" + err);
  }
});

router.post('/', async(req,res) => {
    const name = new name({
        name: req.body.name,
        age: req.body.age,
        graduated: req.body.graduated
    })

    try {
        const n1 = await name.save()
        res.json(n1)
    }catch(err){
        res.send('Error check the line of code at name.js' + err)
    }

})

module.exports = router;
