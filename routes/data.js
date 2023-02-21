"use strict";

const express = require("express");
const router = express.Router();
const DataController = require("../controllers/data");
const authentication = require("../middlewares/authentication");

router.use(authentication);
router.post("/", DataController.createData);
router.get("/", DataController.searchData);
router.get("/:id", DataController.getDataByPk);
router.get("/sidang/:SidangId", DataController.getDataBySidangId);
router.put("/:id", DataController.updateData);
router.delete("/:id", DataController.deleteData);

module.exports = router;
