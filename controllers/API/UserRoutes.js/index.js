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

module.exports = router;