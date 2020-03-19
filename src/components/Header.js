import React from 'react';
export default () => {
    return (
        <header className="masthead bg-primary text-white text-center">
            <div className="container d-flex align-items-center flex-column">

                <img className="masthead-avatar mb-5" src={require('../assets/img/head.png')} alt="" />

                <h1 className="masthead-heading text-uppercase mb-0">Ann, Chen</h1>

                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon">
                        <i className="fa fa-star"></i>
                    </div>
                    <div className="divider-custom-line"></div>
                </div>

                <p className="masthead-subheading font-weight-light mb-0">Software Engineer</p>

            </div>
        </header>
    )
}