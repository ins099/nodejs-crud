const express = require('express');
const router = express.Router();
const Post = require('../models/Post');



router.post('/',async (req,res)=>{

    const post = new Post({
        title:req.body.title,
        description:req.body.description
    });

    try{
        const savePost = await post.save();
        res.json(savePost)
    }
    catch(err){
        console.log(err)
    }
})

router.get('/',async (req,res)=>{

    try{
        const posts = await Post.find()
        res.json(posts)
    }
    catch(err){
        console.log(err)
    }

})

router.get('/:postId',async (req,res)=>{

    try{
        const post = await Post.findById(req.params.postId);
        res.json(post)
    }
    catch(err){
        console.log(err)
    }

})

router.delete('/:postId',async (req,res)=>{

    try{
        const post = await Post.remove({_id : req.params.postId});
        res.json(post)
    }
    catch(err){
        console.log(err)
    }

})

router.patch('/:postId',async (req,res)=>{

    try{
        const post = await Post.updateOne({_id : req.params.postId},{$set:{title: req.body.title}});
        res.json(post)
    }
    catch(err){
        console.log(err)
    }

})


module.exports = router;