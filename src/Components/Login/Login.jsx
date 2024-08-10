import React from "react";
import "./Login.css";
import Input from "../Inputs/Input";
import Button from "../Buttons/Button";

function Login() {

    return (
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
      <div className="L-main-cont mt-lg-2 shadow">
        
            <div className="inputs-fileds">
                <Input labelName={'Username'}/>
                <Input labelName={'Password'} type={'password'}/>
                <Button label={'Login'} />
            </div>
      </div>
    </div>
  );
}

export default Login;
