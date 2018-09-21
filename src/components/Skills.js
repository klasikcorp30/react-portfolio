import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Skills extends Component {

    
    
    PHPProgressBar = {
        width: '70%',
        backgroundColor: '#8892be'
    };
    VueProgressBar = {
        width: '80%'
    };
    ReactProgressBar = {
        width: '40%',
        backgroundColor: '#00d8ff'
    };

    render() {
        return (
            <section className="section-padding">
            <div className="container">
                <h1 className="text-center">My Skills</h1>
                <div className="row mt-5">
                    <div className="col-md-6">
                       <ProgressBar name="HTML5" width="100%" color="#e34f26" />
                    </div>
                    <div className="col-md-6">
                        <ProgressBar name="CSS3" width="100%" color="#007bff" />
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-6">
                    <ProgressBar name="JavaScript" width="100%" color="#f7df1e" />
                    </div>
                    <div className="col-md-6">
                    <ProgressBar name="PHP" width="70%" color="#8892be" />
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-6">
                    <ProgressBar name="Vue" width="80%" color="#42b88e" />    
                    </div>
                    <div className="col-md-6">
                    <ProgressBar name="React" width="50%" color="#00d8ff" />    
                    </div>
                </div>
                <div className="row mt-5">
                <div className="col-md-6">
                    <ProgressBar name="Flask" width="91%" color="#000000" />
                </div>
                <div className="col-md-6">
                    <ProgressBar name="Python" width="87%" color="#6c757d" />
                </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-6">
                         <ProgressBar name="Laravel" width="45%" color="#dc3545" />
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

export default Skills;
