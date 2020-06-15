import React from 'react';

function HumainitzeHeader(props) {
    return(
        <div className="main-title__alt header__bg">
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-lg-6">
                    <div className="hero-title  text-center  text-md-left">
                        <p>Version 1.0</p>
                        <h1>All Business Operation<br/>in One Click </h1>
                        <div className="add-btn pricing-btn_wrap">
                            <a href="#Lorem_Ipsum"
                                className="btn btn-success">Go to Calc</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="main-banner_md">
                        <img src="images/humanize2.jpg" className="img-fluid" alt="Business Calculator" />
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-style d-none d-md-block">
            <img src="images/bg-1.png" className="img-fluid" alt="Advance Business Operation" />
        </div>
    </div>

    )
}
export default HumainitzeHeader;