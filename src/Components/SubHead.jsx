import React from 'react'
import Cred from './Cred'

function SubHead({subC}) {
  return (
    <div className="container">
        <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-lg-5 mt-sm-5">
            <div className='text-center'>
                <h1>Login & SignUp </h1>
                {subC==='running' && <Cred Sm={subC && 'Your credential will not be shared to anyone. End-To-End Encrypted'} />}
                {subC==='run' &&  <Cred Sm={subC && 'if you are new here, Please go through the Sign Up Button to create a new account...' } />}
                {subC==='notRun' &&  <Cred Sm={subC && 'Please follow the above Buttons...' } />}
                {subC==='toDo' &&  <Cred Sm={subC && 'Enjoy with your To Do List' } />}
                <hr />
            </div>
        </div>
        </div>
    </div>
  )
}

export default SubHead