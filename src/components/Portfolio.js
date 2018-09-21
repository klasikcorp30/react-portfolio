import React, { Component } from 'react';

class Portfolio extends Component {
    render() {
        return (
            <section className="section-padding">
                    <div className="container">
                        <h1 className="text-center">My Portfolio</h1>
                        <br />
                        {/* <div className="navbar-expand-md d-flex mt-5">
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item active">
                                    <a className="nav-link text-dark" href="...">All <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark" href="...">Web Design</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark" href="...">Logo</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark" href="...">Graphic</a>
                                </li>
                            </ul>
                        </div> */}
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card h-100">
                                        <img className="card-img-top" src="holder.js/100x180/" alt=""/>
                                        <div className="card-body">
                                            <h4 className="card-title">Travel Agency</h4>
                                            <p className="card-text">Lorem ipsum,
                                                dolor sit amet consectetur adipisicing elit. 
                                                Saepe aspernatur dignissimos commodi at culpa obcaecati dolores, non quae in ipsum.
                                                Lorem ipsum,
                                                dolor sit amet consectetur adipisicing elit. 
                                                Saepe aspernatur dignissimos commodi at culpa obcaecati dolores, non quae in ipsum.
                                            </p>
                                            <a href="..." className="btn btn-outline-primary w-25">View Website</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card h-100">
                                        <img className="card-img-top" src="holder.js/100x180/" alt=""/>
                                        <div className="card-body">
                                            <h4 className="card-title">Restaurant</h4>
                                            <p className="card-text">Lorem ipsum,
                                                dolor sit amet consectetur adipisicing elit. 
                                                Saepe aspernatur dignissimos commodi at culpa obcaecati dolores, non quae in ipsum.
                                                Lorem ipsum,
                                                dolor sit amet consectetur adipisicing elit. 
                                                Saepe aspernatur dignissimos commodi at culpa obcaecati dolores, non quae in ipsum.
                                            </p>
                                            <a href="..." className="btn btn-outline-primary w-25 ">View Website</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-12">
                                    <div className="card h-100">
                                         <img className="card-img-top" src="holder.js/100x180/" alt=""/>
                                        <div className="card-body">
                                            <h4 className="card-title">Sports</h4>
                                            <p className="card-text"> Lorem ipsum,
                                                dolor sit amet consectetur adipisicing elit. 
                                                Saepe aspernatur dignissimos commodi at culpa obcaecati dolores, non quae in ipsum.
                                            </p>
                                            <a href="..." className="btn btn-outline-primary w-25">View Website</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-4">
                                <a href="..." className="btn btn-secondary">See More</a>
                            </div>
                        </div>   
                    </div>
                </section>
        );
    }
}

export default Portfolio;