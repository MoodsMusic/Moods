const Mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = Mongoose.Schema;

const UserSchema = new Schema({
    first_name: {
        type: String,
        trim: true,
        required: "First name is required"
    },
    last_name: {
        type: String,
        trim: true,
        required: "Last name is required"
    },
    username: {
        type: String,
        trim: true,
        unique: true,
        required: "Username is required",
        validate: [({ length }) => length >= 4, "Username should be longer."]
    },
    password: {
        type: String,
        trim: true,
        required: "Password is required",
        validate: [({ length }) => length >= 6, "Password should be longer."]
    },
    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
        required: "Email is required"
    },
    registered_at: {
        type: Date,
        default: Date.now
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }
});

UserSchema.pre('save', async function (next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // Hash
    user.password = await bcrypt.hash(user.password, 10);
    next();
});

UserSchema.methods.comparePassword = function (candidatePassword) {
    return bcrypt.compareSync(candidatePassword, this.password);
};

UserSchema.plugin(uniqueValidator);

const User = Mongoose.model("User", UserSchema);

module.exports = User;