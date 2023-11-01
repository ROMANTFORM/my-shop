import React from "react";
import {  Card, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { observer } from "mobx-react-lite";
import { HiStar } from "react-icons/hi";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { DEVICE_ROUTE } from "../utils/consts";

const DeviceItem = observer(({device}) => {
    const history = useHistory()

    return (
       <Col md={3} className={"mt-5"} onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{width: 150, cursor: 'pointer', boxShadow: '-2px 1px 35px 0px rgba(0,0,0,0.75)', padding: 8}}  mt={2}>
             <Image src={device.img}/>
                <div className="d-flex justify-content-between align-items-center">
                    <div style={{color: "grey"}}>Samsung...</div>
                    <div className="d-flex align-items-center">
                        <div>{device.rating} </div>
                        <HiStar fill="#f1a31e"/>
                    </div>
                    
                </div>
                <div>{device.name}</div>
            </Card>
       </Col>   
    )
});

export default DeviceItem;