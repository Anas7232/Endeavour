import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import vector from '../../Images/vector.png'

const Footer = () => {
  return (
    <>
        <Container fluid style={{ borderTop: '1px solid rgba(177, 177, 177, 1)', borderBottom: '1px solid rgba(177, 177, 177, 1)', paddingBottom: '50px' }}>
      <Row style={{ padding: '0 10px' }}>
        <Col md={3} style={{ paddingLeft: '100px', paddingTop: '60px', paddingBottom: '30px' }}>
          <h5 style={{ fontWeight: '500' }}> Categories </h5>
        </Col>
        <Col md={3} style={{ paddingLeft: '100px', paddingTop: '60px' }}>
          <h5 style={{ fontWeight: '500' }}> About </h5>
          <h5 style={{ fontWeight: '400' }}> Career </h5>
          <h5 style={{ fontWeight: '400' }}> Partnerships </h5>
          <h5 style={{ fontWeight: '400' }}> Privacy Policy </h5>
          <h5 style={{ fontWeight: '400' }}> Terms of Service </h5>
          <h5 style={{ fontWeight: '400' }}> Investor Relations </h5>
        </Col>
        <Col md={3} style={{ paddingLeft: '100px', paddingTop: '60px' }}>
          <h5 style={{ fontWeight: '500' }}> Support </h5>
          <h5 style={{ fontWeight: '400' }}> Help & Support </h5>
          <h5 style={{ fontWeight: '400' }}> Trust & Safety </h5>
        </Col>
        <Col md={3} style={{ paddingLeft: '100px', paddingTop: '60px' }}>
          <h5 style={{ fontWeight: '500' }}> Community </h5>
          <h5 style={{ fontWeight: '400' }}> Events </h5>
          <h5 style={{ fontWeight: '400' }}> Blog </h5>
          <h5 style={{ fontWeight: '400' }}> Invite a Friend </h5>
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