import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./Components/Navbar/Nav";
import "./App.css";
import Footer from "./Components/Footer";
import Blank from "./Components/404/Blank";
import { useState } from "react";
import Login from "./Components/Login/Login";
import SugnUp from "./Components/SignUp/SugnUp";
import SubHead from "./Components/SubHead";
import PopUp from "./Components/Modale/PopUp";


function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  }
  const handleShow = () => {
    setShow(true);
  }

  const [boxType, setBoaxType] = useState('hide');
  const showLogin = () => {
      setBoaxType('login');
  }    

  const showSignUp = () => {
      setBoaxType('signUp');
  }
  const hideAll = () => {
    setBoaxType('hide');
  }

  return (
    <>
      <Nav showL={showLogin} showS={showSignUp} hideA={hideAll} Hshow={handleShow} />
      <SubHead/>
      <div className="container mt-lg-5 mb-lg-5">
        <div className="row d-flex justify-content-center align-middle">
          {boxType === 'login' ? <Login /> :null }
          {boxType === 'signUp' && <SugnUp />  }
          {boxType==='hide' && <Blank/> }
        <PopUp Svar={show} Hclose={handleClose} />
        </div>
      </div>

     
      <Footer />
    </>
  );
}

export default App;
