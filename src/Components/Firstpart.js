import React from 'react';

const Firstpart = (props) => {
    return (
        <div className='first'>
           <h2>{props.content1}</h2><br></br>
           <p style={{fontSize:"18px"}}>{props.content2}</p><br></br>
           <h4>{props.content3}</h4><br></br>
           <button style={{backgroundColor:props.button1color,color:props.button1font,marginRight:"30px",width:"300px",height:"50px",textAlign:"start",padding:"13px"}}>{props.buttoncontent1}</button>
           <button style={{backgroundColor:props.button2color,color:props.button2font,width:"150px",height:"50px"}}>{props.buttoncontent2}</button><br></br><br></br>
            <span style={{color:props.textcolor,marginLeft:"30px"}}>{props.text}</span>
        </div>
    );
};

export default Firstpart;