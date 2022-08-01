import React from "react"
import starImg from '../assets/star.png';
import cardImage from '../assets/katie-zaferes.png'

export default function Card(props) {
    return (
        <div className="card">
            <img src={cardImage} className="card--image" />
            <div className="card--stats">
                <img src={starImg} className="card--star" />
                <span>5.0</span>
                <span className="gray"> (6) • Online</span>
                <span className="gray">USA</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From $ 125</span> / person</p>
        </div>
    )
}