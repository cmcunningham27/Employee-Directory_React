import React from 'react';
import './style.css';

const Search = ({handleSortByName}) => {
    return (
        <div className='App-search'>
            <button name='name' className='rounded' onClick={handleSortByName}>
                Name
            </button>
            <button name='phone' className='rounded button'>
                Phone
            </button>
            <input type='text' className='ms-auto' placeholder="Search Employee Name"/>
        </div>
    )
};

export default Search;