import React ,{useEffect, useState}from 'react';
import './Intro.css';
import {Button} from 'antd';
import { Row, Col } from "shards-react";
import {Link} from 'react-router-dom';
import {GoogleSpreadsheet} from 'google-spreadsheet'



function Intro() {
    const [linkCount, setLinkCount]= useState(0);

    useEffect(()=>{
        const handleLoading = async() =>{
            try{
                const doc = new GoogleSpreadsheet('1PHe3WTWi2pgzmKiN1jyIFQH6uOilKh0YU6ZtxnGIpQ4');
                await doc.useServiceAccountAuth(require('./credential/youtubelink-290719-5d575c675961.json'));
                await doc.loadInfo();
                const sheet = doc.sheetsById[0];
                const rows = await sheet.getRows();
                setLinkCount(rows.length);
            }
            catch(e){
                console.log("Error",e);
            }
        }
        handleLoading();
    },[linkCount])
    return (
        <div>
        <div className="FrontCard">
            <h1 className="TitleFont">Welcome User</h1>
            {linkCount !==0 && <h1>{linkCount} Links Added</h1>}
        </div>
            <div>
            <Row>
                <Col sm="12" lg="6" style={{paddingBottom:"20px"}}>
                <Button type="primary" shape="round"><Link to="/YoutubeLink">Add Youtube Link</Link></Button>
                </Col>
                <Col sm="12" lg="6">
                <Button type="primary" shape="round"><Link to="/SavedLinks">View Saved Links</Link></Button>
                </Col>
            </Row>
            </div>

        </div>

    )
}

export default Intro
