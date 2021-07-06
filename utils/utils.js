const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateToken = user => {
    return jwt.sign({
        id: user._id,
        name: user.username,
        email: user.email,
        isAdmin: user.isAdmin
    }, process.env.JWT_SECRET || "DasterdlySecrets", {
        expiresIn: "30d"
    });
}

module.exports = { generateToken };