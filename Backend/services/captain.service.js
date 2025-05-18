const captainModel = require('../models/captain.model');


module.exports.createCaptain = async ({
    name, email, password,
    color, plate, capacity, vehicleType
}) =>{
    if(!name || !email || !password || !color || !plate || !capacity || !vehicleType) {
        throw new Error('All fields are required');
    }
    const captain = await captainModel.create({
        name,
        email,
        password,
        vehicle: {
            color,
            plate,
            capacity,
            vehicleType
        }
    })

    return captain;
}