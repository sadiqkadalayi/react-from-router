import React from 'react'
import Cred from './Cred'

function SubHead({subC,head}) {
  return (
    <div className="container mt-3 mb-5">
        <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-lg-1 mt-sm-2">
            <div className='text-center'>
                {head==='login' && <h1>Login</h1>}
                {head==='signup' && <h1>Sign up</h1>}
                {head==='blank' && <h1>Welcome to the React JS</h1>}
                {head==='todo' && <h1>To-Do-App</h1>}
                {subC==='running' && <Cred Sm={subC && 'Your credential will not be shared to anyone. End-To-End Encrypted'} />}
                {subC==='run' &&  <Cred Sm={subC && 'if you are new here, Please go through the Sign Up Button to create a new account...' } />}
                {subC==='notRun' &&  <Cred Sm={subC && 'Please follow the above Buttons...' } />}
                {subC==='toDo' &&  <Cred Sm={subC && 'Enjoy with your To Do List' } />}
               
            </div>
        </div>
        </div>
    </div>
  )
}

export default SubHead