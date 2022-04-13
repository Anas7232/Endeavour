import React from "react";
import './style.css'
import { Container, Row, Col } from 'react-bootstrap';

const Header = () => {
  return (

    <>
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

<br /><br />






    </>
    
  

  );
};

export default Header;
