import React, { useState, useEffect } from 'react';
import Card from './Card';

export default function PoliticiansList() {
    const [politicians, setPoliticians] = useState([]);
    const [loading, setLoading] = useState(true);

    //Effettua una chiamata API
    useEffect(() => {
        fetch('http://localhost:5000/politicians')
            .then(res => res.json())
            .then(data => {
                setPoliticians(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Errore:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="loading">Caricamento in corso...</div>;
    }
    return (
        <>
            <h1>Lista Politici</h1>

            <div className="politicians-container">
                {/* Cicla sull'array dei politici e crea una Card per ciascuno */}
                {politicians.map(p => (
                    <Card
                        key={p.id}
                        name={p.name}
                        image={p.image}
                        position={p.position}
                        biography={p.biography}
                    />
                ))}
            </div></>
    );
}
