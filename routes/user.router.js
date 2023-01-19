const router = require("express").Router()
const Users = require('../model/user.model')

// create new user
router.post("/regi", async (req, res) => {
      try {
            const newUser = await Users.create(req.body)
            res.status(200).json(newUser)
      } catch (err) {
            res.status(400).json({ msg: err.message })
      }
})

// get users
router.get("/", async (req, res) => {
      try {
            const users = await Users.find()
            res.status(200).json(users)
      } catch (err) {
            res.status(400).json({ msg: err.message })
      }
})

// get single user
router.get("/:id", async (req, res) => {
      try {
            const user = await Users.findOne({ _id: req.params.id })
            res.status(200).json(user)
      } catch (err) {
            res.status(400).json({ msg: err.message })
      }
})

// delete user
router.delete("/:id", async (req, res) => {
      try {
            const deletedUser = await Users.findByIdAndDelete(req.params.id)
            res.status(200).json(deletedUser)
      } catch (err) {
            res.status(400).json({ msg: err.message })

      }
})

// update users
router.patch("/:id", async (req, res) => {
      try {
            await Users.findByIdAndUpdate(req.params.id, req.body)

            const user = await Users.findById(req.params.id)
            res.status(200).json(user)
      } catch (err) {
            res.status(400).json({ msg: err.message })
      }
})


// login
router.post('/login', async (req, res) => {
      // Get the email and password from the request body
      const { email, password } = req.body;

      try {
            const user = await Users.findOne({ email: email });
            if (user.email === email && user.password === password) {
                  res.status(200).json(user)
            }
      } catch (err) {
            res.status(400).json(err.message)
      }
});


module.exports = router