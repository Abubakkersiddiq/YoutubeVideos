import React from 'react';
import {Menu,Space} from 'antd';


function MenuHeader() {
    return (
        <Menu mode="horizontal" theme="dark">
            <Menu.Item key="1">Youtube Link </Menu.Item>
            <Menu.Item key="2">Saved Links</Menu.Item>
        </Menu>
    )
}

export default MenuHeader
