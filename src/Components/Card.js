import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import './Card.css';
import beach from './images/beach.jpg'
import Hil from './images/Hil.jpg'
import mall from './images/mall.jpg'
import theme from './images/theme.jpg'
import wl from './images/wl.jpg'
import covai from './images/covai.jpg'





function AutoLayoutExample() {
    return (
        <div >

            <Container className='c'>

                <Row>
                    <Col className="mt-4">
                        <Card className='card' style={{ width: '18rem' }}
                        >
                            <Card.Img variant="top" src={covai} />
                            <Card.Body>
                                <Card.Title>religion</Card.Title>
                                <Card.Text className='ct'>
                                A temple is a religious building that's meant for worshipping or praying
                                </Card.Text>
                                <Button className='btn' variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className="mt-4">

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={beach} />
                            <Card.Body>
                                <Card.Title>Beach</Card.Title>
                                <Card.Text>
                                    a strip of land covered with sand, shingle, or small stones at the edge of a body of water.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>

                    </Col>

                    <Col className="mt-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={Hil} />
                            <Card.Body>
                                <Card.Title>Nature</Card.Title>
                                <Card.Text>
                                    a town in the low mountains of the Indian subcontinent, popular as a holiday resort during the hot season.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>


                <Row>
                    <Col className="mt-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={mall} />
                            <Card.Body>
                                <Card.Title>Mall</Card.Title>
                                <Card.Text>
                                    a large enclosed shopping area from which traffic is excluded.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>


                    <Col className="mt-4">

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={theme} />
                            <Card.Body>
                                <Card.Title>Theme park</Card.Title>
                                <Card.Text>
                                    an amusement park in which the structures and settings are based on a central theme.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>

                    </Col>

                    <Col className="mt-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={wl} />
                            <Card.Body>
                                <Card.Title>Wild life</Card.Title>
                                <Card.Text>
                                    Wildlife tourism, in its simplest sense, is interacting with wild animals in their natural habitat, either by actively (e.g. hunting/collection)
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col className="mt-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={mall} />
                            <Card.Body>
                                <Card.Title>Mall</Card.Title>
                                <Card.Text>
                                    a large enclosed shopping area from which traffic is excluded.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>


                    <Col className="mt-4">

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={theme} />
                            <Card.Body>
                                <Card.Title>Theme park</Card.Title>
                                <Card.Text>
                                    an amusement park in which the structures and settings are based on a central theme.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>

                    </Col>

                    <Col className="mt-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={wl} />
                            <Card.Body>
                                <Card.Title>Wild life</Card.Title>
                                <Card.Text>
                                    Wildlife tourism, in its simplest sense, is interacting with wild animals in their natural habitat, either by actively (e.g. hunting/collection)
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div >




    );
}

export default AutoLayoutExample;