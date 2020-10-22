import React from 'react';
import {Menu, Avatar} from 'antd';
import {Link} from 'react-router-dom';

function MenuHeader() {
    return (
        <Menu mode="horizontal" theme="dark">
            <Menu.Item key="1"><Link to="/YoutubeLink">Youtube Link</Link> </Menu.Item>
            <Menu.Item key="2"><Link to="/SavedLinks">Saved Links</Link></Menu.Item>
            <Menu.Item key="3" style={{float:"right"}}><Link to="/"><Avatar>U</Avatar></Link></Menu.Item>
        </Menu>
    )
}

export default MenuHeader
