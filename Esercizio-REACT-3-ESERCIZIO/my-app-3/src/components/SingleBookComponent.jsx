import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';

export default function SingleBookComponent({book, index}) {
  return (
    <>
    <Col key={index}>
      <Card style={{ width: '18rem' }}>
      
      <Card.Img variant="top" src={book.img} />
      <Card.Body>
      <Card.Title>{book.title}</Card.Title>
      
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
    </Card>
    </Col>
    </>
  )
}
