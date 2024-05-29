import React from 'react';
import radio from '../../asset/radio.jpg';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function BookHome() {
    const navigate = useNavigate();

    const bookNavigate = () => {
        navigate('/booking');
    };
  return (
    <Card>
        <Card.Img src={radio} alt='Booking image'/>
        <Card.ImgOverlay>
            <Button onClick={bookNavigate} variant='outline-dark'>Prenota qui il tuo appuntamento</Button>
        </Card.ImgOverlay>
    </Card>
  )
}