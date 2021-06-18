import React, { useEffect, useState } from 'react';
import './Preview.css';
import vector from "./images/notitle.png"

function Preview(props) {
    const [cover, setcover] = useState(props.Image);

    useEffect(()=>{
        setcover(props.Image);
    },[props.Image, props.Title]);

    return (
        <div className="Preview-notice">
            <div className="Preview_imagewrapper">
                {cover === null 
                    ? <img src={vector} alt="Thumbnail" style={{width:"100%", height:"100%", margin:"60px", objectFit:"contain"}}/>
                    : <img src={cover} alt="Thumbnail" style={{width:"100%",height:"100%",objectFit:"contain"}}/>}
            </div>
        </div>
    )
}

export default Preview
