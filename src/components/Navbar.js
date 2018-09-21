import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        // let home = document.getElementById('home')

        // const array = [home, about, skill, testimonial, portfolio, news, contact]

        // for (let index = 0; index < array.length; index++) {
            
        //     array[index].onclick = () =>{

        //     }

        // }
        
        return (
            <nav className="navbar navbar-expand-md navbar-light navbar-center row">
            <div className="col-md-4">
                <a className="text-dark" href="..."><b className="mr-1">Raniel</b>Brown</a>
            </div>
            <div className="col-md-8 ml-5">
            <button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ">
                    <li className="nav-item active">
                        <a id="home" className="nav-link" href="...">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li id="about" className="nav-item">
                        <a className="nav-link" href="...">About Me</a>
                    </li>
                    <li id="skill" className="nav-item">
                        <a className="nav-link" href="...">My Skills</a>
                    </li>
                    <li id="portfolio" className="nav-item">
                        <a className="nav-link" href="...">My Portfolio</a>
                    </li>
                    <li id="tetimonial" className="nav-item">
                        <a className="nav-link" href="...">Testimonials</a>
                    </li>
                    <li id="news" className="nav-item">
                         <a className="nav-link" href="...">Latest News</a>
                    </li>
                    <li id="contact" className="nav-item">
                        <a className="nav-link" href="...">Contact Me</a>
                    </li>
                </ul>
            </div>
         </div>
    </nav>
            
        );
    }
}

export default Navbar;