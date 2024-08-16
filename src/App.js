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


function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  }

  const [boxType, setBoaxType] = useState('hide');
  const [cred , setCred] = useState('notRun');

  const showLogin = () => {
      setBoaxType('login');
      setCred('run')  
  }    
  const showSignUp = () => {
      setBoaxType('signUp');
     setCred('running');
  }
  const hideAll = () => {
    setBoaxType('hide');
    setCred('notRun')
  }

 const toDoHandle = ()=>{
  setBoaxType('toDoShow')
  setCred('toDo')
 }

  return (
    <>
      <Nav showL={showLogin} showS={showSignUp} hideA={hideAll} Hshow={handleShow} toDo={toDoHandle} />
      <SubHead subC={cred}/>
      <div className="container mt-lg-5 mb-lg-5">
        <div className="row d-flex justify-content-center align-middle">
          {boxType === 'login' ? <Login /> :null }
          {boxType === 'signUp' && <SugnUp />  }
          {boxType==='hide' && <Blank/> }
          {boxType === 'toDoShow' && <Todo/>}
        <PopUp Svar={show} Hclose={handleClose}> <Blank modCont={''}/>  </PopUp> 
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
