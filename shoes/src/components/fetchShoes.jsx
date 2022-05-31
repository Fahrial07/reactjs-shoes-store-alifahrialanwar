import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoginPost from './loginPost';

function ShoesData(props){

    const token = localStorage.getItem('token');
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {

        setLoading(true);

            try {

                let response = await axios.get('http://localhost:8000/api/v1/list');

                console.log(response.data.data.data);

                setItems(response.data.data.data);

                setLoading(false);

            } catch (error) {

                setLoading(true);

                console.log(error.message);
            }

    }

    useEffect(() => {
        fetchData();
    }, [])

    const shoesDelete = async (id, e) => {
        // e.preventDefault();
        try {
            const success = await axios.delete(`http://localhost:8000/api/v1/delete/${id}`);
            fetchData();
            console.log(success.data);
            // alert('Data berhasil di hapus');
        } catch (error) {
            console.log(error.message);
        }
    }


    return (
            <div className="row d-flex d-flex justify-content-around no-wrap m-1">

                {

                    loading ?
                    <div className="overlay d-flex justify-content-center mt-5 pt-5">
                        <div className="spinner-border text-dark" role="status" aria-hidden="true">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div> :

                    <></>

                }

                        {
                            items.map((item, index) => {

                                return (
                                <div key={index} className="card mt-3" style={{ width: 20 + 'rem'  }}>
                                    <figure>
                                        <img src={`${item.imageUrl}${item.image}`} className="card-img-top mt-2" alt="..." />
                                    </figure>
                                    <div className="card-body">
                                        <h4 className="card-title text-center fw-bold">{ item.merk }</h4>
                                        <hr />
                                        <table className='fw-bold'>
                                            <tr>
                                                <td>Color</td>
                                                <td>:</td>
                                                <td>{item.color}</td>
                                            </tr>
                                            <tr>
                                                <td>Size</td>
                                                <td>:</td>
                                                <td>{item.size}</td>
                                            </tr>
                                            <tr>
                                                <td>Price</td>
                                                <td>:</td>
                                                <td>Rp. {item.price}</td>
                                            </tr>
                                        </table>
                                        { !token ? '' :
                                        <div className='btn btn-group'>
                                            <button className="btn btn-danger btn-sm col-md-4 align-items-end" onClick={ (e) => shoesDelete(item.id, e)}>Delete</button>
                                        </div>
                                        }
                                    </div>
                                </div>
                                );
                            })
                        }


            </div>
        );

}

export default ShoesData;