import React from 'react'
import './ReviewCard.scss'

const ReviewCard = (props) => {
    return (
        <div className="ReviewCard">
            <div className="ReviewCard__quote">
                <i className="fas fa-quote-left ReviewCard__quote__icon--left"></i>
                {props.children}
                <i className="fas fa-quote-right ReviewCard__quote__icon--right"></i>
            </div>
            <div className="ReviewCard__name">
                <p>- <span>{props.name}</span>, {props.title}</p>
            </div>
        </div>
    )
}

export default ReviewCard
