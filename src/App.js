import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./Components/Navbar/Nav";
import "./App.css";
import Footer from "./Components/Footer";
import Blank from "./Components/404/Blank";
import { useState } from "react";
import Login from "./Components/Login/Login";
import SugnUp from "./Components/SignUp/SugnUp";
import SubHead from "./Components/SubHead";

function App() {

  return (
    <>
      <Nav/>
      <SubHead/>
      <div className="container mt-lg-5 mb-lg-5">
        <div className="row d-flex justify-content-center align-middle">
          <Login />
          <SugnUp />
        </div>
      </div>

      {/* <Blank/> */}
      <Footer />
    </>
  );
}

export default App;
