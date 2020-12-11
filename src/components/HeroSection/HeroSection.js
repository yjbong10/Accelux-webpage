import React from 'react'
import './HeroSection.scss'
import bg from '../../asset/img/vr.svg'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Fade from 'react-reveal/Fade';

const HeroSection = () => {
    return (
        <Container>
        <section className="HeroSection">
            <Row className="h-100 py-3">
                <Col lg={6} className="HeroSection__content">
                    <Fade bottom cascade duration={1300}>
                        <span>
                            <h1 className='display-4 font-weight-bold'>The Fastest Is All You Need.</h1>
                            <p>This is a simple hero unit, a simple jumbotron-style component for calling
                            extra attention to featured content or information.Etiam in nisi ut sapien lobortis hendrerit. Cras vitae urna nec ipsum consequat vulputate.</p>
                        </span>
                    </Fade>
                    
                    <div className='d-flex align-items-center justify-content-start'>
                        <Fade clear cascade delay={1400}>
                            <Button variant="warning" className="mr-4">Try Now For Free</Button>
                            <Button variant="info">Learn more</Button>
                        </Fade>
                    </div>
        
                </Col>
                <Col lg={6} className="HeroSection__img">
                    <Fade right delay={400} duration={2000} distance='20%'>
                        <img src={bg} alt="bg" width='100%' />
                    </Fade>
                </Col>
            </Row>
        </section>
        </Container>
    )
}

export default HeroSection
