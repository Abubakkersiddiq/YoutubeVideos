import React,{useState, useEffect} from 'react';
import {Container,Row,Col} from 'shards-react';
import { Form, message} from "antd";
import TextField from '@material-ui/core/TextField';
import {IconButton} from "@material-ui/core"
import SearchIcon from '@material-ui/icons/Search';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {layout} from './Layout';
import Preview from './Preview';
import axios from 'axios';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import './Preview.css';

function YoutubeLink() {
    const [form] = Form.useForm();
    const [Link,setLink] = useState(undefined);
    const [Title, setTitle] = useState(undefined);
    const [categories, setCategories] = useState([{title:"ex1"}]);
    const [catvalue, setCatValue] = useState("");
    const [refresh, setRefresh] = useState(true);
    const [shrinkState, setShrinkState] = useState(false);
    console.log(Link)

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
             finalresult = [...new Set(result)];
              datarenderer(finalresult)
            
        }
        
        fetchData();
        
    },[refresh]);

    const datarenderer = (input)=> {
        const result = []
        input.map((element) => {
            result.push({"title":element})
        })
        setCategories(result)
    }
    
    const examplefunction = async(row) =>{
        try{
            const doc = new GoogleSpreadsheet('1PHe3WTWi2pgzmKiN1jyIFQH6uOilKh0YU6ZtxnGIpQ4');
        await doc.useServiceAccountAuth(require('./credential/youtubelink-290719-5d575c675961.json'));
        await doc.loadInfo();
        
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

    const handleSubmit = ()=>{
        try{
            const date = new Date().toLocaleString();
            const newData = {TITLE:document.getElementById('vidTitle').value, LINK:document.getElementById('link').value, "INSERTED DATE":date, "CATEGORY":document.getElementById("video-category").value};
            examplefunction(newData);
        }
        catch(e){
            console.log('Error:', e);
        }
    }

    const handleSearch = () =>{
        let titleone;
        // let linkone = form.getFieldValue('link');
        let linkone = document.getElementById("link").value;
        let id = "";
        if(linkone !==undefined && linkone !== ""){

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
                      setShrinkState(true);
                      form.setFieldsValue({vidTitle: title});
                      setLink(thumbnail)
                        })
            
        }
        else{
            message.error("Link field empty")
        }
        
        
    }


    const theme = createMuiTheme({
        palette:{
            primary:{
               main:"#ff8f00"
            },
        },
    });

    return (
        <div style={{marginTop:"10px"}}>
            <Container>
                <Row>
                <Col sm="12" lg="6">
                    <Preview Title={Title} Image={Link} />
                </Col>
                <Col sm="12" lg="6">
                        <Form name="input " {...layout} onFinish={handleSubmit} form={form}>
                            {/* <Form.Item label="Youtube Link" name="link" rules={[{required:true, message:"The link cannot be empty"}]}>
                                     <Search placeholder="Link" size="middle" onSearch={handleSearch} enterButton="Search"/>
                                </Form.Item>*/}
                            <div style={{display:"flex", marginTop:"40px"}}>
                                <ThemeProvider theme={theme}>
                                <TextField
                                variant="outlined"
                                label="Youtube Link"
                                id="link"
                                fullWidth
                                />
                                </ThemeProvider>
                                <IconButton style={{margin:"auto", color:"#ff8f00"}} onClick={handleSearch}>
                                    <SearchIcon/>
                                </IconButton>
                            </div>
                            <ThemeProvider theme={theme}>
                            <TextField
                            variant="outlined"
                            id="vidTitle"
                            label="Video title"
                            fullWidth
                            value={Title}
                            InputLabelProps={{shrink:shrinkState}}
                            style={{margin:"20px 0px"}}
                            />
                            </ThemeProvider>
                                <Autocomplete
                                    id="video-category"
                                    options={categories}
                                    getOptionLabel={(option)=> option.title ? option.title : ""}
                                    value={catvalue}
                                    fullWidth
                                    freeSolo
                                    onChange={(event, newVal)=> {
                                        setCatValue(newVal)
                                    }}
                                    style={{width: "100%", marginBottom:"20px"}}
                                    renderInput={(params) => <TextField {...params} label="Category" variant="outlined"  />}
                                />
                                <button className="SubmitButton">
                                Submit
                                </button>
                        </Form>
                </Col>
                </Row>
            </Container>
        </div>
    )
}

export default YoutubeLink
