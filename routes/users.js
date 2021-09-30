const express = require('express');
const router = express.Router();

// all rotues in here are starting with users

const users = [
    {
        firstName : "Shashwat",
        lastName : "Gandhi",
        age : "20"
    },
    {
        firstName : "Jane",
        lastName : "Doe",
        age : "24"
    }
]


router.get('/', (req,res)=> {
    console.log(users);
    res.send(users);

});


router.post('/',(req,res) => {
    res.send('hello');
})
module.exports = router;
