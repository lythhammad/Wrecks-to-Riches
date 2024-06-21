const express = require('express')
const {
    createCarinfo,
    getCarinfo,
    getSingleCarinfo,
    deleteCarinfo,
    updateCarinfo,
} = require('../controllers/carinfoController')

const router = express.Router()

//GET all carinfo
router.get('/', getCarinfo)

//GET a single carinfo
router.get('/:id', getSingleCarinfo)

//POST a new carinfo
router.post('/', createCarinfo)

//DELETE a carinfo
router.delete('/:id', deleteCarinfo)

//UPDATE a carinfo
router.patch('/:id', updateCarinfo)

module.exports = router