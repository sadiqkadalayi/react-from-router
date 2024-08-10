import React from 'react'

function Cred({Smsg}) {

    return (
        <div>
            <h6>{!Smsg && 'Your credential will not be shared to anyone. End-To-End Encrypted '}</h6>
            
        </div>
    )
}

export default Cred
