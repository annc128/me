import React from 'react';
export default (props) => {
    return (
        <div className="portfolio-modal" role="dialog" id="project">
            <div className="modal-dialog modal-xl" role="document">
                <div className="modal-content">
                    <button type="button" onClick={props.closePopup} className="close" aria-label="Close">
                        <span >
                            <i className="fa fa-times"></i>
                        </span>
                    </button>
                    <div className="modal-body text-center">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">{props.title}</h2>

                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon">
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    <img className="img-fluid rounded mb-5" src={require('../assets/img/portfolio/' + props.imgName)} alt="" />

                                    <p className="mb-5">{props.description}</p>
                                    <button className="btn btn-primary" onClick={props.closePopup}>
                                        <i className="fa fa-times fa-fw"></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}