const {Sidang} = require('../models')

class SidangController {
    static async addSidang(req,res){
        try {
            const {name,wilayah} = req.body

            if (!name || !wilayah) {
                throw {

                }
            }

            const request = await Sidang.create({
                name,
                wilayah,
            })

            res.status(200).json({
                message: 'Sidang created'
            })
        } catch (err) {
            console.log(err);
        }
    }

    static async getAllSidang(req,res) {
        try {
            const request = await Sidang.findAll()
            
            res.status(200).json(request)
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = SidangController