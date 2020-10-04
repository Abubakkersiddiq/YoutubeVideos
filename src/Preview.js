import React, { useEffect, useState } from 'react';
import './Preview.css';
import { Card,
    CardHeader,
    CardTitle,
    CardImg,
    CardBody,
    Button } from "shards-react";

function Preview(props) {
    const [title, settitle] = useState(props.Title);
    const [cover, setcover] = useState(props.Image);

    useEffect(()=>{
        setcover(props.Image);
        settitle(props.Title);
    },[props.Image]);

    return (
        <div className="Preview-notice">
            <Card className="Preview-notice-inner">
                <CardHeader>Video Information</CardHeader>
                {cover === null 
                    ? (<CardImg src="https://place-hold.it/300x200" />)
                    : (<CardImg src={cover} style={{height:"300px"}} />)
                }
                <CardBody>
                    {title}
                </CardBody>
                
            </Card>
        </div>
    )
}

export default Preview
