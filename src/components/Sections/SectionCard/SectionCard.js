import React from 'react'
import './SectionCard.scss'
import { Col, Row } from 'react-bootstrap'
import Fade from 'react-reveal/Fade';

const SectionCard = (props) => {

    let btmColLg = props.reverse ? { span: 6, order: 0 } : { span: 6, order: 1 }

    let tpColClass = props.reverse ? "SectionCard__content pl-4" : "SectionCard__content"
    let btmColClass = props.reverse ? "SectionCard__img" : "SectionCard__img pl-4"

    let imgDirection = props.reverse ? {left: true} : {right: true}

    return (
        <section className="SectionCard">
            <Row className="h-100 py-3">
                
                <Col lg={{ span: 6, order: 1 }} className={tpColClass}>
                    <Fade bottom duration={1300}>
                    {props.children}
                    </Fade>
                </Col>
           
                <Col lg={btmColLg} className={btmColClass}>
                    <Fade {...imgDirection} duration={1300} distance="40%" delay={200} >
                        <img src={props.imgSrc} alt={props.imgAlt} width='100%' />
                    </Fade>
                </Col>
            </Row>
        </section>
    )
}

export default SectionCard
