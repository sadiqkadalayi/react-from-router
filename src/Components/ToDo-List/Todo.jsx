import React, { useState } from 'react'
import Input from '../Inputs/Input'
import Button from '../Buttons/Button'
import ToDoList from './ToDoList'


function Todo() {

    const [toDoInput , setTodoInput]  = useState('hai');
    const [toDoListArray, setToDoListArray] = useState([]);
    const handleInput = (e) => {
        setTodoInput(e.target.value);
        console.log(toDoInput);
    }
    const toDoAdd = () => {
        setToDoListArray([toDoInput])
        setTodoInput('');
    }

  return (
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
    <div className="mt-lg-2 shadow rounded-3 bg-success-subtle">
      
          <div className="inputs-fileds p-5">
            <form action="" className='container-fluid'>
              <Input labelName={'Task'} toDoHandle={handleInput} value={toDoInput}/>
              <Button label={'Add'} handle={toDoAdd} />
              {toDoListArray.map((ele,ind)=><ToDoList label={ele} num={ind} key={ind} />)}
             
              </form>
          </div>
    </div>
  </div>
  )
}

export default Todo
