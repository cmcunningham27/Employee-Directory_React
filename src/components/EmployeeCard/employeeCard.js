import React from 'react';

const EmployeeCard = ({picture, name, phone, email, dob}) => {
    return (
        <div className='App-employeeCard'>
            <img className='employeeImage' src={picture} alt='employee'/>
            <p className="name">
                {name}
            </p>
            <p className="phone">
                {phone}
            </p>
        </div>
    )
};

export default EmployeeCard;