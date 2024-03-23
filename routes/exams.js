const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.send('Lista e provimeve')
})

router.get('/new',(req,res)=>{
    res.send('Regjistrimi i nje provimi')
})

router.route('/:id').get(
    (req,res) => {
        res.send(`Provimi me id-ne ${req.params.id}`)
    }
).put(
    (req,res) => {
        res.send(`Modifikimi i provimit me id-ne ${req.params.id}`)
    }
).delete(
    (req,res) => {
        res.send(`Fshierja e provimit me id-ne ${req.params.id}`)
    }
)

module.exports = router