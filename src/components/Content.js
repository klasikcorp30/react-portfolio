import React,{Component} from 'react';


import About from './About';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Testimonials from './Testimonials';
import News from './News';
import Contact from './Contact';


class Content extends Component{

    render(){
        return(
            <div>
                <About />
                <Skills />
                <Portfolio />
                <Testimonials />
                <News />
                <Contact />		
</div>
        )
    }
};

export default Content;
