import React from 'react';
import './style.css';

const Search = ({handleSortByName, handleSortByPhone, handleByName, searchTerm}) => {
    return (
        <div className='App-search'>
            <button name='name' className='rounded' onClick={handleSortByName}>
                Name
            </button>
            <button name='phone' className='rounded button' onClick={handleSortByPhone}>
                Phone
            </button>
            <input value={searchTerm} type='text' className='ms-auto' placeholder="Search Employee Name" onInput={handleByName} />
        </div>
    )
};

export default Search;