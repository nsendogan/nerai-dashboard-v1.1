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
import React, { useState} from 'react';
import Iframe from 'react-iframe';

// reactstrap components
import {
  Card,
  CardBody,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Popover,
  PopoverHeader,
  PopoverBody,
  Button
} from 'reactstrap';

// core components


let formGroupStyle = {
  marginBottom: '0.4em',
};

let titleStyle = {
  marginBottom: '0.4em',
};

const PopoverItem = props => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <span>
      <Button className="mr-1" color="secondary" id={props.id} type="button">
        {props.name}
      </Button>
      <Popover placement={'right'} isOpen={popoverOpen} target={props.id} toggle={toggle}>
        <PopoverHeader>{props.name}</PopoverHeader>
        <PopoverBody>{props.text}</PopoverBody>
      </Popover>
    </span>
  );
};


let Dashboard = () => {
  let [button, buttonSelected] = useState('');



  return (
    <>
      <div className="content">
        <Row>
          <Col md="9">
            <Card>
              <CardBody>
                <Iframe
                  url={button}
                  width="100%"
                  height="600vh"
                  id="myId"
                  className="myClassname"
                  display="initial"
                />
              </CardBody>
            </Card>
          </Col>
          <Col md="3">
            <Row>
              <Col lg="12">
                <Card className="card-stats">
                  <CardBody style={{ marginLeft: '1em' }}>
                    <Row>
                      <Col lg="12">
                        <div className="numbers">
                          <p className="card-category" style={titleStyle}>
                            Political Data
                            </p>
                          <p />
                        </div>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <FormGroup style={formGroupStyle}>
                          <Label check>
                            <Input type="radio" name="checkbox2" onChange={(event) => { event.preventDefault(); buttonSelected('https://app.powerbi.com/view?r=eyJrIjoiZWYyNDJiYjEtNzUzMC00MjYxLWIxMTUtNGIwN2FiNjViZjdhIiwidCI6ImY5MDNkZDE2LTI4MmUtNDBlMC1hODNmLWY1YjU0ZDcxODg4NiIsImMiOjh9') }} /> Political
                            Instability
                            </Label>
                        </FormGroup>
                        <FormGroup style={formGroupStyle}>
                          <Label check>
                            <Input type="radio" name="checkbox2" /> Regime Instability
                            </Label>
                        </FormGroup>
                        <FormGroup style={formGroupStyle}>
                          <Label check>
                            <Input type="radio" name="checkbox2" /> Political Risk
                            </Label>
                        </FormGroup>
                        <FormGroup style={formGroupStyle}>
                          <Label check>
                            <Input type="radio" name="checkbox2" /> Geo-Political Data
                            </Label>
                        </FormGroup>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <Card className="card-stats">
                  <CardBody style={{ marginLeft: '1em' }}>
                    <Row>
                      <Col lg="12">
                        <div className="numbers">
                          <p className="card-category" style={titleStyle}>
                            Financial Data
                            </p>
                          <p />
                        </div>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <FormGroup style={formGroupStyle}>
                          <Label check>
                            <Input type="radio" name="checkbox2" /> Economic
                            Instability
                            </Label>
                        </FormGroup>
                        <div style={{ marginLeft: '30px' }}>
                          <FormGroup style={formGroupStyle}>
                            <Label check>
                              <Input type="radio" name="checkbox2" onChange={(event) => { event.preventDefault(); buttonSelected('https://app.powerbi.com/view?r=eyJrIjoiY2Y4YmQ5OWMtZTA3NC00Y2YyLTllODQtMTc0ZjgyZmZjNWM5IiwidCI6ImY5MDNkZDE2LTI4MmUtNDBlMC1hODNmLWY1YjU0ZDcxODg4NiIsImMiOjh9') }} /> Average GDP
                            </Label>
                          </FormGroup>
                          <FormGroup style={formGroupStyle}>
                            <Label check>
                              <Input type="radio" name="checkbox2" onChange={(event) => { event.preventDefault(); buttonSelected('https://app.powerbi.com/view?r=eyJrIjoiODJiZDllMzMtYzlhZS00N2U4LTliYjctNGNkN2FkNjFmZDM0IiwidCI6ImY5MDNkZDE2LTI4MmUtNDBlMC1hODNmLWY1YjU0ZDcxODg4NiIsImMiOjh9') }} /> Inflation
                                  Instability
                            </Label>
                          </FormGroup>
                          <FormGroup style={formGroupStyle}>
                            <Label check>
                              <Input type="radio" name="checkbox2" onChange={(event) => { event.preventDefault(); buttonSelected('https://app.powerbi.com/view?r=eyJrIjoiNTliNTJiYTAtMGE4Yy00ZWFkLWJiZDEtYmE2N2M4ZjJjMDQ3IiwidCI6ImY5MDNkZDE2LTI4MmUtNDBlMC1hODNmLWY1YjU0ZDcxODg4NiIsImMiOjh9') }} /> Internet Usage
                            </Label>
                          </FormGroup>
                        </div>
                        <FormGroup style={formGroupStyle}>
                          <Label check>
                            <Input type="radio" name="checkbox2" /> Currency Data
                            </Label>
                        </FormGroup>
                        <FormGroup style={formGroupStyle}>
                          <Label check>
                            <Input type="radio" name="checkbox2" /> Risk Map
                            </Label>
                        </FormGroup>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <Card className="card-stats">
                  <CardBody style={{ marginLeft: '1em' }}>
                    <Row>
                      <Col lg="12">
                        <div className="numbers">
                          <p className="card-category" style={titleStyle}>
                            Social Data
                            </p>
                          <p />
                        </div>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <FormGroup style={formGroupStyle}>
                          <Label check>
                            <Input type="radio" name="checkbox2" /> Freedom of Speech
                            </Label>
                        </FormGroup>
                        <FormGroup style={formGroupStyle}>
                          <Label check>
                            <Input type="radio" name="checkbox2" /> Rule of Law
                            </Label>
                        </FormGroup>
                        <FormGroup style={formGroupStyle}>
                          <Label check>
                            <Input type="radio" name="checkbox2" /> Social
                            Unrest
                            </Label>
                        </FormGroup>
                      </Col>

                    </Row>

                  </CardBody>
                </Card>
                <Col>
                  <PopoverItem
                    name={'Source Description'}
                    id={'sourceDescription'}
                    text={
                      'Never hunt for data again. NERAI Datasets Layer is your one-stop data mall that lets you explore, analyze, create, and collaborate anywhere, anytime. Our data service gathers the most critical and credible data for almost every line of business and industry and delivers it straight to your application.  Trusted Data: Rest easy knowing that everyone in your organization is using the same trustworthy data from credible and transparent external sources. Comprehensive Data Library: Our vast library of proprietary and public data comes from a wide variety of providers and includes demographic, currency, weather, societal, business, and economic data. You can choose from many affordable data packages at a fixed fee. And we’re adding more on a regular basis.'
                    }
                  />
                </Col>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
}


export default Dashboard;
