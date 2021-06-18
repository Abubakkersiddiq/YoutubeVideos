import React from 'react';
import {Layout} from 'antd';
import YoutubeLink from './YoutubeLink';
import {Typography} from '@material-ui/core'

const {Content} = Layout

function Overview() {
    return (
        <div>
            <Typography variant="h3" style={{fontFamily:'PoppinsBold', margin:"20px"}} >
                Link Saver
            </Typography>
        <Layout style={{background:'white'}}>
            <Content style={{height:"100%"}}>
                <YoutubeLink/>
            </Content>
        </Layout>
            
        </div>
    )
}

export default Overview


