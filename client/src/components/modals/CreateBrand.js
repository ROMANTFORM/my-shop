import React from "react";
import { Button, Modal, Form } from 'react-bootstrap';

const CreateBrand = ({show, onHide}) => {   

        
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
                    Add Brand
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-success" onClick={onHide}>Add</Button>
                <Button variant="outline-danger" onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
};

export default CreateBrand;