const { User } = require("../models");

const users = [
    {
        "first_name": "Nathan",
        "last_name": "Peek",
        "username": "Fayl",
        "password": "testing",
        "email": "nmp14fsu@gmail.com",
        "isAdmin": true
    },
    {
        "first_name": "Raquel",
        "last_name": "Diaz",
        "username": "RDiaz",
        "password": "testing",
        "email": "test2@mail.com"
    },
    {
        "first_name": "User",
        "last_name": "Three",
        "username": "Test3",
        "password": "testing",
        "email": "test3@mail.com"
    },
    {
        "first_name": "User",
        "last_name": "Four",
        "username": "Test4",
        "password": "testing",
        "email": "test4@mail.com"
    }
]

const seedUsers = async () => {
    await User.deleteMany({});

    for (const obj of users) {
        const newUser = new User({ ...obj });

        await newUser.save();
    }
}

module.exports = seedUsers;