const express = require('express');
const router = express.Router();
const Post = require('../models/Post');


// get all the posts
router.get('/', (req,res)=> {
    Post.find((err,data) => {
        if(err) {
            res.json({error : err});
        }
        else {
            res.json(data);
        }
    });
});


router.post('/', (req,res) => {
    const post = new Post({
        title : req.body.title,
        body : req.body.body
    });
    post.save().then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json({message : err});
    })
});


// get a specific posts
router.get('/:postId', (req,res)=> {
    Post.findById(req.params.postId, (err,data) => {
        if(err) {
            res.json({error : err});
        }
        else {
            res.json(data);
        }
    });
})

// delete a post
router.delete('/:postId', (req,res) => {
    Post.findByIdAndDelete(req.params.postId, (err,data) => {
        if(err) {
            res.json({error : err});
        }
        else {
            res.json(data);
        }
    });
})


//update a post
router.patch('/:postId',(req,res) => {
    Post.updateOne({_id : req.params.postId},
        {$set: {title: req.body.title}},
        (err,data) => {
            if(err) {
                res.json({error : err});
            } 
            else {
                res.json(data);
            }
    })
})

module.exports = router;