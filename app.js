const express = require('express')
const cors = require('cors')
require('./db/config')
const app = express();
const user = require('./db/model')
app.use(express.json())
app.use(cors())

// sign up API
app.post('/Register', async (req, res) => {
    let data = new user(req.body)
    if (data.age > 18) {
        let result = await data.save()
        res.send("User registered successfully")
        res.send(result)
    }
    else {
        res.send("You must be 18 years or older to register")
    }
})

// login API
app.post("/login", async (req, res) => {
    console.log(req.body)
    if (req.body.password && req.body.email) {
        console.log("bsbsbsb")
        let data = await user.findOne(req.body)
        if (data) {
            res.send(data)
        }
        else {
            res.send("result not found")
        }
    }
    else {
        res.send({ result: 'No user and password found' })
    }

})
app.get('/list', async (req, res) => {
    let data = await user.find()
    res.send(data)



})

app.put('/update/:_id', async (req, res) => {
    console.log("data is updated")
    let data = await user.updateOne(
        req.params
        , {
            $set: req.body
        }
    )
    res.send(data)
})
app.listen(2000, console.log('server is running on port 2000'))


