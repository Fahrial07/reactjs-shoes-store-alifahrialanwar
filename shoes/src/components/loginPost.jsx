import React, { useState, useEffect} from 'react';
import axios from 'axios';

function LoginPost()
{
        const [ email, setEmail ] = useState('');
        const [ password, setPassword ] = useState('');

        const [ isLoggedIn, setIsLoggedIn ] = useState(false);
        const token = localStorage.getItem('token');
        useEffect(() => {
            token ? setIsLoggedIn(true) : setIsLoggedIn(false)
        }, [token]);


        const handleLogin = async (e) => {
            e.preventDefault();

            // console.log(email, password);

            // let formData = new FormData();
            // formData.append('email', email);
            // formData.append('password', password);

            axios.post('http://localhost:8000/api/v1/login', { email, password })
            .then(res => {
                // console.log(res.data.data.Token);
                localStorage.setItem('token', res.data.data.Token);

                     window.location.href = '/shoes';

            })
            .catch(err => {
               console.log(err.message);
            })

        }

    return (
        <div className="row container-py">
            <div className="col-md-4 position-absolute top-50 start-50 translate-middle">
                <div className="card mt-5">
                    <div className="card-header bg-primary text-center">
                        <h4 className="fw-bold text-white">Login Now</h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <div className="form-group mb-3">
                                <label htmlFor="email" className="mb-3">Email :</label>
                                <input type="email" name="email" className="form-control" onChange={ (e) => setEmail( e.target.value ) } />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="password" className="mb-3">Password :</label>
                                <input type="password" name="password" className="form-control" onChange={(e) => setPassword( e.target.value )} />
                            </div>
                            <button className="btn btn-success btn-sm fw-bold text-center" type='submit'>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default LoginPost;