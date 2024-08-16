import React from 'react'

function Input({labelName,type,toDoHandle,value}) {
  return (
    <>
        <label  for="exampleInputEmail1" class="form-label mt-2">{labelName ?? "Undefined"}</label>
        <input onChange={toDoHandle} value={value} type={type ?? 'text'} className='form-control' required/>
    </>
  )
}

export default Input