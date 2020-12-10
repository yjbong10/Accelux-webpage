import React from 'react'
import './HeroSection.scss'
import bg from '../../asset/img/vr.svg'
import { Button, Col, Container, Row } from 'react-bootstrap'

const HeroSection = () => {
    return (
        <Container className="HeroSection">
            <Row className="h-100">
                <Col lg={6} className='d-flex align-items-center'>
                    <div>
                        <h1 className='display-4 mb-4 font-weight-bold'>The Fastest Is All You Need.</h1>
                        <p>This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information.Etiam in nisi ut sapien lobortis hendrerit. Cras vitae urna nec ipsum consequat vulputate.</p>
                        <div className='d-flex align-items-center justify-content-start'>
                            <Button variant="warning" className="mr-4">Try Now For Free</Button>
                            <Button variant="info">Learn more</Button>
                        </div>
                    </div>
                </Col>
                <Col lg={6} className='d-flex align-items-center justify-content-center'>
                    <img src={bg} alt="bg" width='100%'/>
                </Col>
            </Row>
        </Container>
    )
}

export default HeroSection
