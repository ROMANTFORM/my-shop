import React from "react";
import { useContext } from "react";
import { Context } from "../index";
import Card from 'react-bootstrap/Card';
import { observer } from "mobx-react-lite";

const BrandBar = observer(() => {

    const {device} = useContext(Context);
    // console.log(device)

    return (
       <div className="d-flex" style={{paddingLeft: 20}}>
        {device.brands.map(brand => 
            <Card 
                style={{cursor: 'pointer', marginRight: 15 }}
                className="p-3"
                key={brand.id}
                onClick={() => device.setSelectedBrand(brand)}
            >
                {brand.name}
            </Card>
            )
        }

       </div>   
    )
});

export default BrandBar;