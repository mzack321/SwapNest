
// const express = require ('express');
// const router = express.Router();
// const Message = require('../models/Message');

// // Save Message Route

// router.post("/save-meseage", async (req, res )=>{
//     try{
// const message = await Message.create(req.body);
// res.json(message)

//     }catch(error){
//     res.status(500).json(error)
// };
// });

// // send and Receive Message Route 

// router.get('/messages/:sender/:rceiver', async (req, res)=>{
//     try{
// const messages = await Message.find({
//     $or:[
//         {
//             senderId:req.params.sender,
//             receiverId:req.params.receiver,
//         },{
//             senderId:req.params.receiver,
//             receiverId:req.params.sender
//         }
//     ]
// });
// res.json.messages()
//     }catch(error){
//         res.status(500).json(error)
//     }
// });

// module.exports = router;

