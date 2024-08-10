import React from 'react'

function Button({label,handle,btnClass}) {
  return (
    <>
        <button onClick={handle} className={`x-5 btn ${btnClass ?? 'btn-primary'} shadow mt-1`} aria-current="page" href="#">{label ?? "Click me"}</button>
    </>
  )
}

export default Button