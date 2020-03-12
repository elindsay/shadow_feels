import React, {useState} from 'react';
import Layout from 'layout';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LoginContext } from 'contexts/LoginContextContainer.js';
import PinkGirl from 'assets/pink-girl.png'
import PsychedelicBackground from 'assets/psychedelic-background.jpg'

const Splash = () => {

  return (
    <LoginContext.Consumer>
      {loginContext => (
      <Layout
        splash={true}
      >
          <Row>
            <Col className="text-secondary">
              <img
                width="100%"
                src={PinkGirl}
              />
            </Col>
            <Col className="splash-text text-secondary text-center m-0">
                  <h2 className='d-inline font-weight-bold'>Finding light through difficult emotions</h2>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="text-secondary text-center">
              <h1 className="font-weight-light mystery">Journaling</h1>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="text-secondary text-center">
              <h1 className="font-weight-light mystery">Blog</h1>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="text-secondary text-center">
              <h1 className="font-weight-light mystery">Resources</h1>
            </Col>
          </Row>
        </Layout>
      )}
    </LoginContext.Consumer>
  )
}

export default Splash
