import React, { useState } from 'react'
import './style.css'
import { Container, Row, Col, Button,Card, Modal } from 'react-bootstrap';
import card1 from '../../Images/card1.jpg';
import card2 from '../../Images/card2.jpg';
import card3 from '../../Images/card3.png'
import Footer from '../../Components/Footer';
import { GoogleLogin } from 'react-google-login';
import { Link } from 'react-router-dom';

const HomePage = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // const [modal, setModal] = useState(false)

    // const openSecondModal = () => {
    //   setModal(false)
    // }
    
    // const openModal = () => {
    //   setModal(true)
    // }

    const responseGoogle = (response) => {
      console.log(response);
    }

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

        <Container style={{ marginTop: '140px' }}>
          <Row>
            <Col md={12}>
            <h1 style={{ fontSize: '50px', color: 'white',fontFamily: 'Roboto Condensed, sans-serif', fontWeight: '500' }}> AN ACCELATOR TO <br /> YOUR STARTUP </h1>
           <Button variant="primary" style={{ borderRadius: '30px',marginTop: '50px',fontFamily: 'Roboto Condensed, sans-serif', width: '150px' }}>Join Now</Button>
            </Col>
          </Row>
        </Container>

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
    <Card.Title style={{ top: '0', position: 'absolute' }}>
      
    <Card.Title>
    
    </Card.Title>
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

<Modal show={show} onHide={handleClose} centered>
        <Modal.Header>
           <Modal.Title style={{ color: '#464646',fontFamily: 'Roboto Condensed, sans-serif', fontWeight: '700',paddingLeft: '135px'  }}> JOIN ENDEAVOUR</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Container>
          <Row>
            <Col md={6} className="m-auto">
            <GoogleLogin
            style={{ marginLeft: '10px', border: '1px solid black' }}
    clientId=""
    buttonText="Continue With Google"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
  />
            </Col>
          </Row>
        </Container>
        <Container style={{ marginTop: '0px' }}>
         <Row>
            <Col md={12}>
              <Container>
                <Row>
                  <Col md={12} className="m-auto">
                   <div style={{ marginLeft: '140px' }}>
                  
                   </div>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
         </Container><br/><br/>
         <Container>
           <Row>
             <Col md={12}>
               <Container>
                 <Row>
                   <Col md={12}>
                   <input type='text' placeholder='Enter Your Email' style={{ width: '100%', height: '40px', border: '1px solid #B1B1B1', padding: '5px', borderRadius: '4px' }} />
                   </Col><br /><br />
                   <Col md={12}>
                   <input type='password' placeholder='Enter Code' style={{ width: '100%', height: '40px', border: '1px solid #B1B1B1', padding: '5px',borderRadius: '4px' }} />
                   </Col><br /><br />
                   <Col md={12}>
                   <Button variant="primary" size="sm" style={{ width: '100%', padding: '8px',borderRadius: '4px' }}>
                      Continue
                  </Button>
                   </Col>
                 </Row>
               </Container>
             </Col>
           </Row>
         </Container>
            <br/>
         <Container>
           <Row>
             <Col md={12}>
               <Container>
                 <Row>
                  <Col md={12}>
                    <p style={{ fontSize: '13px', paddingLeft: '50px' }}> By joining I agree to receive emails from Endeavour.</p>
                  </Col>
                 </Row>
               </Container>
             </Col>
           </Row>
         </Container>

        </Modal.Body>
        <Modal.Footer>
        <Container>
           <Row>
             <Col md={12}>
               <Container>
                 <Row>
                  <Col md={12}>
                    <p style={{ fontSize: '13px', paddingLeft: '100px' }}> Already a member ?  <Link to="/" style={{ textDecoration: 'none', color: '#34D131' }}>
                      Signin
                    </Link> </p>
                  </Col>
                 </Row>
               </Container>
             </Col>
           </Row>
         </Container>
        </Modal.Footer>
      </Modal>

     
    


<Footer />

</>
  )
}

export default HomePage;