import React from "react";


export default function Card({ name, image, position, biography }) {
    return (
        <div className="politician-card">
            <img className="politician-image" src={image} alt={name} />
            <h3>{name}</h3>
            <p><strong>{position}</strong></p>
            <p>{biography}</p>
        </div>
    );
}


