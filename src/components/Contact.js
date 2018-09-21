import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <section className="section-padding">
			<div className="container">
                <h1 className="text-center">Contact Me</h1>
                
                <div className="row text-center mt-5">
                        <div className="col-md-4">
                            <i className="far fa-envelope mr-2"></i>
                            <p className="d-inline">klasik.corp30@gmail.com</p>
                        </div>
                        <div className="col-md-4">
                            <i className="fas fa-map-marker-alt mr-2"></i>
                            <p className="d-inline">Kingston, Jamaica</p>
                        </div>
                        <div className="col-md-4">
                            <i className="fas fa-phone mr-2"></i>
                            <p className="d-inline">+1800 555 5555</p>
                        </div>
                    </div>

				<div className="form-group mt-5 container">
				    <form method="POST" action="...">
						<div className="row">
				            <div className="col-md-6">
							    <input type="text" required placeholder="Full Name" className="form-control" />
							</div>
							<div className="col-md-6">
							    <input type="email" required placeholder="Email " className="form-control" />
							</div>
						</div>
						<div className="row mt-3">
							<div className="col-md-12">
								<input type="text" required placeholder="Subject" className="form-control" />
							</div>
						</div>
						<div className="row mt-3">
					        <div className="col-md-12">
							    <textarea className="form-control" rows="10" placeholder="Message"></textarea>
							</div>
						</div>
						<div className="text-center">
							<button type="submit" className="btn btn-outline-secondary mt-3 w-25">Send Message</button>
						</div> 
				</form>
			</div>
		</div>
	</section>
        );
    }
}

export default Contact;