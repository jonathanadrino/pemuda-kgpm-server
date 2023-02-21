"use strict";

const { Data, Sidang } = require("../models");
const { Op } = require("sequelize");

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
        UserId: id,
      });

      res.status(201).json({
        message: "Data created",
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        err,
      });
    }
  }

  static async getDataBySidangId(req, res) {
    try {
      const { SidangId } = req.params;

      const sidangCheck = await Sidang.findByPk(SidangId);

      if (!sidangCheck) {
        throw {
          message: "not found",
        };
      }

      const request = await Data.findAll({
        where: {
          SidangId,
        },
      });

      res.status(200).json({
        sidang: sidangCheck,
        data: request,
      });
    } catch (err) {
      res.status(500).json({
        err,
      });
    }
  }

  static async getDataByPk(req, res) {
    try {
      const { id } = req.params;

      const request = await Data.findByPk(id, { include: Sidang });

      if (!request) {
        throw {
          message: "not found",
        };
      }

      res.status(200).json(request);
    } catch (err) {
      res.status(500).json({
        err,
      });
    }
  }

  static async searchData(req, res) {
    try {
      console.log(req.query);

      let response = {};

      const nameRequest = await Data.findAll({
        where: {
          name: {
            [Op.substring]: req.query.value,
          },
        },
        order: [["name", "ASC"]],
      });

      response.name = nameRequest;

      const sidangRequest = await Sidang.findAll(
        {
          where: {
            name: {
              [Op.substring]: req.query.value,
            },
          },
          order: [["name", "ASC"]],
        },
        { include: Data }
      );

      response.sidang = sidangRequest;

      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      res.status(500).json({
        err,
      });
    }
  }

  static async updateData(req, res) {
    try {
      const { id } = req.params;
      const UserId = req.user.id;
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

      const previous = await Data.findByPk(id);

      if (!previous) {
        throw {
          message: "not found",
        };
      }
      const request = await Data.update(
        {
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
          UserId,
        },
        {
          where: {
            id,
          },
        }
      );

      res.status(201).json({
        message: "Data updated",
      });
    } catch (err) {
      res.status(500).json({
        err,
      });
    }
  }

  static async deleteData(req, res) {
    try {
      const { id } = req.params;

      const previous = await Data.findByPk(id);

      if (!previous) {
        throw {
          message: "not found",
        };
      }

      const request = await Data.destroy({
        where: {
          id,
        },
      });

      res.status(200).json({
        message: "Data deleted",
      });
    } catch (err) {
      res.status(500).json({ err });
    }
  }
}

module.exports = DataController;
