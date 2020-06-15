/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import CalculatorBody from './CalculatorBody'
import HumainitzeHeader from './HumainitzeHeader';

function Main(props) {
    return(
        <div id="main" >
            <header>
                <div className="nav-menu">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <nav className="navbar navbar-expand-lg navbar-light">
                                    <a className="navbar-brand" href="#"><img src="images/logo.png" alt="#" /></a>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav ml-auto">
                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle active" href="#"
                                                    id="navbarDropdown" role="button" data-toggle="dropdown"
                                                    aria-haspopup="true" aria-expanded="false">
                                                    Social
                                                </a>
                                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                    <a className="dropdown-item" href="https://github.com/ifebrand6">Github</a>
                                                    <a className="dropdown-item" href="https://twitter.com/UdeoguI">Founder social Page</a>
                                                    <div className="dropdown-divider"></div>
                                                    <a className="dropdown-item" href="https://www.linkedin.com/in/udeogu-ifechukwu/">Linkedin Profile</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <HumainitzeHeader/>
            </header>
            <section className="space bg-image">
            <div className="container">
            <CalculatorBody />
            </div>
            </section>
        </div>
       
          
    )
}
export default Main;