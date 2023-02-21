const { Data } = require("../models");

class DataController {
  static async createData(req, res) {
    try {
      const {
        name,
        citizenId,
        birthplace,
        birthdate,
        address,
        bloodtype,
        phone,
        email,
        occupation,
        SidangId,
      } = req.body;
      const { id } = req.user;

      if (
        !name ||
        !citizenId ||
        !birthplace ||
        !birthdate ||
        !address ||
        !bloodtype ||
        !phone ||
        !email ||
        !occupation ||
        !SidangId
      ) {
        throw {
          message: "empty field",
        };
      }

      const request = await Data.create({
        name,
        citizenId,
        birthplace,
        birthdate,
        address,
        bloodtype,
        phone,
        email,
        occupation,
        SidangId,
        UserId : id
      });

      res.status(201).json({
        message: 'Data created'
      })
    } catch (err) {
      console.log(err);
    }
  }
}
