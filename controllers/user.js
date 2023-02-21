require("dotenv").config();
const { User } = require("../models");
const { hash, compare } = require("../helpers/bcrypt");
const authSecret = process.env.AUTH_SECRET;

class UserController {
  static async createUser(req, res) {
    try {
      const { username, password, secret } = req.body;

      if (!username || !password) {
        throw {
          conroller: "user",
          function: "create",
          type: "empty field",
        };
      }

      let access = "regular";

      if (secret === authSecret) {
        access = "super";
      }

      await User.create({
        username,
        password,
        access,
      });

      res.status(201).json({
        message: "User created",
      });
    } catch (err) {
      console.log(err);
    }
  }

  static async deactiveUser(req, res) {
    try {
      const { id } = req.params;
      const { secret } = req.body;

      if (secret !== authSecret || !secret) {
        throw {
          conroller: "user",
          function: "deactive",
          type: "unauthorized",
        };
      }

      const data = User.findByPk(id);

      if (!data) {
        throw {
          conroller: "user",
          function: "deactive",
          type: "not found",
        };
      }

      const request = await User.update({
        access: "deactivated",
      },
      {
        where: {
          id,
        },
      });

      res.status(200).json({
        message: "User deactivated",
      });
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = UserController;
