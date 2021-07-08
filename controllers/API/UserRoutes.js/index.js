const router = require("express").Router();
const { User } = require("../../../models");
const { generateToken } = require("../../../utils/utils");

router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });

        if (!user) {
            res.status(404).json({ message: "Invalid Email or Password" });
            return;
        }

        const isValidPass = await user.comparePassword(req.body.password);

        if (!isValidPass) {
            res.status(401).json({ message: "Incorrect email or password" });
            return;
        }

        res.status(200).json({
            id: user._id,
            name: user.username,
            isAdmin: user.isAdmin,
            token: generateToken(user)
        });
    } catch (e) {
        res.status(500).json(e);
        console.log(e);
    }
});

router.post("/register", async (req, res) => {
    try {
        const user = new User({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });

        const savedUser = await user.save(function (err, doc) {
            if (err) {
                res.status(400).json(err);
            } else {
                res.status(201).json({
                    id: user._id,
                    name: user.username,
                    email: user.email,
                    isAdmin: user.isAdmin,
                    token: generateToken(user)
                });
            }
        });
    } catch (e) {
        res.status(500).json(e);
    }
});

module.exports = router;