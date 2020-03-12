import React, {useState} from 'react';
import Layout from 'layout';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LoginContext } from 'contexts/LoginContextContainer.js';
import PinkGirl from 'assets/pink-girl.png'
import PsychedelicBackground from 'assets/psychedelic-background.jpg'
import MysticCatPurple from 'assets/mystic-cat-purple.svg'

const Splash = () => {

  return (
    <LoginContext.Consumer>
      {loginContext => (
      <Layout
        splash={true}
      >
          <Row>
            <Col className="splash-img text-center" xs="12" sm="6">
              <img
                src={PinkGirl}
              />
            </Col>
            <Col className="splash-text text-secondary text-center m-0" xs="12" sm="6">
                  <h2 className='d-inline font-weight-bold'>Finding light through difficult emotions</h2>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="text-secondary text-center mt-5">
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
