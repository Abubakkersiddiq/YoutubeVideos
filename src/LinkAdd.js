import React from "react";
import { Container, Row, Col, Card, CardBody } from "shards-react";
import Link from './Link';
import Preview from './Preview';
function LinkAdd() {
  return (
    <div style={{marginTop:"50px"}}>
    
            <Container>
                <Row>
                <Col sm="12" lg="6">
                    <Link/>
                </Col>
                <Col sm="12" lg="6">
                    <Preview/>
                </Col>
                </Row>
            </Container>
    
    </div>
  );
}

export default LinkAdd;
