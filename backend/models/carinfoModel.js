const mongoose = require('mongoose')
const Schema = mongoose.Schema  

const carinfoSchema = new Schema({
    car_id: {
        type: String
    },
    year: {
        type: Number,
        required: true
    },
    make: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    mileage: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Carinfo', carinfoSchema)