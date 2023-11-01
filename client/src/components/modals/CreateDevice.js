import React, { useContext } from "react";
import { Button, Modal, Form, Dropdown } from 'react-bootstrap';
import { Context } from "../..";

const CreateDevice = ({show, onHide}) => {
    const {device} = useContext(Context);
   

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add Device
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>Choose type</Dropdown.Toggle>
                        <Dropdown.Menu>
                           {device.types.map(type =>
                           <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>Choose brand</Dropdown.Toggle>
                        <Dropdown.Menu>
                           {device.brands.map(brand =>
                           <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control placeholder="enter device-name..." className="mt-3"/>
                    <Form.Control type="number" placeholder="enter amount" className="mt-3"/>
                    <Form.Control lang="eng" type="file" className="mt-3"/>
                    <hr/>

                    
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-success" onClick={onHide}>Add</Button>
                <Button variant="outline-danger" onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
};

export default CreateDevice;