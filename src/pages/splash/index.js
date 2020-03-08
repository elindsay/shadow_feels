import React, {useState} from 'react';
import Layout from 'layout';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LoginContext } from 'contexts/LoginContextContainer.js';
import PinkGirl from 'assets/pink-girl.png'

const Splash = () => {

  return (
    <LoginContext.Consumer>
      {loginContext => (
        <Layout>
          <Row>
            <Col className="text-secondary">
              <img
                width="50%"
                src={PinkGirl}
              />
                  <h4 className='d-inline font-weight-light'>Finding light through difficult emotions</h4>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="text-secondary text-center">
              <h1 className="font-weight-light">Journaling</h1>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="text-secondary text-center">
              <h1 className="font-weight-light">Blog</h1>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="text-secondary text-center">
              <h1 className="font-weight-light">Resources</h1>
            </Col>
          </Row>
        </Layout>
      )}
    </LoginContext.Consumer>
  )
}

export default Splash
