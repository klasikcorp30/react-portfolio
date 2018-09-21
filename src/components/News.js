import React, { Component } from 'react';
import photo from '../img/photo.jpg';

class News extends Component {
    render() {
        return (
            <section className="section-padding">
                <div className="container">
					<h1 className="text-center">Latest News</h1>
					<div className="row mt-5">
						<div className="col-md-4">
							<div className="card h-100">
								<img className="card-img-top" src={photo} alt=""/>
								<div className="card-body">
									<h4 className="card-title">The New Framework Gossip</h4>
									<p className="card-text">
										Lorem ipsum,
                                        dolor sit amet consectetur adipisicing elit. 
                                        Saepe aspernatur dignissimos commodi at culpa obcaecati dolores, non quae in ipsum.
                                        Lorem ipsumLorem ipsum,
									</p>
									<div className="row">
										<div className="col-md-7">
											<p><b><a href="..." className="text-dark">Continue Reading</a></b></p>
										</div>
										<div className="col-md-5">
											<p><b>12/07/2017</b></p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4">
						<div className="card h-100">
							<img className="card-img-top" src={photo} alt=""/>
							<div className="card-body">
								<h4 className="card-title">The New Framework Gossip</h4>
								<p className="card-text">
									Lorem ipsum,
                                    dolor sit amet consectetur adipisicing elit. 
                                    Saepe aspernatur dignissimos commodi at culpa obcaecati dolores, non quae in ipsum.
                                    Lorem ipsumLorem ipsum,
								</p>
								<div className="row">
									<div className="col-md-7">
										<p><b><a href="..." className="text-dark">Continue Reading</a></b></p>
									</div>
									<div className="col-md-5">
										<p><b>23/07/2017</b></p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-4">
					<div className="card h-100">
								<img className="card-img-top" src={photo} alt=""/>
								<div className="card-body">
									<h4 className="card-title">The New Framework Gossip</h4>
									<p className="card-text">
										Lorem ipsum,
                                        dolor sit amet consectetur adipisicing elit. 
                                        Saepe aspernatur dignissimos commodi at culpa obcaecati dolores, non quae in ipsum.
                                        Lorem ipsumLorem ipsum,
									</p>
									<div className="row">
										<div className="col-md-7">
											<p><b><a href="..." className="text-dark">Continue Reading</a></b></p>
										</div>
										<div className="col-md-5">
											<p><b>20/07/2017</b></p>
										</div>
									</div>
								</div>
							</div>
					</div>
				</div>
            </div>
        </section>
        );
    }
}

export default News;