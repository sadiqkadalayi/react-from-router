import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Navbar/Nav'
import { dataContext } from './Context/DataContext';
import SubHead from './SubHead';
import Footer from './Footer';
import { useSelector } from 'react-redux';

function RootsLayout() {

    const {handleShow, showLogin,showSignUp,hideAll,toDoHandle,countiesFetch}=useContext(dataContext);
    const {cred,Head}=useSelector((store)=>store.data)
   

  return (
    <>
        <Nav Hshow={handleShow} showL={showLogin} showS={showSignUp} hideA={hideAll} toDo={toDoHandle} contry={countiesFetch}/>
        <SubHead subC={cred} head={Head} />
        <Outlet/>
        <Footer />
    
    </>
  )
}

export default RootsLayout