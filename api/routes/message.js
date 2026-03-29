const router = require('express').Router();
const Message = require('../models/Message');
const Chat = require('../models/Chat');

// Create a new message
router.post('/', async (req, res) => {
    try {
        // Create a new chat object from the sender and receiver IDs passed in the request body.
        const { senderId, receiverId } = req.body;
        const newMessage = new Message({
            chatId,
            senderId,
            receiverId
        });

        // Save the chat in the database, and respond with the chat object and a 200 status code.
        const message = await newMessage.save();
        res.status(200).json(message);
    } catch (error) {
        res.status(500).json(err);
    }
});

// Get all the messages associated with a particular chat ID
router.get('/:userId', async (req, res) => {
    try {
        const userChats = await Chat.find({

        })
    } catch (error) {
        res.status(500).json(err);
    }
});



module.exports = router;