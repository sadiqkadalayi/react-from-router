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
import Single from "./Components/Contries/SepeatePage/Single";
import { createContext } from "react";
import RootsLayout from "./Components/RootsLayout";
import { dataContext } from "./Components/Context/DataContext";


// export const dataContext = createContext(null);

function App() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  // const [boxType, setBoaxType] = useState("hide");
  const [cred, setCred] = useState("notFound");
  const [Head, setHead] = useState("notFound");
  const [selected , setSelected] = useState(null);


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
    <dataContext.Provider value={{selected, setSelected, handleShow, showLogin,showSignUp,hideAll,toDoHandle,countiesFetch, cred, Head}}>
      <BrowserRouter>      
      <div className="container">
        <div className="row d-flex justify-content-center align-middle">
            <Routes>
                <Route path="/*" element={<RootsLayout/>}>
                      <Route path="Login" element={<Login/>}></Route> 
                      <Route path="SugnUp" element={<SugnUp/>}></Route> 
                      <Route index element={<Blank/>}></Route> 
                      <Route path="Todo" element={<Todo/>}></Route> 
                      <Route path="Contires" element={<Contires/>}></Route> 
                      <Route path="Single/:code" element={<Single/>}></Route> 
                      <Route path="*" element={<NotFound />}></Route> 
                </Route>
            </Routes>
        </div>
      </div>
      </BrowserRouter>
    </dataContext.Provider>
    <PopUp Svar={show} Hclose={handleClose}><Blank/></PopUp>
    </>
  );
}

export default App;
