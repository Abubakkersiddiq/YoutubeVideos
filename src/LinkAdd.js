import React ,{useState}from "react";
import { Container, Row, Col} from "shards-react";
import Link from './Link';
import Preview from './Preview';
function LinkAdd() {
  const [title,setTitle]=useState("No data");
  const [image,setImage] = useState(null);
  
  return (
    <div style={{marginTop:"50px"}}>
            <Container>
                <Row>
                <Col sm="12" lg="6">
                    <Link onItemUpdate={(val) => { setTitle(val.data.items[0].snippet.title); setImage(val.data.items[0].snippet.thumbnails.medium) }}/>
                </Col>
                <Col sm="12" lg="6">
                    <Preview Title={title} Image={image}/>
                </Col>
                </Row>
            </Container>
    
    </div>
  );
}

export default LinkAdd;
