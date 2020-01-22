import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true,
        };
    }
    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    render() {
        const collapsed = this.state.collapsed;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed text-uppercase font-weight-bold bg-primary text-white rounded' : 'navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded';
        // "navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded"
        // "collapse navbar-collapse"
        return (
            <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav" >
                <div className="container">
                    <NavLink className="navbar-brand js-scroll-trigger" to="/">Ann</NavLink>
                    <button onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                    <i className="fa fa-bars"></i>
                    </button>
                    <div className={`${classOne}`} id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item mx-0 mx-lg-1">
                                <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#portfolio">Portfolio</a>
                            </li>
                            <li className="nav-item mx-0 mx-lg-1">
                                <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">About</a>
                            </li>
                            <li className="nav-item mx-0 mx-lg-1">
                                <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }

}
export default Navbar;