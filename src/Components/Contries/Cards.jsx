import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { dataContext } from '../../App';

function Cards({ data }) {
    const {setSelected}=useContext(dataContext)
    const navigate = useNavigate();
    const goSingle =() => {
        setSelected(data);
        navigate(`/Single/${data.cca3}`)
   }
    return (
        <div>
            <Card style={{ width: '18rem' }} onClick={goSingle}>
                <Card.Img variant="top" src={data.flags.png} height={'175px'}/>
                <Card.Body>
                    <Card.Title>{data.name.common}</Card.Title>
                    <Card.Text>
                        { data.flags.alt ?? 'Some quick example text to build on the card title and make up the bulk of the cards content.'}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

        </div>
    )
}

export default Cards
