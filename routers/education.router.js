import express from "express";
const router = express.Router();
import EducationController from "../controllers/education.controller.js";
// const educationcontroller = new EducationController();
router.post("/admission", EducationController.admission);
router.get("/class/:classId", EducationController.classContent);
router.post("/result", EducationController.addResult);
router.get("/result", EducationController.result);
router.get("/home", EducationController.homeContent);

export default router;
