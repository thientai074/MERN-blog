const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth');
const Post = require('../models/Post')

// Create Post
router.post('/',verifyToken, async (req, res) => {
    const {title, description, imgUrl} = req.body

    try {
        const newPost = new Post(
            {
                title, 
                description, 
                imgUrl,
                user: req.userId
            })
        await newPost.save()
        res.json({
            success: true,
            message: 'Post created successfully',
            post: newPost
        })
    } catch(error) {
        console.log(error)
        res.json({
            success: false,
            message: 'Internal server error'
        })
    }
})

// get all posts
router.get('/', verifyToken, async (req, res) => {
    try {
        const posts = await Post.find({user: req.userId}).populate('user', ['username'])
        res.json({
            success: true,
            posts
        })
    } catch(error) {
        console.log(error)
        res.json({
            success: false,
            message: 'Internal server error'
        })
    }
})

// Update post
router.put('/:id', verifyToken, async (req, res)=> {
    const { title, description, imgUrl} = req.body

    try {
        let updatedPost = {title, description, imgUrl}

        const postUpdateCondition = { _id: req.params.id, user: req.userId}

        updatedPost = await Post.findOneAndUpdate(postUpdateCondition, updatedPost, {new: true})

        if(!updatedPost) {
            res.json({
                success: false,
                message: 'Post not found or user not authorised'
            })
        }
        res.json({
            success: true,
            message: 'Post updated successfully',
            post: updatedPost
        })
    } catch(error) {
        console.log(error)
        res.json({
            success: false,
            message: 'Internal server error'
        })
    }
})

// delete Post
router.delete('/:id', verifyToken, async (req, res)=> {
    try{
        const postDeleteCondition = { _id: req.params.id, user: req.userId}

        const deletedPost = await Post.findOneAndDelete(postDeleteCondition)

        if(!deletedPost) {
            res.json({
                success: false,
                message: 'Post not found or user not authorised'
            })
        }
        res.json({
            success: true,
            message: 'Post deleted successfully',
            post: deletedPost
        })
    } catch(error) {
        console.log(error)
        res.json({
            success: false,
            message: 'Internal server error'
        })        
    }
})

// get post
router.get('/:id',verifyToken, async (req, res)=> {
    try {
        const postGetCondition = { _id: req.params.id, user: req.userId}

        const post = await Post.findOne(postGetCondition)
        if(!post){
            res.json({
                success: false,
                message: 'Post not found or user not authorised'
            })
        }
        res.json({
            success: true,
            post,
            message: 'Post geted successfully'
        })
    } catch(error) {
        console.log(error)
        res.json({
            success: false,
            message: 'Internal server error'
        })       
    }
})

module.exports = router