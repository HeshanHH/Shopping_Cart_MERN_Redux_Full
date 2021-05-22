import React from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import Layout from '../../components/Layout/Layout';
import Input from '../../components/UI/Input/Input';

const Signup = (props) => {
  return (
    <div>
      <Layout>
        <Container>
          <Row style={{ marginTop: '50px' }}>
            <Col md={{ span: 6, offset: 3 }}>
              <Form>
                <Row>
                  <Col md={6}>
                    <Input
                      label="First Name"
                      type="text"
                      placeholder="First Name"
                      value=""
                      onChange={() => {}}
                    />

                    {/* <Form.Group controlId="formBasicPassword">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="text" placeholder="First Name" />
                    </Form.Group> */}
                  </Col>
                  <Col md={6}>
                    <Input
                      label="Last Name"
                      type="text"
                      placeholder="Last Name"
                      value=""
                      onChange={() => {}}
                    />
                  </Col>
                </Row>
                <Form.Group controlId="formBasicEmail">
                  <Input
                    label="Email"
                    type="email"
                    placeholder="Email"
                    value=""
                    onChange={() => {}}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Input
                    label="Password"
                    type="password"
                    placeholder="Password"
                    value=""
                    onChange={() => {}}
                  />
                </Form.Group>
                {/* <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Layout>
    </div>
  );
};

export default Signup;
