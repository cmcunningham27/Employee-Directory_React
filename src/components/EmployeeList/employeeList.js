import React from 'react';
import EmployeeCard from '../EmployeeCard/employeeCard';
import './style.css';

//displays column names row above each employee card, sends a formatted date and each employee information to the EmployeeCard component
const EmployeeList = ({employees, formatDate}) => {
    return (
        <div className='App-employeeList'>
            <div className='employeeListTop'>
                <p className='parg-1'>
                    Image
                </p>
                <p className='parg-2'>
                    Name
                </p>
                <p className='parg-3'>
                    Phone
                </p>
                <p className='parg-4'>
                    Email
                </p>
                <p className='parg-5'>
                    DOB
                </p>
            </div>
            {employees.map((item) => {
                const dob = formatDate(item.dob);

                return (
                    <EmployeeCard 
                        picture={item.picture}
                        name={item.name}
                        phone={item.phone}
                        email={item.email}
                        dob={dob}
                        key={item.key}
                    />
                )
            })}
        </div>
    )
};

export default EmployeeList;