import React from 'react';
import AddShoes from '../components/postShoes';
const Add = () => {

    return (

        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-12'>
                    <h5 className="text-center fw-bold p-5">Add Shoes Data</h5>

                    <AddShoes />

                </div>
            </div>
        </div>
    );

}

export default Add;