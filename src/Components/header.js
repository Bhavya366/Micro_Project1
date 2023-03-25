import React from 'react';
import Firstpart from './Firstpart';
import logo from './logo.png';

const header = () => {
    return (
        <>
            <div>
                <Firstpart 
                content1="An inspiring design delivered to your inbox every morning."
                content2="Our team scouts the internet for the best designs, illustrations and art and delivers a truly inspiring one every day to your inbox"
                content3="Show me how it looks"
                buttoncontent1="Your e-mail address"
                button1color="white"
                button1font="grey"
                buttoncontent2="Register Now"
                button2color="black"
                button2font="white"
                text="Free - No Spam - No Data Sharing"
                textcolor="white"
                />
            </div>
            <div className="second">
                <img src={logo} alt="alternate" />
            </div>
        </>        
    );
};

export default header;