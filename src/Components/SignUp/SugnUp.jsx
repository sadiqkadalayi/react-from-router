import React from 'react'
import "./SignUp.css";
import Input from '../Inputs/Input';
import Button from '../Buttons/Button';
function SugnUp() {
  return (
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
      <div className="mt-lg-2 shadow rounded-3 bg-success-subtle">
        <div className='s-inputs-fileds p-5'>
            <Input labelName={'First Name:'}/>
            <Input labelName={'Last Name'}/>
            <Input labelName={'Mobile Number'}/>
            <Input labelName={'Username'}/>
            <Input labelName={'Password'} type={'password'}/>
            <Button label={'Sign Up'} btnClass={'btn-primary'}/>
        </div>
      </div>
    </div>
  )
}

export default SugnUp