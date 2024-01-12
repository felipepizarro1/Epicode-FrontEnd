import React from 'react';
import { Component } from 'react';
import historyData from '../assets/history.json';
import fantasyData from '../assets/fantasy.json';
import horrorData from '../assets/horror.json';
import romanceData from '../assets/romance.json';
import scifiData from '../assets/scifi.json';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';
import SingleBookComponent from './SingleBookComponent';


export default class AllTheBooks extends Component {
  
  state= {
    books:[]
  };

  componentDidMount(){
    this.setState({
      books: [...historyData, ...fantasyData,...horrorData,...romanceData,...scifiData]
    })
  }


  render() {
    return(
    <>
    {console.log(this.state.books)}
    <Row xs={12} md={4} className="g-4">
    {this.state.books.map( (book,index) => ( //El map requiere paréntesis redonda no en llave para React (funciona como return)
      <SingleBookComponent book={book} index={index}/>
      
    ))}
    </Row>
    <h3>Total books: {this.state.books.length}</h3>
    </>
    
  )
    }
}
