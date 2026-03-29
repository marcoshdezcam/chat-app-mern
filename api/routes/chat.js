const router = require('express').Router();
const Chat = require('../models/Chat');

// Create a new chat
router.post('/', async (req, res) => {
  try {
    const { sender, receiver } = req.body;
    const newChat = new Chat({
      users: [sender, receiver]
    });

    res.status(200).json(newChat);
  } catch (error) {
    res.status(500).json(err);
  }
});

// Get all chats of a user
router.get('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    // Find all the chats where the user ID is equal to the sender or receiver ID stored in the user´s array
    const allConversations = Chat.find({
      
    });

    res.status(200).json(allConversations);
  } catch (error) {
    res.status(500).json(err);
  }
});

// Get the chat between two users
router.get('/find/:firstUserId/:secondUserId', async (req, res) => {
  try {
    const { firstUserId, secondUserId } = req.params;

    // Find the chat where the user´s array in the chat object contains both the first and second user ID
    const concersations = Chat.find({});


    res.status(200).json(conversations);
  } catch (error) {
    res.status(500).json(err);
  }
});

module.exports = router;