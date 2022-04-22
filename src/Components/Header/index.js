import React, { useState } from 'react'
import './style.css'
import { Container, Row, Col, Button,Card, Modal } from 'react-bootstrap';
import card1 from '../../Images/card1.jpg';
import card2 from '../../Images/card2.jpg';
import card3 from '../../Images/card3.png'
import Footer from '../../Components/Footer';

const HomePage = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>


<div className="main-container">
        <nav>
            <div className="logo">
                SPORTSHOES.COM
            </div>
            <input type="checkbox" id="click" />
            <label for="click" class="menu-btn">
                <i className="fas fa-bars"></i>
            </label>
            <ul>
                <li><a href="#"> Show Case </a></li>
                <li><a href="#"> About Us </a></li>
                <li><a href="#" onClick={handleShow}> Signin In </a></li>
            </ul>
        </nav>

        <div className='text_container'>
           <div className='text_content'>
           <h1 style={{ fontSize: '80px', color: 'white', paddingTop: '120px', paddingLeft: '100px',fontFamily: 'Roboto Condensed, sans-serif', fontWeight: '600' }}> AN ACCELATOR TO <br /> YOUR STARTUP </h1>
           <Button variant="primary" style={{ borderRadius: '30px',marginTop: '50px', marginLeft: '100px', padding: '10px 50px',fontFamily: 'Roboto Condensed, sans-serif' }}>Join Now</Button>
           </div>
        </div>

    </div>


    <div className="main_container">
  <div className="text">
      <h2 style={{ fontSize: '22px', color: 'rgba(179, 179, 179, 1)', fontWeight: '700',paddingTop: '4px',fontFamily: 'Roboto Condensed, sans-serif'}}> TRUSTED BY : </h2>
  </div>
</div> 

<br /> <br />

<Container>
   <Row>
       <Col md={4}>
           <Row>
               <Col p-3 md={10}>
                   <h2 style={{ color: 'rgba(78, 78, 78, 1)', fontSize: '30px',fontFamily: 'Roboto Condensed, sans-serif',fontWeight: '600' }}> STARTUP</h2>
                   <p style={{ color: 'rgba(78, 78, 78, 1)', fontSize: '15px',fontFamily: 'Roboto Condensed, sans-serif' }}>
                   Are you a Pakistani startup looking for international partnerships and investment? The Startup Punjab Portal will offer you exposure to International investors, markets etc.
                   </p>
               </Col>
           </Row>
       </Col>
       <Col md={4}>
       <Row>
               <Col md={10}>
               <h2 style={{ color: 'rgba(78, 78, 78, 1)', fontSize: '30px', fontFamily: 'Roboto Condensed, sans-serif',fontWeight: '600' }}> INVESTOR</h2>
                   <p style={{ color: 'rgba(78, 78, 78, 1)', fontSize: '15px',fontFamily: 'Roboto Condensed, sans-serif' }}>
                   Are you an investor looking for investment opportunities in Pakistani startup ecosystem? The Invest startup Punjab Portal will offer you a broad choice of viable projects..
                   </p>
               </Col>
           </Row>
       </Col>
       <Col md={4}>
       <Row>
               <Col md={10}>
               <h2 style={{ color: 'rgba(78, 78, 78, 1)', fontSize: '30px', fontFamily: 'Roboto Condensed, sans-serif',fontWeight: '600' }}>INCUBATION</h2>
                   <p style={{ color: 'rgba(78, 78, 78, 1)', fontSize: '15px',fontFamily: 'Roboto Condensed, sans-serif' }}>
                   Plan9 conduct it's flagship event, The Launchpad, by which we induct 15 startups selected through our flagship competition..
                   </p>
               </Col>
           </Row>
       </Col>
   </Row>
</Container>

<Container>
        <Row style={{ marginTop: '100px', height: '75%' }}>
            <Col md={4} className="d-block">
            <Card style={{border: 'none', paddingBottom: '10px', height: '80%' }} className="m-auto">
  <Card.Img variant="top" src={card1} />
  <Card.Body >
    <Card.Title style={{ position: 'absolute', top: '0', color: '#fff', display: 'flex', justifyContent: 'space-between' }}>
    <Card.Title></Card.Title>
    </Card.Title>
  
    
  </Card.Body>
</Card>
            </Col>
            <Col md={4} className="d-block">
            <Card style={{border: 'none', paddingBottom: '10px' }} className="m-auto">
  <Card.Img variant="top" src={card2} />
  <Card.Body>
    <Card.Title style={{ position: 'absolute', top: '0', color: '#fff' }}></Card.Title>
   
  </Card.Body>
</Card>
            </Col>
            <Col md={4} className="d-block">
            <Card style={{border: 'none', paddingBottom: '10px' }} className="m-auto">
  <Card.Img variant="top" src={card3} />
  <Card.Body>
    <Card.Title style={{ position: 'absolute', top: '0', color: '#fff' }}></Card.Title>
    </Card.Body>
</Card>
            </Col>
        </Row>
    </Container>

<Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>ENDEAVOUR</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="primary" onClick={handleClose}>
           
          </Button> */}
        </Modal.Footer>
      </Modal>

<Footer />

</>
  )
}

export default HomePage;