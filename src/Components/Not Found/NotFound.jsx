import React from 'react'
import './NotFound.css'
function NotFound() {
  return (
    <div className="container mt-3">
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-5">
                <div className="blank-404">
                  <div className="sub-head">
                  <h1>404 Error - Page not found
                  </h1>
                  </div>
                  <div className="sub-head">
                  <p>Uh oh, looks like the page you are looking for has moved or no longer exists.</p>
                  </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default NotFound