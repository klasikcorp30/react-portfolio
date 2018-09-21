import React,{Component} from 'react';
import Navbar from './Navbar';
import Hero from './Hero';


class Header extends Component{
    render(){
        return(
            <div>
                <div className="container">
                    <Navbar />
                </div>
                <Hero />
            </div>
        )
    }
};

export default Header;

