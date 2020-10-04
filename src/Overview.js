import React from 'react';
import {Layout} from 'antd';
import MenuHeader from './Menu';
import YoutubeLink from './YoutubeLink';

const {Header,Content} = Layout

function Overview() {
    return (
        <div>
        <Layout>
            <Header>
                <MenuHeader/>
            </Header>
            <Content style={{height:"100%"}}>
                <YoutubeLink/>
            </Content>
        </Layout>
            
        </div>
    )
}

export default Overview


