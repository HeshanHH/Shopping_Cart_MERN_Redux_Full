import React from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import Layout from '../../components/Layout/Layout';

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
                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="text" placeholder="First Name" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="text" placeholder="Last Name" />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
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