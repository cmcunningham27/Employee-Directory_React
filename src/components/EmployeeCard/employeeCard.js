import React from 'react';

const EmployeeCard = ({picture, name, phone, email, dob}) => {
    return (
        <div className='App-employeeCard'>
            <img className='employeeImage' src={picture} alt='employee'/>
            <p className="name">
                {name}
            </p>
        </div>
    )
};

export default EmployeeCard;