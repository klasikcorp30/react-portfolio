import React,{Component} from 'react';


class Footer extends Component{
    render(){
        return(
            <section className="pt-5 bg-dark">
                <div className="container">
                    <div className="text-center">
                       <a href="..."><i className="fab fa-facebook-f d-inline mr-4 text-light"></i></a>
                       <a href="..."><i className="fab fa-linkedin d-inline text-light mr-4 "></i></a>
                       <a href="..."><i className="fab fa-dribbble d-inline text-light mr-4"></i></a>
                       <a href="..."><i className="fab fa-skype d-inline text-light mr-4"></i></a>
                       <p className="lead text-light mt-4"> Copyright &copy; Raniel Brown. All Rights Reserved</p>
                    </div>
                </div>
            </section>
        )
    }
};

export default Footer;
