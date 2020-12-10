import React from 'react'
import { Container } from 'react-bootstrap'
import './Footer.scss'

const Footer = () => {
    return (
        <Container>
            <section className='Footer'>
                <div className='Footer__nav'>
                    <div>
                        <h5>Pricing</h5>
                        <p>Accelux Free</p>
                        <p>Accelux Student</p>
                        <p>Accelux Pro</p>
                        <p>Accelux Pro +</p>
                        <p>Accelux Enterprice</p>
                        <p>Accelux Enterprice +</p>
                    </div>
                    <div>
                        <h5>Get Accelux</h5>
                        <p>Download</p>
                        <p>Contact Sales</p>
                    </div>
                    <div>
                        <h5>Resources</h5>
                        <p>Docs</p>
                        <p>Blog</p>
                        <p>Community</p>
                        <p>Webinars</p>
                        <p>Education Programe</p>
                        <p>Partner Resources</p>
                    </div>
                    <div>
                        <h5>Support</h5>
                        <p>Support Center</p>
                        <p>Tech Support</p>
                        <p>Custormer Service</p>
                        <p>Order Tracking</p>
                    </div>
                    <div>
                        <h5>Company</h5>
                        <p>About</p>
                        <p>Contact</p>
                        <p>Location</p>
                        <p>News</p>
                        <p>Press & Media</p>
                        <p>Investors</p>
                        <p>Careers</p>
                    </div>
                </div>
                <div className='Footer__content'>
                    <div className='Footer__content__lang'>
                        <i class="fas fa-globe"></i>
                        <p>English</p>
                    </div>
                    <div className='Footer__content__base'>
                        <p>Privacy</p>
                        <p>Terms</p>
                        <p>Trademarks</p>
                        <p>&copy; Accelux 2020</p>
                    </div>
                </div>
            </section>
        </Container>
    )
}

export default Footer
