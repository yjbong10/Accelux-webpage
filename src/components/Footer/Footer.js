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
                        <p><a href="/">Accelux Free</a></p>
                        <p><a href="/">Accelux Student</a></p>
                        <p><a href="/">Accelux Pro</a></p>
                        <p><a href="/">Accelux Pro +</a></p>
                        <p><a href="/">Accelux Enterprise</a></p>
                        <p><a href="/">Accelux Enterprise +</a></p>
                    </div>
                    <div>
                        <h5>Get Accelux</h5>
                        <p><a href="/">Download</a></p>
                        <p><a href="/">Contact Sales</a></p>
                    </div>
                    <div>
                        <h5>Resources</h5>
                        <p><a href="/">Docs</a></p>
                        <p><a href="/">Blog</a></p>
                        <p><a href="/">Community</a></p>
                        <p><a href="/">Webinars</a></p>
                        <p><a href="/">Education Programe</a></p>
                        <p><a href="/">Partner Resources</a></p>
                    </div>
                    <div>
                        <h5>Support</h5>
                        <p><a href="/">Support Center</a></p>
                        <p><a href="/">Tech Support</a></p>
                        <p><a href="/">Custormer Service</a></p>
                        <p><a href="/">Order Tracking</a></p>
                    </div>
                    <div>
                        <h5>Company</h5>
                        <p><a href="/">About</a></p>
                        <p><a href="/">Contact</a></p>
                        <p><a href="/">Location</a></p>
                        <p><a href="/">News</a></p>
                        <p><a href="/">Press & Media</a></p>
                        <p><a href="/">Investors</a></p>
                        <p><a href="/">Careers</a></p>
                    </div>
                </div>
                <div className='Footer__content'>
                    <div className='Footer__content__lang'>
                        <i className="fas fa-globe"></i>
                        <p>English</p>
                    </div>
                    <div className='Footer__content__base'>
                        <p><a href="/">Privacy</a></p>
                        <p><a href="/">Terms</a></p>
                        <p><a href="/">Trademarks</a></p>
                        <p>&copy; Accelux 2020</p>
                    </div>
                </div>
            </section>
        </Container>
    )
}

export default Footer
