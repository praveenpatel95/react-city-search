import React, { useState, useEffect, useCallback } from 'react';
import useDebounce from './useDebounce';
import SearchInput from './SearchInput';
import PlacesTable from './PlacesTable';
import Pagination from './Pagination';
import ItemsControl from './ItemsControl';
import './style.css'

const SearchPlaces = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(3);
    const [apiLimit, setApiLimit] = useState(5);
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    // Fetch data from API
    const fetchPlaces = useCallback(async () => {
        if (!debouncedSearchTerm) return;

        setLoading(true);
        try {
            const response = await fetch(
                `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${debouncedSearchTerm}&limit=${apiLimit}`,
                {
                    headers: {
                        'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
                        'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
                    }
                }
            );
            const data = await response.json();
            setPlaces(data.data || []);
        } catch (error) {
            console.error('Error fetching places:', error);
        }
        setLoading(false);
    }, [debouncedSearchTerm, apiLimit]);

    useEffect(() => {
        fetchPlaces();
    }, [fetchPlaces]);

    // Pagination calculations
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = places.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(places.length / itemsPerPage);

    const handleApiLimitChange = (value) => {
        if (value > 10) {
            alert('Maximum limit is 10 items');
            return;
        }
        setApiLimit(value);
    };

    return (
        <div className="container">
            <SearchInput
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />
            {loading && <div className="spinner" />}
            <PlacesTable
                searchTerm={searchTerm}
                places={currentItems}
                indexOfFirstItem={indexOfFirstItem}
            />
            <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
            <ItemsControl
                itemsPerPage={itemsPerPage}
                setItemsPerPage={setItemsPerPage}
                apiLimit={apiLimit}
                handleApiLimitChange={handleApiLimitChange}
            />
        </div>
    );
};

export default SearchPlaces;
