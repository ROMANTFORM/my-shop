import React from "react";
import { Card, Col, Container, Image, Row, Button } from "react-bootstrap";
import { HiStar } from "react-icons/hi";

const DevicePage = () => {
    const device = {id: 1, name: "IPhone 14 pro", price: 12000, rating: 5, img: "https://www.reliancedigital.in/medias/iPhone-14-Pro-Deep-Purple-PDP-Image-493177782-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNjk4MnxpbWFnZS9qcGVnfGltYWdlcy9oZDEvaDAyLzEwMDE2OTIyMTczNDcwLmpwZ3xmNTU5ZTAwMzRmYmU5MWU2ODIzMjU5NjEwNTc3NjI1YWJkMjU2OGYxZDllNWM4ZmE3NTkxZGFlMzk5YmQyNTQ1"}
    const description = [
        {id: 1, title: "RAM", description: "5Gb"},
        {id: 2, title: "Processor", description: "Intel Core i3"},
        {id: 3, title: "Camera", description: "12Mp"},
        {id: 4, title: "Acc", description: "4000"},
    ];
    
    return (
        <Container className="mt-3">
            <Row className="d-flex align-items-center justify-content-between">
                <Col md={4}>
                <Image width={300} height={300} src={device.img}/>
            </Col>
            <Col md={4}>
                <Row>
                    <h2>{device.name}</h2>
                    <div className="d-flex justify-content-bentween align-items-center">
                        {device.rating}
                        <HiStar style={{width: 40, height: 40}} fill="#f1a31e"/>
                    </div>
                </Row>
            </Col>
            <Col md={4}>
                <Card className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, border: "5px solid #c1c1c1", fontSize: 32}}
                >
                    <h3>{device.price} uah</h3>
                    <Button variant={'success'}>Buy</Button>
                </Card>
            </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h3>characteristics:</h3>
                {description.map((info, index) => 
                    <Row key={info.id} style={{background: index % 2 === 0 ? "#c1c1c1" : "transparent", padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                    )}
            </Row>
            
        </Container>
    )
};

export default DevicePage;