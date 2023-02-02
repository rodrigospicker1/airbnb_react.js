import React from "react";
import image from '../images/photo-grid.png'

export default function Hero(){
    return(
        <section className="hero">
            <img src={image} className="hero--photo" />
            <h1 className="hero--header">Experiência online</h1>
            <p className="hero--text">Participe dessas atividades interativas únicas, 
            liderado por um dos gentis donos sem sair de casa</p>
        </section>
    )
}