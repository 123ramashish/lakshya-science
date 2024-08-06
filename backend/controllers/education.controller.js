import Admission from "../DataBase/Schema/admission.schema.js";
import nodemailer from "nodemailer";
import Result from "../DataBase/Schema/result.schema.js";
import User from "../DataBase/Schema/user.schema.js";

export default class EducationController {
  static async admission(req, res, next) {
    try {
      const {
        name,
        fathername,
        mothername,
        classes,
        phone,
        DOB,
        address,
        gender,
      } = req.body;

      const newAdmission = new Admission({
        name,
        fathername,
        mothername,
        classes,
        phone,
        DOB,
        address,
        gender,
      });

      await newAdmission.save();

      return res.status(201).json({ message: "Admission successful!" });
    } catch (err) {
      console.error("Error:", err.message);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  static async contact(req, res) {
    const { name, email, subject, message } = req.body;

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "your-email@gmail.com",
        pass: "your-email-password",
      },
    });

    let mailOptions = {
      from: email,
      to: "ramashish62127@gmail.com",
      subject: subject,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong> ${message}</p>`,
    };

    try {
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error.message);
      return res.status(500).json({ message: "Failed to send email." });
    }
  }

  static async addResult(req, res, next) {
    try {
      const { name, className, result } = req.body;

      // You might want to add validation here

      const newResult = new Result({
        name,
        className,
        result,
      });

      await newResult.save();

      return res.status(201).json({ message: "Result added successfully!" });
    } catch (err) {
      console.error("Error:", err.message);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  static async result(req, res, next) {
    try {
      const results = await Result.find({});

      // Extract numeric part from className and sort
      results.sort((a, b) => {
        const getClassNumber = (className) =>
          parseInt(className.match(/\d+/)[0], 10);
        return getClassNumber(b.className) - getClassNumber(a.className);
      });

      return res.status(200).send(results);
    } catch (err) {
      console.error("Error:", err.message);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
  static async classContent(req, res, next) {
    try {
      const { classId } = req.params; // Extract the classId from params
      console.log(classId);
      // Fetch teachers
      const teachers = await User.find({
        teacher: true,
        classes: { $in: [classId] },
      });

      // Fetch students in the specified class
      const students = await User.find({
        teacher: false,
        classes: { $in: [classId] }, // Check if classId is in the classes array
      });

      // Fetch distinct subjects related to the specified class
      const subjects = await User.find({
        teacher: false,
        classes: { $in: [classId] },
      }).distinct("subject");

      // Fetch results and sort by class number (assuming className includes numeric part)
      const results = await Result.find({ className: `class ${classId}` });

      return res.status(200).json({ students, teachers, subjects, results });
    } catch (err) {
      console.error("Error:", err.message);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
  static async homeContent(req, res, next) {
    try {
      // Fetch teachers
      const teachers = await User.find({
        teacher: true,
      });

      // Fetch students in the specified class
      const students = await User.find({
        teacher: false,
      });

      // Fetch results and sort by class number (assuming className includes numeric part)
      const results = await Result.find({});

      return res.status(200).json({ students, teachers, results });
    } catch (err) {
      console.error("Error:", err.message);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
