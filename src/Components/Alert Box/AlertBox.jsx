import React from 'react'
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function AlertBox({}) {
    const [show, setShow] = useState(true);
  
   
    if (show) {
        return (
            <Alert variant="danger" onClose={() => setShow(false) } dismissible>
                <Alert.Heading>Oh Sorry You got an error!</Alert.Heading>
                <p>
                    Please have to fill somthing on the given field
                    otherwise your To Do list <strong>Add</strong> Button will not functional...<br/><br/>
                    eg: Learn React JS
                </p>
            </Alert>
        )
    }
    // return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}

export default AlertBox
