import React from 'react'
import Button from '../Buttons/Button'

function ToDoList(label,num) {
  return (
    <div>
     
          <div className="inputs-fileds p-5">
            
              <p>{num}To do List {label}</p>
              <Button label={'Delete'} />
              <Button label={'Done'} />
                <hr />
          </div>
  
    </div>
  )
}

export default ToDoList
