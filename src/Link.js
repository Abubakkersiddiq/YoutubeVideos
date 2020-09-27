import React ,{useState}from 'react';
import axios from 'axios';
import './Link.css';
import { Form, FormGroup, FormInput, FormSelect, Button } from "shards-react";

function Link(props) {
    const [link, setLink] = useState(undefined);
    const [url, setUrl] = useState('');
    
    const handleSearch= async() =>{
        let linkone = url;
        let id = linkone.split("=")[1];
        const responseone = await axios.get(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyCQPdwWm__RUz9Hhh7GtVmmfYjTciYQxbk&part=snippet,statistics&id=${id}`)
        setLink(responseone);
        if(link !== undefined)
        {
            if(link.data.items.length !== 0 )
            {
                props.onItemUpdate(link);
            }
        }
    }
    return (
        <div>
            <Form>
                <FormGroup>
                    <label htmlFor="Link" className="Link-input">Enter the Youtube Link</label>
                    <FormInput id="Link" onChange={e => setUrl(e.target.value)}/>
                    <label htmlFor="Link" className="Link-input">Choose the Category</label>
                    <FormSelect>
                        <option value="first">Cooking</option>
                        <option value="second">Electrical</option>
                    </FormSelect>
                    <Button pill theme="primary" className="margin20" onClick={handleSearch}>Search</Button>
                </FormGroup>
            </Form>
        </div>
    )
}

export default Link
