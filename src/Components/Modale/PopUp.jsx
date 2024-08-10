import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function PopUp({ Svar, Hclose }) {
    return (
        <div>

            <Modal show={Svar} onHide={Hclose}>
                <Modal.Header closeButton>
                    <Modal.Title>Hi There...</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    
                    <p>Congratulations..  you are successfully reached at modal componet.  Well done..</p>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={Hclose}>
                        Close
                    </Button>
                    {/* <Button variant="primary" onClick={Hclose}>
                        Save Changes
                    </Button> */}
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default PopUp
