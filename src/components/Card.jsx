import React from "react";
import starImg from "../assets/star.png";
// import cardImage from "../assets/katie-zaferes.png";

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={props.coverImg} className="card--image" />
      <div className="card--stats">
        <img src={starImg} className="card--star" />
        <span>{props.stats.rating}</span>
        <span className="gray"> ({props.stats.reviewCount}) • Online</span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
