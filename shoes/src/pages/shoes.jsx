import React from 'react';
import ShoesData from '../components/fetchShoes';

const Shoes = () => {

    const token = localStorage.getItem('token');

    return (


        <div className="container-fluid m-auto">

                <div className="btn btn-group mt-3">
                    { !token ? '' :
                        <a href="./add" className="btn btn-success btn-sm fw-bold">+ Tambah Data</a>
                    }
                    </div>

            <div className="p-4 mt-3 bg-dark text-white text-center rounded-3">
                <h3>Our Product</h3>
            </div>



            <ShoesData />

        </div>
    );

}

export default Shoes;