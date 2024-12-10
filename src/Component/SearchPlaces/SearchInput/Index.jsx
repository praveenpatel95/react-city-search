import React, { useEffect } from 'react';

const SearchInput = ({ searchTerm, setSearchTerm }) => {
    useEffect(() => {
        const handleKeyPress = (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === '/') {
                e.preventDefault();
                document.getElementById('searchInput').focus();
            }
        };

        document.addEventListener('keydown', handleKeyPress);
        return () => document.removeEventListener('keydown', handleKeyPress);
    }, []);

    return (
        <div>
            <input
                id="searchInput"
                className="search-input"
                type="text"
                placeholder="Search places..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className="keyboard-shortcut">Ctrl + /</span>
        </div>
    );
};

export default SearchInput;
