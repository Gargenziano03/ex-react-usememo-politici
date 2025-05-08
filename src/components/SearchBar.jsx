import React from 'react';

export default function SearchBar({ value, onChange }) {
    return (
        <div className="searchbar">
            <input
                type="text"
                placeholder="Cerca un politico..."
                value={value}
                onChange={onChange}
            />
        </div>
    );
}
