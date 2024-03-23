const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
   
    res.send('Lista e kurseve...')
})

router.get('/new',(req,res)=>{
    //res.send('Insertimi i kursit...')
    res.render('createCourse.ejs',{name : "Admin1"}) //locals
})
router.route('/:id').get(
    (req,res) =>{
        let id = req.params.id
        res.send(`Kursi me id-ne ${id}`)
    }
).put(
    (req,res)=>{
        let id = req.params.id
        res.send(`Modifikimi i kursit me id-ne ${id}`)
    }
).delete(
    (req,res)=>{
        let id = req.params.id
        res.send(`Fshierja e kursit me id-ne ${id}`)
    }
)
module.exports = router