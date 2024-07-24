// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/clean" element={<CleanPage />} />
          <Route path="/plant" element={<PlantPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} /> */}
        </Routes>
        {/* <FooterPage /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
