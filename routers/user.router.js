import express from "express";
const router = express.Router();
import userController from "../controllers/user.controller.js";
const usercontroller = new userController();
router.get("/test", (req, res) => res.send("API is working!"));
router.post("/signup", usercontroller.userSignup);
router.post("/signin", usercontroller.userSignin);
router.post("/profileupdate", usercontroller.updateSignup);
router.post("/signout", usercontroller.userSignout);

export default router;
