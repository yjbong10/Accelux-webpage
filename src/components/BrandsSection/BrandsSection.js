import React from 'react'
import { Container } from 'react-bootstrap'
import logo1 from '../../asset/img/brands/microsoft.png'
import logo2 from '../../asset/img/brands/bbc.png'
import logo3 from '../../asset/img/brands/sony.png'
import logo4 from '../../asset/img/brands/trivago.png'
import logo5 from '../../asset/img/brands/tesla.png'
import logo6 from '../../asset/img/brands/walmart.png'
import './BrandsSection.scss'
import Flip from 'react-reveal/Flip';

const BrandsSection = () => {
    return (
        <Container>
            <section className='brandsSection'>
                <h4>Trusted and used by more than <span>4000 comapnies</span> across the world</h4>
                <Flip top cascade duration={1300}>
                <div className="brandsSection__imgs">
                    <img src={logo1} alt={logo1}></img>
                    <img src={logo2} alt={logo2}></img>
                    <img src={logo3} alt={logo3}></img>
                    <img src={logo4} alt={logo4}></img>
                    <img src={logo5} alt={logo5}></img>
                    <img src={logo6} alt={logo6}></img>
                </div>
                </Flip>
            </section>
        </Container>
    )
}

export default BrandsSection
