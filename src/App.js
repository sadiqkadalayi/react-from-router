import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import Blank from "./Components/404/Blank";
import { useEffect, useState } from "react";
import Login from "./Components/Login/Login";
import SugnUp from "./Components/SignUp/SugnUp";

import PopUp from "./Components/Modale/PopUp";
import Todo from "./Components/ToDo-List/Todo";
import Contires from "./Components/Contries/Contires";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./Components/Not Found/NotFound";
import Single from "./Components/Contries/SepeatePage/Single";

import RootsLayout from "./Components/RootsLayout";
import { dataContext } from "./Components/Context/DataContext";
import { useDispatch, useSelector } from "react-redux";
import { setHead, setCred } from "./Components/redux/dataSlice";



// export const dataContext = createContext(null);

function App() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  // const [boxType, setBoaxType] = useState("hide");
  // const [cred, setCred] = useState("notFound");
  // const [Head, setHead] = useState("notFound");
  const dispatch = useDispatch()
  // const {count} = useSelector((store)=>store.data);

  
  const [selected , setSelected] = useState(null);


  const showLogin = () => {
    // setBoaxType("login");
    // setCred("run");
    dispatch(setCred('run'))
    dispatch(setHead('login'))
    // setHead("login");
    // dispatch(setCount('sadiq'))
  };
  const showSignUp = () => {
    // setBoaxType("signUp");
    // setCred("running");
    dispatch(setCred('running'))
    dispatch(setHead('signup'))
    // setHead("signup");
  };
  const hideAll = () => {
    // setBoaxType("hide");
    // setCred("notRun");
    dispatch(setCred('notRun'))
    dispatch(setHead('blank'))
    // setHead("blank");
  };

  const toDoHandle = () => {
    // setBoaxType("toDoShow");
    // setCred("toDo");
    dispatch(setCred('toDo'))
    dispatch(setHead('todo'))
    // setHead("todo");
  };
  const countiesFetch = () => {
    // setBoaxType("countries");
    // setCred("contry");
    dispatch(setCred('contry'))
    dispatch(setHead('API'))
    // setHead("API");
  };

  return (
    <>
    <dataContext.Provider value={{selected, setSelected, handleShow, showLogin,showSignUp,hideAll,toDoHandle,countiesFetch}}>
      <BrowserRouter>      
      <div className="container">
        <div className="row d-flex justify-content-center align-middle">
            <Routes>
                {/* <Route path="/Login" element={<Login/>}></Route>  */} 
                { /* if you don't need the navebar and footer on login page, take the login compnt from roots layout*/}
                <Route path="/*" element={<RootsLayout/>}>
                      <Route path="Login" element={<Login></Login>}></Route> 
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
