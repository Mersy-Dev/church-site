import "./worship.css";
// import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col } from 'reactstrap';

const Worship = () => {
    return (
        <>
            <section className='worship top' id='worship'>
                <Container>
                    <Row className='row'>
                        <Col lg='6'>
                            <div className="sunday left-sect">
                                <h2>Sunday Service</h2>
                                <h4>8:30am</h4>
                                <button>Join The Live Stream</button>
                            </div>
                        </Col>
                        <Col lg='6'>
                            <div className="sunday-img">
                                <img src="https://storage2.snappages.site/RHKN2B/assets/images/4937951_3648x5472_500.jpg" alt="" />

                            </div>
                        </Col>

                    </Row>
                </Container>

            </section>

            <div className="evening-worship">
                <Container>
                    <Row className='row'>
                        <Col lg='6'>
                            <div className="evening-img">
                                <img src="https://storage2.snappages.site/RHKN2B/assets/images/4937951_3648x5472_500.jpg" alt="" />

                            </div>
                        </Col>
                        <Col lg='6'>
                            <div className="evening right-sect">
                                <h2>Evening Service</h2>
                                <h4>6:00pm</h4>
                                <button>Join The Live Stream</button>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Worship