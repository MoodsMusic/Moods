const router = require("express").Router();
const users = require("./UserRoutes.js");

router.use("/users", users);

module.exports = router;