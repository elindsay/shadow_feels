import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import { LoginContext } from 'contexts/LoginContextContainer.js';

const Login = (props) => {
  const [values, setValue] = useState({email: '', password: ''});

  const handleInputChange = e => {
    const {name, value} = e.target
    setValue({...values, [name]: value})
  }
  const handleLogin = loginCtx => async () => {
    await loginCtx.login(values.email, values.password);
  }

  return (
    <LoginContext.Consumer>
      {loginContext => (
  <Container>
    <Row className="justify-content-sm-center">
      <Col>
        <Row>
      <Col md="2" lg="3">
        &nbsp;
      </Col>
      <Col md="8" lg="6" className="pl-0 pr-0 mt-3">
          { loginContext.errors && (
            <Alert 
              variant="danger" 
              onClose={() => loginContext.clearErrors()}
              dismissible
            > { loginContext.errors } </Alert>
          )}
      </Col>
      <Col className="d-none d-md-block" md="2" lg="3">
        &nbsp;
      </Col>
    </Row>
  <Row>
    <Col className="d-none d-md-block" md="2" lg="3">
      &nbsp;
    </Col>
    <Col md="8" lg="6" className="bg-dark rounded px-3 py-2">
        <Row>
          <Col>
            <h2 className="mt-2 mb-4">Login Form</h2>
            </Col>
        </Row>
          <Form>
            <Form.Group controlId="loginEmail">
              <Form.Control
                type="email" 
                placeholder="Email" 
                name="email"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="loginPassword">
              <Form.Control 
                type="password" 
                placeholder="Password" 
                name="password"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="loginButton">
              <Button 
                variant="primary"
                onClick={handleLogin(loginContext)}
              >
                  Login
              </Button>
            </Form.Group>
          </Form> 
    </Col>
    <Col className="d-none d-md-block" md="2" lg="3">
      &nbsp;
    </Col>
  </Row>
    </Col>
      </Row>
        </Container>
      )}
    </LoginContext.Consumer>
  )
}

export default Login
