class Controller {
    static async serverStatus (req,res) {
        try {
            res.status(200).json({
                message: 'Server is running'
            })
        } catch (err) {
            res.status(500).json({
                message: 'Internal server error',
                err
            })
        }
    }
}

module.exports = Controller