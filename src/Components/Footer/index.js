import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import vector from '../../Images/vector.png'

const Footer = () => {
  return (
    <>
        <Container fluid style={{ borderTop: '1px solid rgba(177, 177, 177, 1)', borderBottom: '1px solid rgba(177, 177, 177, 1)', paddingBottom: '50px' }}>
      <Row style={{ padding: '0 10px' }}>
        <Col md={3} style={{ paddingLeft: '100px', paddingTop: '60px', paddingBottom: '30px' }}>
          <h5 style={{ fontWeight: '500', fontSize: '17px' }}> Categories </h5>
        </Col>
        <Col md={3} style={{ paddingLeft: '100px', paddingTop: '60px' }}>
          <h5 style={{ fontWeight: '500', fontSize: '17px' }}> About </h5>
          <h5 style={{ fontWeight: '400', fontSize: '14px' }}> Career </h5>
          <h5 style={{ fontWeight: '400', fontSize: '14px' }}> Partnerships </h5>
          <h5 style={{ fontWeight: '400', fontSize: '14px' }}> Privacy Policy </h5>
          <h5 style={{ fontWeight: '400', fontSize: '14px' }}> Terms of Service </h5>
          <h5 style={{ fontWeight: '400', fontSize: '14px' }}> Investor Relations </h5>
        </Col>
        <Col md={3} style={{ paddingLeft: '100px', paddingTop: '60px' }}>
          <h5 style={{ fontWeight: '500', fontSize: '17px' }}> Support </h5>
          <h5 style={{ fontWeight: '400', fontSize: '14px' }}> Help & Support </h5>
          <h5 style={{ fontWeight: '400', fontSize: '14px' }}> Trust & Safety </h5>
        </Col>
        <Col md={3} style={{ paddingLeft: '100px', paddingTop: '60px' }}>
          <h5 style={{ fontWeight: '500', fontSize: '17px' }}> Community </h5>
          <h5 style={{ fontWeight: '400', fontSize: '14px' }}> Events </h5>
          <h5 style={{ fontWeight: '400', fontSize: '14px' }}> Blog </h5>
          <h5 style={{ fontWeight: '400', fontSize: '14px' }}> Invite a Friend </h5>
        </Col>
      </Row>
    </Container>

    <Container>
      <Row style={{ padding: '20px' }}>
        <Col md={8}>
          <Row >
            <Col sm={1}>
            <img src={vector} alt="vector" />
            </Col>
            <Col md={11}>
            <h5>Endeavour International Ltd. 2022</h5>
            </Col>
          </Row>
        </Col>
        <Col md={4}>
          <Row>
            <Col md={2}>  <i class="fa-brands fa-facebook"></i></Col>
            <Col md={2}> <i class="fa-brands fa-instagram"></i></Col>
            <Col md={2}>
            <i class="fa-brands fa-twitter"></i>
            </Col>
            <Col md={2}> <i class="fa-brands fa-linkedin"></i></Col>
            <Col md={2}> <i class="fa-solid fa-globe"></i></Col>
            <Col md={2}> English </Col>
          </Row>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Footer