const router = require("express").Router()
const path = require("path")


router.get('/notes', (req, res) => {
res.sendFile(path.join(__dirname, '../public/notes.html'))
}
);

 //routr for homepage
 router.get('*', (req,res) =>
 res.sendFile(path.join(__dirname, '../public/index.html '))
 );


module.exports = router