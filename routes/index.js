require("dotenv").config();
const authSecret = process.env.AUTH_SECRET;
const express = require("express");
const router = express.Router();
const userRouter = require("./user");
const sidangRouter = require("./sidang");
const dataRouter = require("./data");
const Controller = require("../controllers/index");
const jwt = require("jsonwebtoken");
const { User } = require("../models");

router.get("/", Controller.serverStatus);

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      throw {
        name: "empty",
      };
    }

    const data = await User.findOne({
      where: {
        username,
      },
    });

    if (!data) {
      throw {
        name: "not found",
      };
    }

    if (password !== data.password) {
      throw {
        name: "invalid",
      };
    }

    const token = jwt.sign(data.id, authSecret);

    res.status(200).json({ access_token: token });
  } catch (err) {
    console.log(err);
  }
});

router.use("/user", userRouter);
router.use("/sidang", sidangRouter);
router.use("/data", dataRouter);

module.exports = router;
