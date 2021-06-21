import React from 'react';
import './style.css';

//displays sort and search elements that utilize functions and state from App.js to sort employees name or phone, and display employees based off of what the user enters in the input field
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