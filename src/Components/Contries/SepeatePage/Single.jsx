import React, { useContext, useEffect, useState } from 'react'
import { dataContext } from '../../../App'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Single() {

    // const {selected}=useContext(dataContext);
    // console.log(selected);
    const [data, setData] = useState(null);
    const {code} = useParams()
    

    const getSingleContryData = async() => {
        try{
        const req = await axios(`https://restcountries.com/v3.1/alpha/${code}`)
        setData(req.data[0])
        }catch(err) {
            console.log(err); 
        }
    }

    useEffect(()=>{
        getSingleContryData()
    },[])


  return (
    <>
    <div className='container'>
        <div className="row">
            <div className="col-12 d-flex justify-content-center">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={data?.flags?.png} />
                <Card.Body>
                    <Card.Title>{data?.name?.common}</Card.Title>
                    <Card.Text>
                        {data?.flags?.alt ?? 'Some quick example text to build on the card title and make up thebulk of the cards content.'}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
            </div>
        </div>
    </div>
    </>
  )
}

export default Single