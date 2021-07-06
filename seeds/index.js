const mongoose = require("mongoose");
const seedUsers = require("./user-seeds");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/MoodsDB", { useNewUrlParser: true, useUnifiedTopology: true });

const seedAll = async () => {
    try {
        await seedUsers();
        console.log("Users seeded \n_______\n");

        process.exit(0);
    } catch (e) {
        console.log(e);
    }
};

seedAll();