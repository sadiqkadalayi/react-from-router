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
import Todo from "./Components/ToDo-List/Todo";
import Contires from "./Components/Contries/Contires";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./Components/Not Found/NotFound";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  // const [boxType, setBoaxType] = useState("hide");
  const [cred, setCred] = useState("notRun");
  const [Head, setHead] = useState("blank");

  const showLogin = () => {
    // setBoaxType("login");
    setCred("run");
    setHead("login");
  };
  const showSignUp = () => {
    // setBoaxType("signUp");
    setCred("running");
    setHead("signup");
  };
  const hideAll = () => {
    // setBoaxType("hide");
    setCred("notRun");
    setHead("blank");
  };

  const toDoHandle = () => {
    // setBoaxType("toDoShow");
    setCred("toDo");
    setHead("todo");
  };
  const countiesFetch = () => {
    // setBoaxType("countries");
    setCred("contry");
    setHead("API");
  };

  return (
    <>
      <BrowserRouter>
      <Nav Hshow={handleShow} showL={showLogin} showS={showSignUp} hideA={hideAll} toDo={toDoHandle} contry={countiesFetch}/>
      <SubHead subC={cred} head={Head} />
      <div className="container">
        <div className="row d-flex justify-content-center align-middle">
            <Routes>
             <Route path="/Login" element={<Login/>}></Route> 
             <Route path="/SugnUp" element={<SugnUp/>}></Route> 
             <Route path="/" element={<Blank/>}></Route> 
             <Route path="/Todo" element={<Todo/>}></Route> 
             <Route path="/Contires" element={<Contires/>}></Route> 
             <Route path="*" element={<NotFound/>}></Route> 
            </Routes>
        </div>
      </div>
      <Footer />
      </BrowserRouter>
      <PopUp Svar={show} Hclose={handleClose}><Blank/></PopUp>
    </>
  );
}

export default App;
