import React from "react";
import { useContext } from "react";
import { Context } from "../index";
import { ListGroup } from "react-bootstrap";
import { observer } from "mobx-react-lite";

const TypeBar = observer(() => {

    const {device} = useContext(Context);
    // console.log(device)

    return (
        <ListGroup>
            {device.types.map(type => 
            
                <ListGroup.Item
                key={type.id} 
                variant="dark"
                style={{cursor: 'pointer'}}
                onClick={() => device.setSelectedType(type)}
                className={type.id === device.selectedType.id ? "active" : ""}
                // active={type.id === device.selectedType.id}
                >
                    {type.name}
                </ListGroup.Item>
            )} 
        </ListGroup>   
    )
});

export default TypeBar;