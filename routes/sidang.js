const express = require("express");
const router = express.Router();
const SidangController = require('../controllers/sidang')
const authentication = require('../middlewares/authentication')

router.use(authentication)
router.post('/', SidangController.addSidang)
router.get('/', SidangController.getAllSidang)

module.exports = router