import React from "react";
import Content from "../layout/content/Content";
import Head from "../layout/head/Head";
import {
  Col,
  Row,
  Card,
  CardHeader,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Input,
  ButtonGroup,} from "reactstrap";
import Slider from "react-slick";
import { Icon, Button } from "../components/Component";

const SliderSettings = {
  className: "slider-init plan-list",
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  slide: "li",
  arrows: false,
};

const Home = () => {
  return (
    <React.Fragment>
      <Head title="Home" />
      <Content>
        <div className="row">
          <div className="col w-75 p-0">
            <Slider {...SliderSettings}>
              <Col className="p-1">
                <Card className="card-bordered p-1">
                  <Row className="ml-1 mr-0 fs-10px justify-content-between">
                    <div className="row">
                      <Icon name="dribbble" className="m-1 "/>
                      <CardText>Chinese Super League</CardText>
                    </div>
                    <CardText>19.06. 11:30</CardText> 
                  </Row>
                  <Row className="m-1 fw-bold justify-content-between">
                    <CardText>Odds BK</CardText>
                    <CardText>-</CardText> 
                    <CardText>Molde FK</CardText>
                  </Row>
                  <Row className="justify-content-center">
                    <Button color="white" outline className="btn-outline-primary btn-dim mr-1">3,25</Button>
                    <Button color="white" outline className="btn-outline-primary btn-dim mr-1">3,25</Button>
                    <Button color="white" outline className="btn-outline-primary btn-dim">3,25</Button>
                  </Row>
                </Card>
              </Col>
              <Col className="p-1">
                <Card className="card-bordered p-1">
                  <Row className="ml-1 mr-0 fs-10px justify-content-between">
                    <div className="row">
                      <Icon name="dribbble" className="m-1 "/>
                      <CardText>Chinese Super League</CardText>
                    </div>
                    <CardText>19.06. 11:30</CardText> 
                  </Row>
                  <Row className="m-1 fw-bold justify-content-between">
                    <CardText>Odds BK</CardText>
                    <CardText>-</CardText> 
                    <CardText>Molde FK</CardText>
                  </Row>
                  <Row className="justify-content-center">
                    <Button color="white" outline className="btn-outline-primary btn-dim mr-1">3,25</Button>
                    <Button color="white" outline className="btn-outline-primary btn-dim mr-1">3,25</Button>
                    <Button color="white" outline className="btn-outline-primary btn-dim">3,25</Button>
                  </Row>
                </Card>
              </Col>
              <Col className="p-1">
                <Card className="card-bordered p-1">
                  <Row className="ml-1 mr-0 fs-10px justify-content-between">
                    <div className="row">
                      <Icon name="dribbble" className="m-1 "/>
                      <CardText>Chinese Super League</CardText>
                    </div>
                    <CardText>19.06. 11:30</CardText> 
                  </Row>
                  <Row className="m-1 fw-bold justify-content-between">
                    <CardText>Odds BK</CardText>
                    <CardText>-</CardText> 
                    <CardText>Molde FK</CardText>
                  </Row>
                  <Row className="justify-content-center">
                    <Button color="white" outline className="btn-outline-primary btn-dim mr-1">3,25</Button>
                    <Button color="white" outline className="btn-outline-primary btn-dim mr-1">3,25</Button>
                    <Button color="white" outline className="btn-outline-primary btn-dim">3,25</Button>
                  </Row>
                </Card>
              </Col>
              <Col className="p-1">
                <Card className="card-bordered p-1">
                  <Row className="ml-1 mr-0 fs-10px justify-content-between">
                    <div className="row">
                      <Icon name="dribbble" className="m-1"/>
                      <CardText>Chinese Super League</CardText>
                    </div>
                    <CardText>19.06. 11:30</CardText> 
                  </Row>
                  <Row className="m-1 fw-bold justify-content-between">
                    <CardText>Odds BK</CardText>
                    <CardText>-</CardText> 
                    <CardText>Molde FK</CardText>
                  </Row>
                  <Row className="justify-content-center">
                    <Button color="white" outline className="btn-outline-primary btn-dim mr-1">3,25</Button>
                    <Button color="white" outline className="btn-outline-primary btn-dim mr-1">3,25</Button>
                    <Button color="white" outline className="btn-outline-primary btn-dim">3,25</Button>
                  </Row>
                </Card>
              </Col>
            </Slider>
            <div className="d-flex m-1 border-bottom border-primary">
              <div className="mr-auto p-2 bg-primary text-light">LIVE</div>
              <ButtonGroup>
                <Button className="btn-light btn-dim">Soccer</Button>
                <Button className="btn-light btn-dim">Basketball</Button>
                <Button className="btn-light btn-dim">Baseball</Button>
                <Button className="btn-light btn-dim">Tennis</Button>
              </ButtonGroup>
            </div>
            <Row className="justify-content-end m-1">
              <div className="col-3 m-1 pr-0">
                <Input type="select" name="select">
                  <option value="tip">Tip</option>
                  <option value="rest_of_match">Rest of match</option>
                  <option value="over_under">over under</option>
                  <option value="next_goal">Next Goal</option>
                  <option value="ht_rest_of_match">HT Rest of match</option>
                  <option value="ht_next_goal">HT Next Goal</option>
                  <option value="ht_over_under">HT over under</option>
                  <option value="ht_tip">HT Tip</option>
                </Input>
              </div>
              <div className="col-3 m-1 p-0">
                <Input type="select" name="select">
                  <option value="rest_of_match">Rest of match</option>
                  <option value="tip">Tip</option>
                  <option value="over_under">over under</option>
                  <option value="next_goal">Next Goal</option>
                  <option value="ht_rest_of_match">HT Rest of match</option>
                  <option value="ht_next_goal">HT Next Goal</option>
                  <option value="ht_over_under">HT over under</option>
                  <option value="ht_tip">HT Tip</option>
                </Input>
              </div>
            </Row>
            <Row className="m-1 bg-lighter justify-content-end">
              <div className="col-1">1</div>
              <div className="col-1">x</div>
              <div className="col-1">2</div>
              <div className="col-1">1</div>
              <div className="col-1">x</div>
              <div className="col-1">2</div>
            </Row>
            <Row className="m-1 mb-2">
                <Col lg="1" className="pr-0">
                  <div className="fw-bold fs-16px">45'</div>
                  <div className="text-danger fs-11px">LIVE</div>
                </Col>
                <Col lg="1" className="p-0 fs-20px align-self-center">
                  <Icon name="bar-chart"/>
                </Col>
                <Col lg="4" className="p-0">
                  <div className="row">IK Start</div>
                  <div className="row">Stabaek Fotball</div>
                </Col>
                <Col className="align-self-center">
                <Row>
                  <div className="justify-content-center">
                    <Button color="white" outline className="btn-outline-light btn-sm btn-dim mr-1">3,25</Button>
                    <Button color="white" outline className="btn-outline-light btn-sm btn-dim mr-1">3,25</Button>
                    <Button color="white" outline className="btn-outline-light btn-sm btn-dim">3,25</Button>
                  </div>
                </Row>
                </Col>
                <Col className="align-self-center">
                <Row>
                  <div className="justify-content-center">
                    <Button color="white" outline className="btn-outline-light btn-sm btn-dim mr-1">3,25</Button>
                    <Button color="white" outline className="btn-outline-light btn-sm btn-dim mr-1">3,25</Button>
                    <Button color="white" outline className="btn-outline-light btn-sm btn-dim">3,25</Button>
                  </div>
                </Row>
                </Col>
            </Row>
            <Row className="m-1 mb-2">
                <Col lg="1" className="pr-0">
                  <div className="fw-bold fs-16px">45'</div>
                  <div className="text-danger fs-11px">LIVE</div>
                </Col>
                <Col lg="1" className="p-0 fs-20px align-self-center">
                  <Icon name="bar-chart"/>
                </Col>
                <Col lg="4" className="p-0">
                  <div className="row">IK Start</div>
                  <div className="row">Stabaek Fotball</div>
                </Col>
                <Col className="align-self-center">
                <Row>
                  <div className="justify-content-center">
                    <Button color="white" outline className="btn-outline-light btn-sm btn-dim mr-1">3,25</Button>
                    <Button color="white" outline className="btn-outline-light btn-sm btn-dim mr-1">3,25</Button>
                    <Button color="white" outline className="btn-outline-light btn-sm btn-dim">3,25</Button>
                  </div>
                </Row>
                </Col>
                <Col className="align-self-center">
                <Row>
                  <div className="justify-content-center">
                    <Button color="white" outline className="btn-outline-light btn-sm btn-dim mr-1">3,25</Button>
                    <Button color="white" outline className="btn-outline-light btn-sm btn-dim mr-1">3,25</Button>
                    <Button color="white" outline className="btn-outline-light btn-sm btn-dim">3,25</Button>
                  </div>
                </Row>
                </Col>
            </Row>
            <Row className="m-1 mb-2">
                <Col lg="1" className="pr-0">
                  <div className="fw-bold fs-16px">45'</div>
                  <div className="text-danger fs-11px">LIVE</div>
                </Col>
                <Col lg="1" className="p-0 fs-20px align-self-center">
                  <Icon name="bar-chart"/>
                </Col>
                <Col lg="4" className="p-0">
                  <div className="row">IK Start</div>
                  <div className="row">Stabaek Fotball</div>
                </Col>
                <Col className="align-self-center">
                <Row>
                  <div className="justify-content-center">
                    <Button color="white" outline className="btn-outline-light btn-sm btn-dim mr-1">3,25</Button>
                    <Button color="white" outline className="btn-outline-light btn-sm btn-dim mr-1">3,25</Button>
                    <Button color="white" outline className="btn-outline-light btn-sm btn-dim">3,25</Button>
                  </div>
                </Row>
                </Col>
                <Col className="align-self-center">
                <Row>
                  <div className="justify-content-center">
                    <Button color="white" outline className="btn-outline-light btn-sm btn-dim mr-1">3,25</Button>
                    <Button color="white" outline className="btn-outline-light btn-sm btn-dim mr-1">3,25</Button>
                    <Button color="white" outline className="btn-outline-light btn-sm btn-dim">3,25</Button>
                  </div>
                </Row>
                </Col>
            </Row>
            <Row className="m-1 mb-2">
                <Col lg="1" className="pr-0">
                  <div className="fw-bold fs-16px">45'</div>
                  <div className="text-danger fs-11px">LIVE</div>
                </Col>
                <Col lg="1" className="p-0 fs-20px align-self-center">
                  <Icon name="bar-chart"/>
                </Col>
                <Col lg="4" className="p-0">
                  <div className="row">IK Start</div>
                  <div className="row">Stabaek Fotball</div>
                </Col>
                <Col className="align-self-center">
                <Row>
                  <div className="justify-content-center">
                    <Button color="white" outline className="btn-outline-light btn-sm btn-dim mr-1">3,25</Button>
                    <Button color="white" outline className="btn-outline-light btn-sm btn-dim mr-1">3,25</Button>
                    <Button color="white" outline className="btn-outline-light btn-sm btn-dim">3,25</Button>
                  </div>
                </Row>
                </Col>
                <Col className="align-self-center">
                <Row>
                  <div className="justify-content-center">
                    <Button color="white" outline className="btn-outline-light btn-sm btn-dim mr-1">3,25</Button>
                    <Button color="white" outline className="btn-outline-light btn-sm btn-dim mr-1">3,25</Button>
                    <Button color="white" outline className="btn-outline-light btn-sm btn-dim">3,25</Button>
                  </div>
                </Row>
                </Col>
            </Row>
            <Row className="m-1 mb-2">
                <Col lg="1" className="pr-0">
                  <div className="fw-bold fs-16px">45'</div>
                  <div className="text-danger fs-11px">LIVE</div>
                </Col>
                <Col lg="1" className="p-0 fs-20px align-self-center">
                  <Icon name="bar-chart"/>
                </Col>
                <Col lg="4" className="p-0">
                  <div className="row">IK Start</div>
                  <div className="row">Stabaek Fotball</div>
                </Col>
                <Col className="align-self-center">
                <Row>
                  <div className="justify-content-center">
                    <Button color="white" outline className="btn-outline-light btn-sm btn-dim mr-1">3,25</Button>
                    <Button color="white" outline className="btn-outline-light btn-sm btn-dim mr-1">3,25</Button>
                    <Button color="white" outline className="btn-outline-light btn-sm btn-dim">3,25</Button>
                  </div>
                </Row>
                </Col>
                <Col className="align-self-center">
                <Row>
                  <div className="justify-content-center">
                    <Button color="white" outline className="btn-outline-light btn-sm btn-dim mr-1">3,25</Button>
                    <Button color="white" outline className="btn-outline-light btn-sm btn-dim mr-1">3,25</Button>
                    <Button color="white" outline className="btn-outline-light btn-sm btn-dim">3,25</Button>
                  </div>
                </Row>
                </Col>
            </Row>
            <Row className="m-1 mb-2">
                <Col lg="1" className="pr-0">
                  <div className="fw-bold fs-16px">45'</div>
                  <div className="text-danger fs-11px">LIVE</div>
                </Col>
                <Col lg="1" className="p-0 fs-20px align-self-center">
                  <Icon name="bar-chart"/>
                </Col>
                <Col lg="4" className="p-0">
                  <div className="row">IK Start</div>
                  <div className="row">Stabaek Fotball</div>
                </Col>
                <Col className="align-self-center">
                <Row>
                  <div className="justify-content-center">
                    <Button color="white" outline className="btn-outline-light btn-sm btn-dim mr-1">3,25</Button>
                    <Button color="white" outline className="btn-outline-light btn-sm btn-dim mr-1">3,25</Button>
                    <Button color="white" outline className="btn-outline-light btn-sm btn-dim">3,25</Button>
                  </div>
                </Row>
                </Col>
                <Col className="align-self-center">
                <Row>
                  <div className="justify-content-center">
                    <Button color="white" outline className="btn-outline-light btn-sm btn-dim mr-1">3,25</Button>
                    <Button color="white" outline className="btn-outline-light btn-sm btn-dim mr-1">3,25</Button>
                    <Button color="white" outline className="btn-outline-light btn-sm btn-dim">3,25</Button>
                  </div>
                </Row>
                </Col>
            </Row>
            <Row className="m-1 mb-2">
                <Col lg="1" className="pr-0">
                  <div className="fw-bold fs-16px">45'</div>
                  <div className="text-danger fs-11px">LIVE</div>
                </Col>
                <Col lg="1" className="p-0 fs-20px align-self-center">
                  <Icon name="bar-chart"/>
                </Col>
                <Col lg="4" className="p-0">
                  <div className="row">IK Start</div>
                  <div className="row">Stabaek Fotball</div>
                </Col>
                <Col className="align-self-center">
                <Row>
                  <div className="justify-content-center">
                    <Button color="white" outline className="btn-outline-light btn-sm btn-dim mr-1">3,25</Button>
                    <Button color="white" outline className="btn-outline-light btn-sm btn-dim mr-1">3,25</Button>
                    <Button color="white" outline className="btn-outline-light btn-sm btn-dim">3,25</Button>
                  </div>
                </Row>
                </Col>
                <Col className="align-self-center">
                <Row>
                  <div className="justify-content-center">
                    <Button color="white" outline className="btn-outline-light btn-sm btn-dim mr-1">3,25</Button>
                    <Button color="white" outline className="btn-outline-light btn-sm btn-dim mr-1">3,25</Button>
                    <Button color="white" outline className="btn-outline-light btn-sm btn-dim">3,25</Button>
                  </div>
                </Row>
                </Col>
            </Row>
            <Row className="m-1 mb-2">
                <Col lg="1" className="pr-0">
                  <div className="fw-bold fs-16px">45'</div>
                  <div className="text-danger fs-11px">LIVE</div>
                </Col>
                <Col lg="1" className="p-0 fs-20px align-self-center">
                  <Icon name="bar-chart"/>
                </Col>
                <Col lg="4" className="p-0">
                  <div className="row">IK Start</div>
                  <div className="row">Stabaek Fotball</div>
                </Col>
                <Col className="align-self-center">
                <Row>
                  <div className="justify-content-center">
                    <Button color="white" outline className="btn-outline-light btn-sm btn-dim mr-1">3,25</Button>
                    <Button color="white" outline className="btn-outline-light btn-sm btn-dim mr-1">3,25</Button>
                    <Button color="white" outline className="btn-outline-light btn-sm btn-dim">3,25</Button>
                  </div>
                </Row>
                </Col>
                <Col className="align-self-center">
                <Row>
                  <div className="justify-content-center">
                    <Button color="white" outline className="btn-outline-light btn-sm btn-dim mr-1">3,25</Button>
                    <Button color="white" outline className="btn-outline-light btn-sm btn-dim mr-1">3,25</Button>
                    <Button color="white" outline className="btn-outline-light btn-sm btn-dim">3,25</Button>
                  </div>
                </Row>
                </Col>
            </Row>
            <Row className="m-1 mb-2">
                <Col lg="1" className="pr-0">
                  <div className="fw-bold fs-16px">45'</div>
                  <div className="text-danger fs-11px">LIVE</div>
                </Col>
                <Col lg="1" className="p-0 fs-20px align-self-center">
                  <Icon name="bar-chart"/>
                </Col>
                <Col lg="4" className="p-0">
                  <div className="row">IK Start</div>
                  <div className="row">Stabaek Fotball</div>
                </Col>
                <Col className="align-self-center">
                <Row>
                  <div className="justify-content-center">
                    <Button color="white" outline className="btn-outline-light btn-sm btn-dim mr-1">3,25</Button>
                    <Button color="white" outline className="btn-outline-light btn-sm btn-dim mr-1">3,25</Button>
                    <Button color="white" outline className="btn-outline-light btn-sm btn-dim">3,25</Button>
                  </div>
                </Row>
                </Col>
                <Col className="align-self-center">
                <Row>
                  <div className="justify-content-center">
                    <Button color="white" outline className="btn-outline-light btn-sm btn-dim mr-1">3,25</Button>
                    <Button color="white" outline className="btn-outline-light btn-sm btn-dim mr-1">3,25</Button>
                    <Button color="white" outline className="btn-outline-light btn-sm btn-dim">3,25</Button>
                  </div>
                </Row>
                </Col>
            </Row>
          </div>
          {/* Current Bets & Tiptorro App */}
          <div className="col">
          <Card className="card-bordered text-center">
              <CardBody>
                <CardTitle className="fw-bold border-bottom pb-2">BETSLIP</CardTitle>
                <CardText>
                  Your betslip is still empty.
                  Select your bets now.
                </CardText>
              </CardBody>
            </Card>
            <Card className="card-bordered text-center mt-1">
                <CardHeader className="border-bottom bg-dark text-light fw-bold">
                  Winner of the week
                </CardHeader>
                <CardBody className="card-inner">
                  <div className="d-flex flex-column">
                    <div className="d-flex flex-row justify-content-between">
                      <div>1. an...3</div><div className="text-soft mb-1">8267,90 €</div>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                      <div>1. an...3</div><div className="text-soft mb-1">8267,90 €</div>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                      <div>1. an...3</div><div className="text-soft mb-1">8267,90 €</div>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                      <div>1. an...3</div><div className="text-soft mb-1">8267,90 €</div>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                      <div>1. an...3</div><div className="text-soft mb-1">8267,90 €</div>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                      <div>1. an...3</div><div className="text-soft mb-1">8267,90 €</div>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                      <div>1. an...3</div><div className="text-soft mb-1">8267,90 €</div>
                    </div>
                  </div>
                </CardBody>
            </Card>
            <Card className="text-center mt-1">            
              <CardBody>
                <CardTitle className="fw-bold">Tiptorro App</CardTitle>
                <CardText className="fs-10px">
                  QR Code mit der Handy-Kamera scannen, iPhone oder Android App herunterladen!
                </CardText>
              </CardBody>
              <CardImg src="https://tiptorro.de/sports/images/qr_app.png" alt="" />
            </Card>
          </div>
        </div>
      </Content>
    </React.Fragment>
  );
};

export default Home;
