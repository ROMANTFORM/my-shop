import React from "react";
import { useContext } from "react";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import { Row } from "react-bootstrap";
import DeviceItem from "./DeviceItem";

const DeviceList = observer(() => {

    const {device} = useContext(Context);
    // console.log(device)

    return (
       <Row className="d-flex" style={{paddingLeft: 20}}>
            {
                device.devices.map(device => 
                    <DeviceItem key={device.id} device={device}/>
                    )
            }
       </Row>   
    )
});

export default DeviceList;