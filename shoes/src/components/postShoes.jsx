import React, { useState } from 'react';
import axios from 'axios';

function AddShoes()
{

    const [merk, setMerk ] = useState('');
    const [color, setColor] = useState('');
    const [price, setPrice] = useState('');
    const [size, setSize] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        //  const headers = {
        //         // 'Authorization': localStorage.getItem('api_key'),
        //         'Content-Type' : 'multipart/form-data'
        // }

        const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
            }
        }

        let formData = new FormData();
        formData.append('merk', merk);
        formData.append('color', color);
        formData.append('price', price);
        formData.append('size', size);
        formData.append("image", image);
            // console.log(image);


        // const data = { merk, size, color, price};
        // console.log(data);

            await axios.post('http://localhost:8000/api/v1/add ', formData, config)
            .then(res => {
                console.log(res);
            })
            .then((res) => {
            //    console.log(data.status)
                    alert('Data berhasil ditambahkan');
                    window.location.href = '/shoes';
            })
            .catch(err => {
               console.log(err.message);
            })


    }

    return(
        <div className="card">
            <div className="card-header bg-success">
                <h5>Form Add Shoes</h5>
            </div>
            <div className="card-body">
                <form onSubmit={ handleSubmit }>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label htmlFor="merk">Merk :</label>
                                        <input type="text" name='merk' id='merk' className='form-control' onChange={(e) => setMerk(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="color">Color :</label>
                                        <input type="text" name='color' id='color'  className='form-control' onChange={(e) => setColor(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="size">Size :</label>
                                        <input type="number" name='size' id='size' className='form-control' onChange={(e) => setSize(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label htmlFor="price">Price :</label>
                                        <input type="number" name='price' id='price' className='form-control'  onChange={(e) => setPrice(e.target.value)}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="image">Gambar :</label>
                                        <input type="file" name='image' id='image' className='form-control'  onChange={(e) => setImage(e.target.files[0])}/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group mt-2">
                                <button className='btn btn-success btn-sm' type='submit'>Simpan</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );

}

export default AddShoes;