import React,{useState, useEffect} from 'react';
import {Container,Row,Col} from 'shards-react';
import { Form, Input, Button ,Select, message} from "antd";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {layout,tailLayout} from './Layout';
import Preview from './Preview';
import axios from 'axios';
import { GoogleSpreadsheet } from 'google-spreadsheet';


const {Option} = Select;
const {Search} = Input;

function YoutubeLink() {
    const [form] = Form.useForm();
    const [Link,setLink] = useState(null);
    const [Title, setTitle] = useState(null);
    const [categories, setCategories] = useState([]);
    const [catvalue, setCatValue] = useState("");
    const [refresh, setRefresh] = useState(true);
    let cat = [];

    useEffect(()=> {
        let finalresult = [];
        async function fetchData() {

            const doc = new GoogleSpreadsheet('1PHe3WTWi2pgzmKiN1jyIFQH6uOilKh0YU6ZtxnGIpQ4');
            await doc.useServiceAccountAuth(require('./credential/youtubelink-290719-5d575c675961.json'));
            await doc.loadInfo();
            const sheet = doc.sheetsById[0];
            const rows = await sheet.getRows();
            const result = [];
            rows.map((element)=> {
                result.push(element.CATEGORY);
            });
             finalresult = [... new Set(result)];
             setCategories(finalresult);
            
        }
        
        fetchData();
        console.log(finalresult);
        
    },[refresh]);
    
    const examplefunction = async(row) =>{
        try{
            const doc = new GoogleSpreadsheet('1PHe3WTWi2pgzmKiN1jyIFQH6uOilKh0YU6ZtxnGIpQ4');
        await doc.useServiceAccountAuth(require('./credential/youtubelink-290719-5d575c675961.json'));
        await doc.loadInfo();
        // console.log(doc.title);
            const sheet = doc.sheetsById[0];
            const result = await sheet.addRow(row);
            message.success('Link Added, Please visit the Google Sheet');
            setRefresh(!refresh);
            form.setFieldsValue({link: "", vidTitle: ""});
            setCatValue("");
        }
        catch (e){
            console.log("Error:",e);
            message.error("Link not added!! Sorry for the inconvenience")
        }
    }

    const onChange = (data) => { 
        setCatValue(data.target.value);
    }
    const handleSubmit = ()=>{
        try{
            const date = new Date().toLocaleString();
            const newData = {TITLE:form.getFieldValue('vidTitle'), LINK:form.getFieldValue('link'), "INSERTED DATE":date, "CATEGORY":document.getElementById("video-category").value};
            examplefunction(newData);
        }
        catch(e){
            console.log('Error:', e);
        }
    }

    const handleSearch = () =>{
        let titleone;
        let linkone = form.getFieldValue('link');
        let id = "";
        if(linkone !==undefined){

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
                      titleone=title;
                      setTitle(title);
                      form.setFieldsValue({vidTitle: title});
                      setLink(thumbnail)
                        })
            
        }
        else{
            message.error("Link field empty")
        }
        
        
    }
    return (
        <div style={{marginTop:"30px"}}>
            <Container>
                <Row>
                <Col sm="12" lg="6">
                        <Form name="input " {...layout} onFinish={handleSubmit} form={form}>
                            <Form.Item label="Youtube Link" name="link" rules={[{required:true, message:"The link cannot be empty"}]}>
                                    <Search placeholder="Link" size="middle" onSearch={handleSearch} enterButton="Search"/>
                            </Form.Item>
                            
                            <Form.Item label="VideoTitle" name="vidTitle" rules={[{required:true, message:"Title cannot be empty"}]} >
                                <Input id= 'Video_title' placeholder='Video Title' />
                            </Form.Item>
                            <Autocomplete
                                id="video-category"
                                options={categories}
                                value={catvalue}
                                onChange={(event, newVal)=> {
                                    setCatValue(newVal);
                                }}
                                freeSolo
                                style={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="Categories" variant="standard"  />}
                                style={{marginBottom:"20px"}}
                                />
                            <Form.Item {...tailLayout}>
                                <Button type="primary" shape="round" htmlType="submit">
                                    Submit
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
