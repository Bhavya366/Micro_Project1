import React from 'react';
import '../App.css';
import Links from './Links';

const Footer = () => {
    return (
        <div className='footer'>
        <div className='f-first'>
            <Links content="Prompt Generator"/>
            <Links content="Dweep Daily"/>
            <Links content="All Contributers"/>
            <Links content="Your data on Dweep.io"/>
            <Links content="Contribute to Dweep"/>
        </div>
        <div className='f-second'>
            <Links content="Dweep.io"/>
            <Links content="Made with love in India"/><br></br>
            <div><a href="#"><i class="fa fa-linkedin"></i></a>&nbsp;&nbsp;
            <a href="#"><i class="fa fa-instagram"></i></a></div>
            <Links content="hello@dweep.io" />
        </div>
        </div>
    );
};

export default Footer;