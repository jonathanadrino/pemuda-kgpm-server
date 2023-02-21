const express = require("express");
const router = express.Router();

router.get('/', async(req,res) => {
    try {
        res.status(200).json({
            message: 'route data'
        })
    } catch (err) {
        console.log(err);
    }
})

module.exports = router