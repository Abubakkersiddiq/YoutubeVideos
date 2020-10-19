import React,{useState} from 'react';
import {Container,Row,Col} from 'shards-react';
import { Form, Input, Button ,Select} from "antd";
import {layout,tailLayout} from './Layout';
import Preview from './Preview';
import axios from 'axios';

const {Option} = Select;

function YoutubeLink() {
    const [Link,setLink] = useState(null);
    const [Category, SetCategory] = useState(null);
    const [Title, setTitle] = useState(null);
    const [search, setsearch] = useState(true);
    // console.log(Link,Title);
    

    const handleSubmit = (values) =>{
        let linkone = values.link;
        let id = "";
        if(linkone.includes("youtu.be")){
            let links = linkone.split("/");
            id = links[3];
        }
        else{
            id = linkone.split("=")[1];
        }
        
        axios.get(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyCQPdwWm__RUz9Hhh7GtVmmfYjTciYQxbk&part=snippet,statistics&id=${id}`)
             .then(res =>{
                  let title=res.data.items[0].snippet.localized.title;
                  let thumbnail = res.data.items[0].snippet.thumbnails.high.url;
                  setTitle(title)
                  setLink(thumbnail)
                  setsearch(false)
                    })

        // console.log(responseone.data);
    }
    return (
        <div style={{marginTop:"30px"}}>
            <Container>
                <Row>
                <Col sm="12" lg="6">
                        <Form name="input " {...layout} onFinish={handleSubmit}>
                            <Form.Item label="Youtube Link" name="link" rules={[{required:true, message:"The link cannot be empty"}]}>
                                    <Input placeholder="Link" size="middle"/>
                            </Form.Item>
                            
                            <Form.Item label="Category" name="category" >
                                <Select  placeholder="Select Category" style={{float:"left",width:150}} >
                                    <Option value="cooking">Cooking</Option>
                                    <Option value="Mobile">Mobile</Option>
                                    <Option value="Electrical">Electrical</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item {...tailLayout}>
                                <Button type="primary" shape="round" htmlType="submit">
                                    {search? (<div>Search</div>):(<div>Submit</div>)}
                                </Button>
                            </Form.Item>
                        </Form>
                </Col>
                <Col sm="12" lg="6">
                    <Preview Title={Title} Image={Link} />
                </Col>
                </Row>
            </Container>
        </div>
    )
}

export default YoutubeLink
