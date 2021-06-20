import React from 'react';
import './style.css';

const Wrapper = (props) => {
    return (
        <main className='App-wrapper' style={{ background: `${props.backgroundColor}`}}>
            {props.children}
        </main>
    )
};

export default Wrapper;