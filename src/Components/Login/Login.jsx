import React from "react";
import "./Login.css";
import Input from "../Inputs/Input";
import Button from "../Buttons/Button";

function Login({children}) {

    return (
      
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
      {children}
      <div className="mt-lg-2 shadow rounded-3 bg-success-subtle">
          
            <div className="inputs-fileds p-5">
              <form action="" className='container-fluid'>
                <Input labelName={'Username'}/>
                <Input labelName={'Password'} type={'password'}/>
                <Button label={'Login'} />
                </form>
            </div>
      </div>
    </div>
  );
}

export default Login;
