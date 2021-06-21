# Employee-Directory
![License: MIT](https://img.shields.io/badge/License-MIT-Red.svg)

## Descriptions
A React app that allows its users to view all employees in a directory and search by typing in a name or sort employees by Name or Phone.
![Beginning](./assets/images/start.png)
![Start Employees](./assets/images/employees.png)
![Sort By Name](./assets/images/by_name.png)
![Sort By Phone](./assets/images/phone.png)
![Employee Name](./assets/images/emp_name.png)

## Repository
[Application Repository URL](https://github.com/cmcunningham27/Employee-Directory_React)

## Link to Deployed App
[Employee Directory App](https://cmcunningham27.github.io/Employee-Directory_React)

## Table of Contents
- [Project's-aim](#project's-aim)
- [Usage](#usage)
- [Technologies](#technologies)
- [License](#license)
- [Complications](#complications)
- [Features](#features)
- [Questions](#questions)

## Project's aim
1.

## Usage
1. 

## Technologies
* 

## License
This project is licensed under the MIT license.

## Complications
* The initial complication I ran into was understanding React itself. This was a struggle, but with time I became more comfortable with the structure and flow of data from component to component. I know with more practice it will make even more sense for future projects.
* When I tried to use the handleByName function to list employees that start with the characters the user entered into the input, I noticed that the function was one step behind. That was when it became apparent that the steps were asynchronous, the second relied on the first. So, I added await before the first setState() and it was no longer behind. The user gets a list of employees upon the first character entered.
* It took a bit of time for me to realize that I needed to create and if/else statement in order to change what information was being sent to the EmployeeList based on whether the nameSorted state was true or false.
* The top row of the EmployeeList was a difficult task to line up each column name with the columns of the EmployeeCards. If I had more time I would have liked to figure out how to keep it exactly where I want them regardless of page size. I'm sure using query's would have accomplished this.

## Features
In the future I would like to have links attached to each employee's name that would connect the user to that employees page that would include more in-depth information about themselves. A department column would be a great addition. However, that was not part of the information that was in the Random User API.

## Questions
[GitHub Profile](https://github.com/cmcunningham27)

[E-mail](mailto:sttepstutoring@yahoo.com)

E-mailing me is the best option
