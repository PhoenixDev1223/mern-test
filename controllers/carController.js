const Car = require('../models/Cars');

exports.addCar = async (req, res) => {
    try {
        const {
            name,
            price,
            model,
            sku
        } = req.body;

        const newCar = new Car({
            name: name,
            price: price,
            model: model,
            sku: sku
        });

        await newCar.save();
    
        const cars = await Car.find();

        res.status(200).json({
            success: true,
            cars: cars
        });
    } catch (err) {
        console.log(err);
    }
}

exports.carList = async (req, res) => {
    try {
        const cars = await Car.find();

        res.status(200).json({
            success: true,
            cars: cars
        });
    } catch (err) {
        console.log(err);
    }
}

exports.deleteCar = async (req, res) => {
    try {
        const { id } = req.params;
        await Car.findByIdAndDelete(id);
        const cars = await Car.find();
        res.status(200).json({
            success: true,
            cars: cars
        });
    } catch (err) {
        console.log(err);
    }
}