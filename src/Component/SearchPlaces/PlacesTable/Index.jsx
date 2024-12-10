import React from 'react';

const PlacesTable = ({ searchTerm, places, indexOfFirstItem }) => (
    <table className="table">
        <thead>
        <tr>
            <th>#</th>
            <th>Place Name</th>
            <th>Country</th>
        </tr>
        </thead>
        <tbody>
        {!searchTerm && (
            <tr>
                <td colSpan="3" style={{ textAlign: 'center' }}>Start searching</td>
            </tr>
        )}
        {searchTerm && places.length === 0 && (
            <tr>
                <td colSpan="3" style={{ textAlign: 'center' }}>No results found</td>
            </tr>
        )}
        {places.map((place, index) => (
            <tr key={place.id}>
                <td>{indexOfFirstItem + index + 1}</td>
                <td>{place.city}</td>
                <td>
                    <img
                        src={`https://flagsapi.com/${place.countryCode}/flat/24.png`}
                        alt={place.country}
                        style={{ marginRight: '8px', verticalAlign: 'middle' }}
                    />
                    {place.country}
                </td>
            </tr>
        ))}
        </tbody>
    </table>
);

export default PlacesTable;
