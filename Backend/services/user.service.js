const userModel = require('../models/user.model');


module.exports.createUser = async ({
    name, email, password
}) => {
    if(!name || !email || !password) {
        throw new Error('All fields are required');
    }
    const user = userModel.create({
        name,
        email,
        password
    })

    return user;
}