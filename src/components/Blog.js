import React from "react";
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Blog = () => {
    return (
        <div>
            <h1> Your Profile </h1>
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <Image src="https://i.imgur.com/3s7oHOV.jpg" roundedCircle />
                    </Col>
                </Row>
                <h2>Games you've favorited: </h2>
            </Container>

        </div>
    )
}

export default Blog;