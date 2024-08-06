import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Class from "./pages/Class";
import SubClass from "./pages/SubClass";
import Admission from "./pages/Admission";
import { Contact } from "./pages/Contact";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import { FooterPage } from "./pages/FooterPage";
import Result from "./pages/Result";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Signout from "./components/Signout";
import PrivateRoute from "./components/PrivateRoute";
import OnlyTeacherRoute from "./components/OnlyTeacherRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/class" element={<Class />} />
          <Route path="/class/:classId" element={<SubClass />} />
          <Route path="/about" element={<About />} />
          <Route path="/result" element={<Result />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signout" element={<Signout />} />

          {/* Private routes */}
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admission" element={<Admission />} />
          </Route>

          {/* Teacher-only routes */}
          <Route element={<OnlyTeacherRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

          {/* Uncomment if needed */}
          {/* <Route path="/achivement" element={<Achivement />} /> */}
        </Routes>
        <FooterPage />
      </BrowserRouter>
    </>
  );
}

export default App;
