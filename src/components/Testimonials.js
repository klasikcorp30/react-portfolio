import React, { Component } from 'react';
import myPhoto from '../img/jesus.jpg';
import photo from '../img/photo.jpg';

class Testimonials extends Component {

    avatarStyle = {
        width: 80,
        height: 80
    }

    testimonialBackground = {
        backgroundImage: `url(${myPhoto})`,
        backgroundSize: 'cover'
    }

    render() {
        return (
            <section className="section-padding mt-5" style={this.testimonialBackground}>
            <div className="container">
                <h1 className="text-center text-light">Testimonals</h1>
                <div className=" mt-5 text-center">
                    <img className="rounded" src={photo} alt="client" style={this.avatarStyle} />
                    <p className="text-light mt-1">Peter John</p>
                    <p className="text-light">UI/UX Designer</p>
                    <div className="mt-5">
                        <div id="carouselId" className="carousel slide container" data-ride="carousel">
                         <div className="carousel-inner" role="listbox">
                            <div className="carousel-item active">
                                 <p className="text-light">Lorem ipsum,
                                     dolor sit amet consectetur adipisicing elit. 
                                     Saepe aspernatur dignissimos commodi at culpa obcaecati dolores, non quae in ipsum.
                                     Lorem ipsumLorem ipsum,
                                     dolor sit amet consectetur adipisicing elit. 
                                     Saepe aspernatur dignissimos commodi at culpa obcaecati dolores, non quae in ipsum.
                                     Lorem ipsum,Lorem ipsum,
                                     dolor sit amet consectetur adipisicing elit. 
                                     Saepe aspernatur dignissimos commodi at culpa obcaecati dolores, non quae in ipsum.
                                     Lorem ipsum,
                                 </p>
                            </div>
                            <div className="carousel-item">
                                ....
                            </div>
                            <div className="carousel-item">
                                ....  
                            </div>
                        </div>
                        {/* <div className="text-center mt-5">
                             <ol className="carousel-indicators">
                                <li data-target="#carouselId" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselId" data-slide-to="1"></li>
                                <li data-target="#carouselId" data-slide-to="2"></li>
                            </ol>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </section>
        );
    }
}

export default Testimonials;