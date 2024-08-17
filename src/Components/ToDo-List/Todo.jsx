import React, { useEffect, useState } from 'react'
import ToDoList from './ToDoList'
import Input from '../Inputs/Input';
import Button from '../Buttons/Button';
import AlertBox from '../Alert Box/AlertBox';


function Todo() {

    const [toDoInput, setTodoInput] = useState('React JS');
    const [toDoListArray, setToDoListArray] = useState([]);
    const [alertBox, setAlertBox] = useState(false);

    const handleInput = (e) => {
        const EValue = e.target.value;
        setTodoInput(EValue);
        console.log(toDoInput);
    }

    const toDoAdd = () => {
        if (toDoInput === '') {
            setAlertBox(true)
        } else {
            setAlertBox(false)
            setToDoListArray([...toDoListArray, { label: toDoInput, done: false }])
            setTodoInput('');
        }
    }

    const makeItDone = (index) => {
        const temp = [...toDoListArray];
        temp[index].done = true;
        setToDoListArray(temp);
    }
    const deleteItem = (index) => {
        const temp = [...toDoListArray]; 
        temp.shift(index);
        setToDoListArray(temp)
    }
    console.log(toDoListArray);

    return (
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
            <div className="mt-lg-2 shadow rounded-3 bg-success-subtle">
                {alertBox && <AlertBox  />}
                <div className='row'>
                    <form>
                        <div className="inputs-fileds p-5">
                            <Input labelName={'To Do List'} toDoHandle={handleInput} value={toDoInput} />
                            <Button handle={toDoAdd} label={'Add'} />
                        </div>
                    </form>
                </div>
                <div className='row'>
                    {
                        toDoListArray.map((ele, index) => <ToDoList item={ele} index={index} key={index} makeItDone={makeItDone} dtItem={deleteItem} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Todo
