import React from 'react';

const ItemsControl = ({ itemsPerPage, setItemsPerPage, apiLimit, handleApiLimitChange }) => (
    <div className="items-control">
        <div>
            <label>Items per page: </label>
            <input
                type="number"
                className="items-input"
                min="1"
                value={itemsPerPage}
                onChange={(e) => setItemsPerPage(parseInt(e.target.value))}
            />
        </div>
        <div>
            <label>API Limit (max 10): </label>
            <input
                type="number"
                className="items-input"
                min="1"
                max="10"
                value={apiLimit}
                onChange={(e) => handleApiLimitChange(parseInt(e.target.value))}
            />
        </div>
    </div>
);

export default ItemsControl;
