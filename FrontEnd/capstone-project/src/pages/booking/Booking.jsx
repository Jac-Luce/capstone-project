import React from 'react';
import { Container } from 'react-bootstrap';
import Login from '../../components/user/Login.jsx';

export default function Booking() {
  return (
    <Container fluid className='mt-5 mx-5 pt-3'>
        <h3 className='mt-5'>Per effettuare una prenotazione effettua il Login o registrati!</h3>
        <Login />
    </Container>
  )
}
