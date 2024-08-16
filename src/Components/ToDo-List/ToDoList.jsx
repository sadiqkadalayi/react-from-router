import React from 'react'
import Button from '../Buttons/Button'


function ToDoList({item, index, makeItDone,dtItem}) {
    return (
        <div>
            <div className='inputs-fileds ps-5 pb-5 border'>
                <div className="col-5 mt-2">
                    <p className={`${item.done ? 'text-danger' : ''}`}>{index+1} - {item.label}</p>
                    <hr />
                </div>
                <div className="col-6">
                    <button onClick={()=>makeItDone(index)} className='x-5 btn shadow btn-success' shadow>Action</button>
                    &nbsp;&nbsp;
                    <button onClick={()=>dtItem(index)} className='x-5 btn shadow btn-danger' shadow>Delete</button>
                </div>
            </div>
        </div>

    )
}

export default ToDoList
