import React from 'react';
import LoginPost from '../components/loginPost';

const Login = () => {


    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <div className="text-center m-5">
                        <h2 className="fw-bold">Silahkan Login</h2>
                        <hr />
                    </div>
                     <LoginPost />
                </div>
            </div>
        </div>
    );

}


export default Login;