import React from 'react'
import './Sections.scss'
import bg from '../../asset/img/rocket_launch.svg'
import { Button, Col, Container, Row } from 'react-bootstrap'
import ReviewCard from './ReviewCard/ReviewCard'

const Sections = () => {
    return (
        <Container>
            <section className="Sections">
                <Row className="h-100 py-3">
                    <Col lg={{ span: 6, order: 1 }} className="Sections__content">
                        <h2>More Speed. Less Haste.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in nisi ut sapien lobortis hendrerit. Cras vitae urna nec ipsum consequat vulputate. Nulla interdum dapibus viverra. Ut porttitor tristique volutpat.</p>
                        <div className='d-flex align-items-center justify-content-start'>
                            <Button variant="info">Learn more</Button>
                        </div>
                        <ReviewCard name='Dorelle R' title='Senior Applications Analyst'>
                            <p>"We can't understand how we've been living without Accelux. I don't always clop, but when I do, it's because of Accelux."</p>
                        </ReviewCard>
                    </Col>
                    <Col lg={{span: 6, order: 0}} className="Sections__img">
                        <img src={bg} alt="bg" width='100%' />
                    </Col>
                </Row>
            </section>
        </Container>
    )
}

export default Sections
