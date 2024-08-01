import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form, Row, Col, Image } from 'react-bootstrap';
function Discard({ dish, addtocartHandler }) {
    const [show, setShow] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleAddToCartAndClose = () => {
        addtocartHandler(dish.strMealThumb, dish.strMeal);
        handleClose();
    };
    return (
        <>
            <div className="col-md-3 mb-4">
                <div className="card special-dish-card">
                    <img src={dish.strMealThumb} className="card-img-top" alt={dish.title} />
                    <div className="card-body">
                        <h5 className="card-title">{dish.strMeal}</h5>
                        <div className="dish-rating">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStarHalfAlt} />
                        </div>
                        <Button variant="outline-light mt-3" onClick={handleShow}>
                            View Full Recipe
                        </Button>
                    </div>
                </div>
            </div>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{dish.strMeal}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col md={6}>
                            <Image src={dish.strMealThumb} fluid rounded />
                        </Col>
                        <Col md={6}>
                            <h5>{dish.description}</h5>
                            <Form>
                                <Form.Group controlId="formQuantity">
                                    <Form.Label>Quantity</Form.Label>

                                </Form.Group>
                                <h5 className="mt-3">Price:500</h5>

                            </Form>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleAddToCartAndClose}>
                        Add to Cart
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        close
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    );
}

export default Discard;
