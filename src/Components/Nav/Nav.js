import React from 'react';
import './Nav.scss';
import { NavLink } from 'react-router-dom';

import logo from '../../Img/Logo/brain.svg';


const Nav = () => {


    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <a className="navbar-brand text-uppercase" href="/">
                    <img className="logo" src={logo} alt="logo" /> Future Tech</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav text-uppercase">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/tech-news">Tech News</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/ces">CES</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/perspective">Perspective</NavLink>
                        </li>
                        
                    </ul>
                    
                </div>
            </nav>
        </div>
    )
}

export default Nav;