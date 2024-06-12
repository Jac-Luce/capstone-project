import React from 'react';
import { Container, Row, Col, Card, Tab, Tabs, ListGroup } from 'react-bootstrap';
import { useState, useContext, useEffect } from 'react';
import Logout from './Logout.jsx';
import MyBooking from '../booking-item/MyBooking.jsx';
import MyNavb from '../navbar/MyNavb.jsx';
import { AuthContext } from '../../contextProvider/AuthContextProvider.jsx';

export default function Profile2() {
    const [selected, setSelected] = useState("mydata");

    const {token} = useContext(AuthContext);

    const [data, setData] = useState({});

    const secondProfile = async () => {
        try {
            const response = await fetch('http://localhost:3001/profile', {
                method:'GET',
                headers: {'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json'}
            });
            if (response.ok) {
                const result = await response.json();
                //console.log(result);
                setData(result);
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect (() => {
        secondProfile();
    }, []);
  return (
    <>
    <MyNavb />
    <Container className='mt-5 pt-5'>
        <Row className='justify-content-md-center'>
            <Col md='3' xs='6'>
                <Card className='mt-5 border-white'>
                    <Card.Body>
                        <Card.Title>Ciao {data.name}</Card.Title>
                        <Card.Text>{data.email}</Card.Text>
                    </Card.Body>
                </Card>
                <Logout />
                
            </Col>
            <Col md='9' xs='12'>
            <Tabs
                id="controlled-tab-example"
                activeKey={selected}
                onSelect={(e) => setSelected(e)}
                className="mb-3 mt-5"
            >
                <Tab eventKey="mydata" title="I tuoi dati">
                    <ListGroup variant='flush'>
                        <ListGroup.Item>Nome: {data.name}</ListGroup.Item>
                        <ListGroup.Item>Cognome: {data.lastName}</ListGroup.Item>
                        <ListGroup.Item>Email: {data.email}</ListGroup.Item>
                        <ListGroup.Item>Password: {data.password}</ListGroup.Item>
                    </ListGroup>
                </Tab>
                <Tab eventKey="bookingList" title="Le tue prenotazioni">
                    <MyBooking />
                </Tab>
            </Tabs>
            </Col>
        </Row>
    </Container>
    </>
  )
}
