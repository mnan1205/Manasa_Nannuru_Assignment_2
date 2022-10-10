import React, { useCallback, useState } from 'react';
import './HomeContent.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function HomeContent() {
    const [name, setName] = useState("Manasa Nannuru");
    const [description, setDescription] = useState("Hi, I am Manasa, a Computer Science Graduate at State Univeristy of New York, Albany");
    const [isModalOpen, setModalPopUp] = useState(false);
    const [modifiedName, setModifiedName] = useState("");
    const [modifiedDescription, setModifiedDescription] = useState("");

    const handleModifiedNameChange = useCallback((event) => {
        setModifiedName(event.target.value);
    }, []);

    const handleModifiedDescriptionChange = useCallback((event) => {
        setModifiedDescription(event.target.value);
    }, []);

    const onButtonClick = useCallback(() => {
        setModalPopUp(true);
    }, []);

    const onModalClose = useCallback(() => {
        setModalPopUp(false);
    }, []);

    const onSaveChange = useCallback(() => {
        const temp1 = modifiedName
        console.log(modifiedName)
        console.log(modifiedDescription)
        if (temp1 !== "") {
            setName(modifiedName);
        }
        if (modifiedDescription !== "") {
            setDescription(modifiedDescription);
        }
        setModalPopUp(false);
    }, [modifiedName,modifiedDescription]);

    return (
        <div className="home-content">
            <h4>{name}</h4>
            <body>{description}</body>
            {!isModalOpen ?
                <Button onClick={onButtonClick}>
                    Change name and description
                </Button> : <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Change Name and Description</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <InputGroup className="Name field">
                            <Form.Control
                                placeholder="Username"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                onChange={handleModifiedNameChange}
                            />
                        </InputGroup>
                        <InputGroup className="Description field">
                            <Form.Control
                                placeholder="description"
                                aria-label="description"
                                aria-describedby="basic-addon1"
                                onChange={handleModifiedDescriptionChange}
                            />
                        </InputGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={onModalClose}>Close</Button>
                        <Button variant="primary" onClick={onSaveChange}>Save changes</Button>
                    </Modal.Footer>
                </Modal.Dialog>}

        </div>
    );
}

export default HomeContent;