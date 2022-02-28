const express = require('express');
const router = express.Router();
const argon2 = require('argon2');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const verifyToken = require('../middleware/auth');

// Get
router.get('/', verifyToken, async (req, res) => {
	try {
		const user = await User.findById(req.userId).select('-password')
		if (!user)
			return res.json({ success: false, message: 'User not found' })
		res.json({ success: true, user })
	} catch (error) {
		console.log(error)
		res.json({ success: false, message: 'Internal server error' })
	}
})


// Regiter
router.post('/register', async (req, res)=> {
    const {username, password} = req.body

    if(!username || !password) {
        res.json({
            success: false,
            message: 'Missing username or password'
        })
    }
    try {
        const user = await User.findOne({username})
        if(user) {
            res.json({
                success: false,
                message: 'Username already taken'
            })
        }

        const hashedPassword = await argon2.hash(password)

        const newUser = new User({username, password: hashedPassword})
        await newUser.save()

        // return Token

        const accessToken = jwt.sign({userId: newUser._id}, process.env.ACCESS_TOKEN_SECRET)
        res.json({
            success: true,
            message:'User created successfully',
            accessToken
        })
    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            message: 'Internal server error'
        })
    }
})

// Login
router.post('/login', async (req, res) => {
    const {username, password} = req.body

    if(!username || !password) {
        res.json({
            success: false,
            message: 'Missing username or password'
        })
    }
    try {
        const user = await User.findOne({username})
        if(!user) {
            res.json({
                success: false,
                message: 'Incorrect username or password'
            })
        }

        const passwordValid = await argon2.verify(user.password, password)
        if(!passwordValid) {
            res.json({
                success: false,
                message: 'Incorrect username or password'
            })            
        }

        const accessToken = jwt.sign({userId: user._id}, process.env.ACCESS_TOKEN_SECRET)
        res.json({
            success: true,
            message: 'User logged successfully',
            accessToken
        })

    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            message: 'Internal server error'
        })
    }

})

module.exports = router