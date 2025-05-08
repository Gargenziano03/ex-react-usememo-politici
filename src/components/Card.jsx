import React from "react";

// Applichiamo React.memo al componente Card
const Card = React.memo(({ name, image, position, biography }) => {
    // Console log per verificare il rendering
    console.log(`Rendering card for ${name}`);

    return (
        <div className="politician-card">
            <img className="politician-image" src={image} alt={name} />
            <h3>{name}</h3>
            <p><strong>{position}</strong></p>
            <p>{biography}</p>
        </div>
    );
});

export default Card;
