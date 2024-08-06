import passwordHash from "password-hash";
import User from "../DataBase/Schema/user.schema.js";
import { CustomError } from "../middlewares/custom.error.js";
import jwt from "jsonwebtoken";

export default class UserController {
  async userSignup(req, res, next) {
    try {
      const {
        teacher,
        email,
        name,
        phone,
        classes,
        subject,
        address,
        password,
      } = req.body;

      // Basic validation
      if (!name || !email || !phone || !password) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      // Hash password
      const hashedPassword = passwordHash.generate(String(password));

      // Create new user
      const newUser = new User({
        name,
        phone,
        email,
        classes,
        subject,
        address,
        password: hashedPassword,
        teacher,
      });

      // Save user to database
      await newUser.save();

      // Respond with success message
      return res.status(201).json({ message: "Signup successful!" });
    } catch (err) {
      console.error("Error:", err.message);

      // Handle duplicate email errors or other issues
      if (err.code === 11000) {
        // MongoDB duplicate key error code
        return res.status(409).json({ message: "Email already in use" });
      }

      return res.status(500).json({ message: "Server error" });
    }
  }
  async updateSignup(req, res, next) {
    try {
      const {
        teacher,
        email,
        name,
        phone,
        classes,
        subject,
        address,
        password,
      } = req.body;

      // Basic validation
      if (!name || !email || !phone) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      // Find the user by email
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      // Update user fields
      user.name = name;
      user.phone = phone;
      user.classes = classes;
      user.subject = subject;
      user.address = address;
      user.teacher = teacher;

      // If password is provided, hash it
      if (password) {
        const hashedPassword = await passwordHash.generate(String(password));
        user.password = hashedPassword;
      }

      // Save updated user to the database
      await user.save();

      // Respond with success message
      return res.status(200).json({ message: "Profile update successful!" });
    } catch (err) {
      console.error("Error:", err.message);
      return res.status(500).json({ message: "Server error" });
    }
  }
  async userSignin(req, res, next) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: "User does not exist!" });
      }

      const isPasswordValid = passwordHash.verify(
        String(password),
        user.password
      );
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid password!" });
      }

      const token = jwt.sign(
        { id: user._id, email: user.email, teacher: user.teacher },
        process.env.JWT_KEY,
        { expiresIn: "1y" }
      );

      const cookieOptions = {
        maxAge: 60 * 60 * 24 * 7 * 7 * 1000,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      };

      const { password: pass, ...userWithoutPassword } = user._doc;

      return res
        .status(200)
        .cookie("SessionID", token, cookieOptions)
        .json(userWithoutPassword);
    } catch (err) {
      console.error("Error:", err.message);
      next(new CustomError(err.message, 500));
    }
  }
  async userSignout(req, res, next) {
    try {
      // Clear the authentication cookie
      res
        .clearCookie("SessionID", {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "Strict",
        })
        .status(200)
        .json({ message: "Signout successful" });

      // Optionally, you could also clear user data from the server-side session or other storage if needed.
    } catch (err) {
      console.error("Error during signout:", err.message);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}
