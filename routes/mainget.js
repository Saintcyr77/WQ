const express = require("express");
const router = express.Router();
const getController = require('../controller/mainGetController');
router.get("/",getController.getQuote)

module.exports  = router