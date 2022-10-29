const express = require("express")
const router = express.Router()

router.get('/', (req, res) => {        // This is the one endpoint
    res.json({
        a : 1,
        b : "auth"
    });
    // res.send('Hello World!')
})

module.exports = router;