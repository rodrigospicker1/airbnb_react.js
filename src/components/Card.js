import React from "react";

export default function Card(props){
    return(
        <div className="card">
            <div className="card--badge">SOLD OUT</div>
            <img src={require(`../images/${props.img}`)} className="card--image" />
            <div className="card--stats">
                <img src={require('../images/star.png')} className="card--star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) ● </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--tile">{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}