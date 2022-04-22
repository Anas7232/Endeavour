import React from 'react'
import { Container, Row, Col,Form, Button } from 'react-bootstrap';
import Footer from '../Footer';
import Input from '../U';

const Profile = () => {

   

  return (
    <>
        <Container fluid style={{ borderBottom: '1px solid rgba(177, 177, 177, 1)'  }}>
            <Row>
                <Col md={12}>
                    <h2 style={{ padding: '40px 90px', color: 'rgba(137, 137, 137, 1)', fontWeight: '700', fontSize: '20px' }}> ENDEAVOUR </h2>
                </Col>
            </Row>
        </Container>

        <Container>
            <Row>
                <Col md={12}>
                    <h1 style={{ paddingLeft: '10px', paddingTop: '40px' , color: 'rgba(64, 65, 69, 1)', fontWeight: '400' }}> Create Your Profile </h1>
                </Col>
            </Row>
            <Row>
                <Col md={9} style={{ padding: '30px' }}>
                    <Row md={{ offset: 3, span: 6 }}>
                        <Col md={ 6}>
                            <Input 
                            label="First Name"
                            placeholder="First Name"
                            type="text"
                            value=""
                            onChange={() => {}}
                            />
                        </Col>
                        <Col md={ 6} style={{ paddingTop: '7px' }}>
                        <Input 
                            placeholder="Last Name"
                            type="text"
                            value=""
                            onChange={() => {}}
                            />
                        </Col>
                    </Row>
                    <Row md={{ offset: 3, span: 6 }}>
                        <Col md={ 6}>
                            <Input 
                            label="Username"
                            placeholder="Abc"
                            type="text"
                            value=""
                            onChange={() => {}}
                            />
                        </Col>
                        <Col md={ 6}>
                        <Input 
                            label="Contact Number"
                            placeholder="+123456789"
                            type="text"
                            value=""
                            onChange={() => {}}
                            />
                        </Col>
                    </Row>
                    <Row md={{ offset: 3, span: 6 }}>
                        <Col md={ 6}>
                            <Input 
                            label="Password"
                            placeholder="Password"
                            type="password"
                            value=""
                            onChange={() => {}}
                            />
                        </Col>
                        <Col md={ 6}>
                        <Input 
                            label="Confirm Password"
                            placeholder="Confirm Password"
                            type="password"
                            value=""
                            onChange={() => {}}
                            />
                        </Col>
                    </Row>
                    <Row md={{ offset: 3, span: 6 }}>
                        <Col md={ 6}>
                        <Form.Label style={{ color: 'rgba(101, 101, 101, 1)' }}> Current Country </Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option style={{ color: 'rgba(101, 101, 101, 1)' }}>Select</option>
                        </Form.Select>
                        </Col> 
                        <Col md={ 6}>
                        <Form.Label style={{ color: 'rgba(101, 101, 101, 1)' }}> Country Of Origin </Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option style={{ color: 'rgba(101, 101, 101, 1)' }}>Select</option>
                        </Form.Select>
                        </Col>
                    </Row><br />
                    <Row md={{ offset: 3, span: 6 }}>
                        <Col md={ 6}>
                        <Input 
                            label="LinkedIn profile Link"
                            placeholder="URL"
                            type="text"
                            value=""
                            onChange={() => {}}
                            />
                        </Col>
                    </Row>
                    <Row md={{ offset: 3, span: 6 }}>
                        <Col md={ 6}>
                        <Form.Label style={{ color: 'rgba(101, 101, 101, 1)' }}> I AM </Form.Label>
                            <Row md={{ span:5, offset:4 }}>
                                <Col md={2}>
                        ertert
                                </Col>
                                <Col md={2}>
                                    /
                                    </Col>
                                    <Col md={2}>
                                    wertwert
                                    </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row md={{ offset: 3, span: 6 }}>
                        <Col md={4} style={{ paddingTop: '20px' }}>
                            <Row>
                                <Col md={2}>
                                    <input type="radio" />
                            </Col>
                                <Col md={10}><p style={{ fontSize: '12px', fontWeight: '600' }}> By signing you agree to our <span style={{ borderBottom: '1px solid rgba(101, 101, 101, 1)' }}> Terms of use </span>  and <span style={{ borderBottom: '1px solid rgba(101, 101, 101, 1)' }}> privacy policy. </span>  </p></Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row md={{ offset: 3, span: 6 }}>
                        <Col md={4} style={{ paddingTop: '20px' }}>
                        <Button variant="primary" style={{ borderRadius: '20px', padding: '5px 25px' }}> Continue </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>

        <Footer />

    </>
  )
}

export default Profile