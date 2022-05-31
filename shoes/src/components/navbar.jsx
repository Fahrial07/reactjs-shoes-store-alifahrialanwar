import React from 'react';



const Navigation = () => {

    const token = localStorage.getItem('token');

    function handleLogout(e)
    {
        console.log('logout');
        localStorage.removeItem('token');
        window.location.href = '/login';
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src="./shoes.png" alt="shoes-logo" className="me-3" width="35" height="29"/>
                    <strong>
                        Shoes Store
                    </strong>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-0 mb-lg-0">
                        <li className="nav-item me-3">
                            <a className="nav-link" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link" href="/shoes">Shoes</a>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                    </ul>
                        <div className="d-flex">
                        { !token ?
                            <a className="nav-link btn btn-success btn-sm text-white fw-bold" href="/login">Login</a>
                            :
                            <button className="nav-link btn btn-success btn-sm text-white fw-bold" onClick={handleLogout}>Logout</button>
                        }
                        {/*  */}
                        </div>
                </div>
            </div>
            </nav>
    );
}

export default Navigation;