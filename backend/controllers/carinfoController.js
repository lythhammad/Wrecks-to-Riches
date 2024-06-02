const Carinfo = require('../models/carinfoModel')

//GET all carinfo
const getCarinfo = async (req, res) => {
    const carinfo = await Carinfo.find({}).sort({createdAt: -1})
    res.status(200).json(carinfo)
}

//GET a single carinfo
const getSingleCarinfo = async (req, res) => {
    const {id} = req.params
    const carinfo = await Carinfo.findById(id)

    if (!carinfo) {
        return res.status(404).json({error: 'No such carinfo'})
    }
    res.status(200).json(carinfo)
}


//POST a new carinfo
const createCarinfo = async (req, res) => {
    const {car_id, year, make, model, mileage, price, description} = req.body

    //add doc to db
    try {
        const carinfo = await Carinfo.create({car_id, make, model, year, mileage, price, description})
        res.status(200).json(carinfo)
    } catch (error) {
        res.status(400).json({error: "can't create carinfo"})
    }
}

//DELETE a carinfo


//UPDATE a carinfo


module.exports = {
    getCarinfo,
    getSingleCarinfo,
    createCarinfo
}