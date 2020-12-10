import React from 'react'
import './Sections.scss'
import bg from '../../asset/img/rocket_launch.svg'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Sections = () => {
    return (
        <Container className="d-flex align-items-center pt-5 pb-5 flex-wrap-reverse">
            <Row className="h-100">
                <Col lg={6} className='d-flex align-items-center justify-content-start'>
                    <img src={bg} alt="bg" width='90%' />
                </Col>

                <Col lg={6} className='d-flex align-items-center'>
                    <div>
                        <h1 className='mb-4'>More Speed. Less Haste.</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in nisi ut sapien lobortis hendrerit. Cras vitae urna nec ipsum consequat vulputate. Nulla interdum dapibus viverra. Ut porttitor tristique volutpat.</p>
                        <div className='d-flex align-items-center justify-content-start'>
                            <Button variant="secondary">Learn more</Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Sections
