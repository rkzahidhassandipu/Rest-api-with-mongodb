const express = require("express");
const {getAllUsers, updateUser, deleteUser, createUser, getOnUser} = require("../controllers/users.controller");
const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getOnUser);
router.post("/", createUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router