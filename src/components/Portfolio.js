import React, { Component } from 'react';
import Project from './Project';
import { portfolioLinks } from '../assets/const/projects';
class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = { showPopup: false, imgName: '' };
    }
    // togglePopup = () => {
    //     this.setState({
    //         showPopup: !this.state.showPopup
    //     });
    //     var element = document.getElementById('about');
    //     if (element !== null && this.state.showPopup === false) {
    //         element.scrollIntoView({ block: 'end' });
    //         console.log(element);
    //     }
    //     console.log(this.state.showPopup);
    // };
    togglePopup(title, caption, description, imgName) {
        this.setState({
            showPopup: !this.state.showPopup,
            title: title,
            caption: caption,
            description: description,
            imgName: imgName
        });
        if (!this.state.showPopup) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }

    render() {
        return (
            <section className="page-section portfolio" id="portfolio" >
                <div className="container">

                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>

                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon">
                            <i className="fa fa-star"></i>
                        </div>
                        <div className="divider-custom-line"></div>
                    </div>

                    <div className="row">
                        {
                            portfolioLinks && portfolioLinks.map(({ title, caption, description, imgName }, index) =>
                                <div className="col-md-6 col-lg-4">
                                    <div className="portfolio-caption">
                                        <h4>{title}</h4>
                                        <p className="text-muted">{caption}</p>
                                    </div>
                                    <div className="portfolio-item mx-auto">
                                        <div onClick={() => { this.togglePopup(title, caption, description, imgName, ) }} className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                            <div className="portfolio-item-caption-content text-center text-white">
                                                <i className="fa fa-plus fa-3x"></i>
                                            </div>
                                        </div>
                                        <img className="img-fluid" src={require('../assets/img/portfolio/' + imgName)} alt="" />
                                    </div>

                                </div>

                            )
                        }
                    </div>
                    {this.state.showPopup ?
                        <Project
                            text='Click "Close Button" to hide popup'
                            closePopup={this.togglePopup.bind(this)}
                            title={this.state.title}
                            caption={this.state.caption}
                            imgName={this.state.imgName}
                            description={this.state.description}
                        />
                        : null
                    }

                </div>

            </section >

        );
    }

}

export default Portfolio;