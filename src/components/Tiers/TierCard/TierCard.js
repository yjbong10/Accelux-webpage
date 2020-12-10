import React from 'react'
import { Button } from 'react-bootstrap'
import './TierCard.scss'

const TierCard = (props) => {

    const list = props.item.list.map(item => {
        return <li key={props.item.name + item.li}>{item.li}</li>
    })

    return (
        <div className="TierCard shadow rounded-lg" style={props.item.bgStyle}>
            <div className="TierCard__icon">
                <i className={props.item.faIcon}></i>
            </div>
            <div className="TierCard__details">
                <h3>{props.item.name}</h3>
                <h4>{props.item.price}<span> / months</span></h4>
                <p>{props.item.description}</p>
                <div className="TierCard__details__list">
                    <ul>
                        {list}
                    </ul>
                </div>
                <Button variant={props.item.button.color}>{props.item.button.text}</Button>
            </div>
        </div>
    )
}

export default TierCard
