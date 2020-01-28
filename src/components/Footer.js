import React from 'react'
export default () => {
    return (
        <footer className="footer text-center">
            <div className="container">
                <div className="row">

                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Location</h4>
                        <p className="lead mb-0">Vancouver, Canada</p>
                    </div>

                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Around the Web</h4>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/pin-chen-c-a95673172/">
                            <i className="fa fa-fw fa-linkedin"></i>
                        </a>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://github.com/pchen128">
                            <i className="fa fa-fw fa-github"></i>
                        </a>
                        <a className="btn btn-outline-light btn-social mx-1" href="mailto:ann3769@hotmail.com">
                            <i className="fa fa-fw fa-envelope"></i>
                        </a>
                    </div>

                    <div className="col-lg-4">
                        <h4 className="text-uppercase mb-4">About Freelancer</h4>
                        <p className="lead mb-0">Freelance is a free to use, MIT licensed Bootstrap theme created by
            <a href="http://startbootstrap.com">Start Bootstrap</a>.</p>
                    </div>

                </div>
            </div>
        </footer>
    )
}