import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import axios from 'axios'


function Contires() {
    const [all, setAll] = useState([]);

    // const getData = () => {
    //     axios('https://restcountries.com/v3.1/all')
    //         .then((res) => {
    //             setAll(res.data)
    //         }).catch((err) => {
    //             console.log(err);
    //         });
    // }

    const getData = async () => {
        try {
            const res = await axios('https://restcountries.com/v3.1/all')
            setAll(res.data)
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(()=>{
        getData()
    },[])


    return (
        <div>
            {/* <div className='row justify-content-center d-flex align-middle'>
                <div className="col-3 mb-5">
                    <button className='btn btn-primary' onClick={getData}>Fetch Countries Data</button>
                </div>
            </div> */}
            <div className='d-flex flex-wrap justify-content-center gap-3'>
                {all.map((cnty) => <Cards data={cnty} key={cnty.cca3} />)}
            </div>


        </div>
    )
}

export default Contires
