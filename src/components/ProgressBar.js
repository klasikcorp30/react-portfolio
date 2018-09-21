import React, { Component } from 'react';

class ProgressBar extends Component {
    progressBar = {
        width: this.props.width,
        backgroundColor: this.props.color
    };
    render() {
        return (
           <div> 
            <p>{this.props.name}</p>
                <div className="progress">
                    <div className="progress-bar" style={this.progressBar}>{this.props.width}</div>
                </div>
            </div>
        );
    }
}

export default ProgressBar;