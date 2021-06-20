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
            <p className="email">
                {email}
            </p>
            <p className="dob">
                {dob}
            </p>
        </div>
    )
};

export default EmployeeCard;