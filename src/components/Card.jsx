import React from "react"
import starImg from '../assets/star.png';
import cardImage from '../assets/katie-zaferes.png'

export default function Card(props) {
    return (
        <div className="card">
            <img src={cardImage} className="card--image" />
            <div className="card--stats">
                <img src={starImg} className="card--star" />
                <span>{props.rating}</span>
                <span className="gray"> ({props.reviewCount}) • Online</span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}