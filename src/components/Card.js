import React from "react";

export default function Card(props){

    let badgeText
    if(props.item.openSpots === 0){
        badgeText = "ESGOTADO"
    }else if(props.item.location === "Online"){
        badgeText = "ONLINE"
    }

    return(
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={require(`../images/${props.item.coverImg}`)} className="card--image" />
            <div className="card--stats">
                <img src={require('../images/star.png')} className="card--star" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) ● </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p className="card--tile">{props.item.title}</p>
            <p><span className="bold">Por R${props.item.price}</span> / pessoa</p>
        </div>
    )
}