import React from 'react'

function Input({labelName,type}) {
  return (
    <>
        <label for="exampleInputEmail1" class="form-label mt-2">{labelName ?? "Undefined"}</label>
        <input type={type ?? 'text'} className='form-control' required/>
    </>
  )
}

export default Input