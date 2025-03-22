const express = require('express');
const User = require('../models/User');
const router = express.Router();

//insert

router.post("/",async(req,res)=>{
    const {name,email,phone} = req.body;
    try{
        const user = new User({name,email,phone});
        await user.save();
        res.status(201).json(user);
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
}
);

//read users

router.get("/",async(req,res)=>{
    const users = await User.find();
    res.json(users);
});

//update

router.put("/:id",async(req,res)=>{
    try{
        const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(201).json(user);
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
}
);

//delete

router.delete("/:id",async(req,res)=>{
    try{
        await User.findByIdAndDelete(req.params.id);
        res.json({message:"User Deleted"})
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
}
);
module.exports = router ;