import React, { Component } from 'react';
import myphoto from '../img/jesus.jpg';

class Hero extends Component {
    render() {
        return (
            <section className="hero my-bg">
                <div className="container">
                    <div className="row">
                            <div className="col-md-6">
                                <h3>Hello!</h3>
                                <h3 className="pb-5"> I am a Full Stack Developer</h3>
                                <h3><b>My Name is</b></h3>
                                <h3 className="pb-5"><b>Raniel Brown</b></h3>
                                <div className="row">
                                    <a href="..." className="btn btn-dark w-25"> Contact Me</a>
                                    <a href="..." className="btn btn-secondary text-dark w-25">Download My CV</a>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img src={myphoto} className="w-100 h-100 rounded img-responsive" alt="RanielBrown"/>
                            </div>
                    </div>
                </div>
            </section>
            
        );
    }
}

export default Hero;