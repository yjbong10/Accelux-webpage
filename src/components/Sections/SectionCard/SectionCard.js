import React from 'react'
import './SectionCard.scss'
import { Col, Row } from 'react-bootstrap'

const SectionCard = (props) => {

    let btmColLg = props.reverse ? { span: 6, order: 0 } : { span: 6, order: 1 }

    let tpColClass = props.reverse ? "SectionCard__content pl-4" : "SectionCard__content"
    let btmColClass = props.reverse ? "SectionCard__img" : "SectionCard__img pl-4"

    return (
        <section className="SectionCard">
            <Row className="h-100 py-3">
                <Col lg={{ span: 6, order: 1 }} className={tpColClass}>
                    {props.children}
                </Col>
                <Col lg={btmColLg} className={btmColClass}>
                    <img src={props.imgSrc} alt={props.imgAlt} width='100%' />
                </Col>
            </Row>
        </section>
    )
}

export default SectionCard
