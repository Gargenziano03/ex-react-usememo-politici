import React, { useState, useEffect } from 'react';
import Card from './Card';
import SearchBar from './SearchBar'

export default function PoliticiansList() {
    const [politicians, setPoliticians] = useState([]);
    const [search, setSearch] = useState('')

    //Effettua una chiamata API
    useEffect(() => {
        fetch('http://localhost:5000/politicians')
            .then(res => res.json())
            .then(data => {
                setPoliticians(data);

            })
            .catch(error => {
                console.error('Errore:', error);
            });
    }, []);

    // Filtro dei politici in base alla ricerca
    const filteredPoliticians = politicians.filter((p) =>
        (p.name + " " + p.biography)
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    return (
        <>
            <h1>Lista Politici</h1>

            <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />

            {/* Lista delle card filtrate */}
            <div className="politicians-container">
                {filteredPoliticians.map(p => (
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
