import React from 'react'

function Button({label,handle}) {
  return (
    <>
        <a onClick={handle} className="x-5 btn btn-primary shadow mt-1" aria-current="page" href="#">{label ?? "Click me"}</a>
    </>
  )
}

export default Button