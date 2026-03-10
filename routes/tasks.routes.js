const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
    res.send("Axiom tasks route is working");

})

module.exports = router;