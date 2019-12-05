/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState } from 'react';
// react plugin used to create charts
import Iframe from 'react-iframe';

// reactstrap components
import {
  Card,
  CardBody,
  Row,
  Col,
  FormGroup,
  Input,
  Button,
  Popover,
  PopoverHeader,
  PopoverBody,
} from 'reactstrap';
// core components

const PopoverItem = props => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <span>
      <Button className="mr-1" color="secondary" id={props.name} type="button">
        {props.name}
      </Button>
      <Popover placement={'Bottom'} isOpen={popoverOpen} target={props.name} toggle={toggle}>
        <PopoverHeader>{props.name}</PopoverHeader>
        <PopoverBody>{props.text}</PopoverBody>
      </Popover>
    </span>
  );
};

class Dashboard extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row style={{ marginLeft: '3vw' }}>
            <Col>
              <div
                style={{
                  borderColor: 'rgb(204,204,204)',
                  borderStyle: 'solid',
                  borderRadius: '8px',
                  borderWidth: '1px',
                  backgroundColor: 'white',
                  height: '100%',
                  paddingTop: '6px',
                }}
              >
                <Row style={{ marginLeft: '1vw' }}>
                  <Col lg="4">
                    <FormGroup style={{ color: 'rgb(128,128,128)' }}>
                      <Input type="radio" name="radio2" /> 15 Days
                    </FormGroup>
                  </Col>
                  <Col lg="4">
                    <FormGroup style={{ color: 'rgb(128,128,128)' }}>
                      <Input type="radio" name="radio2" /> 1 Month
                    </FormGroup>
                  </Col>
                  <Col lg="4">
                    <FormGroup style={{ color: 'rgb(128,128,128)' }}>
                      <Input type="radio" name="radio2" /> 6 Months
                    </FormGroup>
                  </Col>
                  <Col lg="4">
                    <FormGroup style={{ color: 'rgb(128,128,128)' }}>
                      <Input type="radio" name="radio2" defaultChecked /> 1 Year
                    </FormGroup>
                  </Col>
                  <Col lg="4">
                    <FormGroup style={{ color: 'rgb(128,128,128)' }}>
                      <Input type="radio" name="radio2" /> 3 Years
                    </FormGroup>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col>
              <div
                style={{
                  borderColor: 'rgb(204,204,204)',
                  borderStyle: 'solid',
                  borderRadius: '8px',
                  borderWidth: '1px',
                  backgroundColor: 'white',
                  height: '100%',
                  paddingTop: '6px',
                }}
              >
                <Row style={{ marginLeft: '3vw', marginTop: '1vw' }}>
                  <Col lg="auto">
                    <FormGroup style={{ color: 'rgb(128,128,128)' }}>
                      <Input type="radio" name="radio3" defaultChecked /> Political
                    </FormGroup>
                  </Col>
                  <Col lg="auto">
                    <FormGroup style={{ color: 'rgb(128,128,128)' }}>
                      <Input type="radio" name="radio3" /> Financial
                    </FormGroup>
                  </Col>
                  <Col lg="auto">
                    <FormGroup style={{ color: 'rgb(128,128,128)' }}>
                      <Input type="radio" name="radio3" /> Social
                    </FormGroup>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col>
              <PopoverItem
                name={'Background'}
                text={
                  'We built a neural network model that predicts the socio-political crisis for most of the countries by looking at the news data. The model also creates latent factors that signals socio-political changes. We run an unsupervised clustering algorithm on the latent factors to identify phase changes for each country. Those clusters are demonstrated in two different representation: one on a UMAP (Unified Manifold Approximation and Projection; and one on a PCA (Principal Component Analysis); in order to clearly show phase jumps.'
                }
              />
              <PopoverItem
                name={'Process'}
                text={
                  'We took the domestic political crisis data, which is hand coded by the experts and used it as the outcome classifier for the training. (available from 2001 to 2014). Then, we trained our AI model for the time period from 2001 to 2014. We ran our model from 1979 to 2015 to predict an instability score for each country in each year. Our model successfully catches important political instability peaks for many countries during the time period which it was not trained for. '
                }
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col md="12">
              <Card>
                <CardBody>
                  <Iframe
                    url="https://app.powerbi.com/view?r=eyJrIjoiODVlYTg5NjktM2E5Ni00ODcxLWI3MjYtODYxN2IyNjg2ODExIiwidCI6ImY5MDNkZDE2LTI4MmUtNDBlMC1hODNmLWY1YjU0ZDcxODg4NiIsImMiOjh9"
                    width="100%"
                    height="600vh"
                    id="myId"
                    className="myClassname"
                    display="initial"
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Dashboard;
