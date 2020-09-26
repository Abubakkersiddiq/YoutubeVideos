import React from 'react';
import './Preview.css';
import { Card,
    CardHeader,
    CardTitle,
    CardImg,
    CardBody,
    CardFooter,
    Button } from "shards-react";

function Preview() {
    return (
        <div className="Preview-notice">
            <Card className="Preview-notice-inner">
                <CardHeader>Video Information</CardHeader>
                <CardImg src="https://place-hold.it/300x200" />
                <CardBody>
                    <CardTitle>VIdeo Title</CardTitle>
                    <Button>Read Description</Button>
                </CardBody>
                
            </Card>
        </div>
    )
}

export default Preview
