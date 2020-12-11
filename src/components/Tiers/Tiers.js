import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TierCard from './TierCard/TierCard'
import './Tiers.scss'
import Fade from 'react-reveal/Fade';

const Tiers = () => {

    const tierItems = [{
        faIcon: "fas fa-gem",
        name: "Pro",
        price: "$39.99",
        pricePer: "month",
        description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
        list: [{
            li: "Life Time Free Upgrade"
        }, {
            li: "Up To 300 devices at a time"
        },{
            li: "1TB of cloud storage per user"
        }, {
            li: "Premium tech support"
        }, {
            li: "Integration with popular apps"
        }, {
            li: "Dedicated resources"
        }],
        button: {
            text: "Learn More",
            color: "info"
        },
        bgStyle: { background: "linear-gradient(150deg, #fff6f3 0%, #ffebe4 100%)" }
    }, {
        faIcon: "fas fa-stream",
        name: "Free",
        price: "$0.00",
        pricePer: "month",
        description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
        list: [{
            li: "Life Time Free Usage"
        }, {
            li: "Up To 5 devices at a time"
        }, {
            li: "2TB of cloud storage"
        }, {
            li: "Free tech support"
        }, {
            li: "Integration with popular apps"
        }, {
            li: "Dedicated resources"
        }],
        button: {
            text: "Try Now",
            color: "warning"
        },
        bgStyle: { 
            background: "linear-gradient(150deg, rgb(255, 255, 255) 0%, #eae9f0 100%",
            transform: "scale(1.05)"
        }
    }, {
        faIcon: "fas fa-project-diagram",
        name: "Enterprise",
        price: "$300.00",
        pricePer: "month",
        description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
        list: [{
            li: "Life Time Free Upgrade"
        }, {
            li: "Up To 10,000 devices at a time"
        }, {
            li: "Unlimited cloud storage"
        }, {
            li: "24/7 Premium tech support"
        }, {
            li: "Integration with popular apps"
        }, {
            li: "Dedicated resources"
        }],
        button: {
            text: "Learn More",
            color: "info"
        },
        bgStyle: { background: "linear-gradient(150deg, #f6fffa 0%, #e9fcfa 100%)"}
    }]

    const cardsCol = tierItems.map(item => {
        return (
            <Fragment key={item.name}>
                <Col lg={4}>
                    <Fade bottom ={2000} distance="5%">
                    <TierCard item={item} />
                    </Fade>
                </Col>
            </Fragment>
        )
    })


    return (
        <section className="Tiers">
        <Container>

                <Row>
                    {cardsCol}
                </Row>
        </Container>
        </section>
    )
}

export default Tiers
