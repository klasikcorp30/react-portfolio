import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <section className="section-padding">
            <div className="container">
                <h1 className="text-center"> About Me</h1>
                <div className="row pt-5">
                    <div className="col-md-6">
                        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Quas ab architecto repellendus reprehenderit obcaecati tempore quisquam inventore,
                            itaque libero qui beatae labore tempora esse accusantium, corporis, animi reiciendis
                            amet vitae!Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Quas ab architecto repellendus reprehenderit obcaecati tempore quisquam inventore,
                            itaque libero qui beatae labore tempora esse accusantium, corporis, animi reiciendis
                            amet vitae!Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Quas ab architecto repellendus reprehenderit obcaecati tempore quisquam inventore,
                            itaque libero qui beatae labore tempora esse accusantium, corporis, animi reiciendis
                            amet vitae!     
                        </p>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-4 text-center">
                                <i className="fab fa-html5 display-4 text-danger"></i>
                                <p className="lead"> HTML5</p>
                            </div>
                            <div className="col-md-4 text-center">
                                <i className="fab fa-css3-alt display-4 text-primary"></i>
                                <p className="lead"> CSS3</p>
                            </div>
                            <div className="col-md-4 text-center">
                                <i className="fab fa-js display-4 text-warning"></i>
                                <p className="lead"> JavaScript</p>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-4 text-center">
                                <i className="fab fa-react display-4 react-color"></i>
                                <p className="lead"> React</p>
                            </div>
                            <div className="col-md-4 text-center">
                                <i className="fab fa-vuejs text-success display-4"></i>
                                <p className="lead">Vue</p>
                            </div>
                            <div className="col-md-4 text-center">
                                <i className="fab fa-laravel text-danger display-4"></i>
                                <p className="lead">Laravel</p>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-4 text-center">
                                <i className="fas fa-flask display-4"></i>
                                <p className="lead">Flask</p>
                            </div>
                            <div className="col-md-4 text-center">
                                <i className="fab fa-php php-color display-4"></i>
                                <p className="lead"> PHP</p>
                            </div>
                            <div className="col-md-4 text-center">
                                <i className="fab fa-python display-4 text-secondary"></i>
                                <p className="lead">Python</p> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

export default About;