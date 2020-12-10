import React from 'react'
import './Sections.scss'
import rocket_launch from '../../asset/img/rocket_launch.svg'
import world_connection from '../../asset/img/world_connection.svg'
import online_storage from '../../asset/img/online_storage.svg'
import { Button, Container } from 'react-bootstrap'
import ReviewCard from './ReviewCard/ReviewCard'
import SectionCard from './SectionCard/SectionCard'

const Sections = () => {
    return (
        <Container>
            <section className="Sections">
                <SectionCard reverse={true} imgSrc={rocket_launch} imgAlt="bg">
                    <h2>More Speed. Less Haste.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in nisi ut sapien lobortis hendrerit. Cras vitae urna nec ipsum consequat vulputate. Nulla interdum dapibus viverra. Ut porttitor tristique volutpat.</p>
                    <div className='d-flex align-items-center justify-content-start'>
                        <Button variant="info">Learn more</Button>
                    </div>
                    <ReviewCard name='Dorelle R' title='Senior Applications Analyst'>
                        <p>We can't understand how we've been living without Accelux. I don't always clop, but when I do, it's because of Accelux.</p>
                    </ReviewCard>
                </SectionCard>

                <SectionCard reverse={false} imgSrc={world_connection} imgAlt="bg">
                    <h2>Anytime. Anywhere. Everywhere!</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mi dui, feugiat a porta non, blandit sed orci. Ut porttitor malesuada lorem eu iaculis. Fusce vitae interdum augue. Sed ac commodo lectus. Nam faucibus porta sodales.</p>
                    <div className='d-flex align-items-center justify-content-start'>
                        <Button variant="info">Learn more</Button>
                    </div>
                    <ReviewCard name='Hewie S.F' title='Oceanographic Meteorologist'>
                        <p>Fantastic, I'm totally blown away by Accelux. I would be lost without it. Best. Product. Ever!</p>
                    </ReviewCard>
                </SectionCard>

                <SectionCard reverse={true} imgSrc={online_storage} imgAlt="bg">
                    <h2>Once Setup, Stay Backup</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae imperdiet enim, vel placerat sapien. Proin sem odio, vulputate quis tristique vitae, sollicitudin in lorem.</p>
                    <div className='d-flex align-items-center justify-content-start'>
                        <Button variant="info">Learn more</Button>
                    </div>
                    <ReviewCard name='Jo-Anne' title='Chief Technology Officer'>
                        <p>It's the perfect solution for our business. Great job, I will definitely be ordering again! Accelux saved my business.</p>
                    </ReviewCard>
                </SectionCard>
            </section>
        </Container>
    )
}

export default Sections
