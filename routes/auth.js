const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const auth = require('../middleware/auth')
const { check, validationResult } = require('express-validator')

const User = require('../models/User')
//@route    GET api/auth
//@desc     Get logged in user
//@access   Private
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password')
    res.json(user)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

//@route    POST api/auth
//@desc     Auth user & get token
//@access   Public
router.post(
  '/',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
  ],
  async (req, res) => {
    // check for errors
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    // Destructure
    const { email, password } = req.body

    try {
      let user = await User.findOne({ email })
      // check if email exist
      if (!user) {
        return res.status(400).json({ msg: 'Email does not exist' })
      }
      const isMatch = await bcrypt.compare(password, user.password)
      // check for valid password
      if (!isMatch) {
        return res.status(400).json({ msg: 'Invalid Password' })
      }
      // if match send token
      const payload = {
        user: {
          id: user.id,
        },
      }
      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        {
          expiresIn: 3600,
        },
        (err, token) => {
          if (err) throw err
          res.json({ token })
        }
      )
    } catch (err) {
      console.error(err.message)
      res.status(500).send('Server Error')
    }
  }
)

module.exports = router
