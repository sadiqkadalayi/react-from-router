import React from 'react'

function Button({ label, handle, btnClass,toggle,targetArea }) {
  return (
    <>
      <button 
      type='submit' 
      onClick={handle}
      
      className={`x-5 btn ${btnClass ?? 'btn-primary'} shadow mt-1`} 
      data-bs-toggle={toggle ?? ''} 
      data-bs-target={targetArea ?? ''}
      aria-current="page" 
      href="#">
      {label ?? "Click me"}
      </button>
    </>
  )
}

export default Button