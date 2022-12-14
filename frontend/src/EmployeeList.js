import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';

class EmployeeList extends Component {

    constructor(props) {
        super(props);
        this.state = {employees: []};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        fetch('/api/employees')
            .then(response => response.json())
            .then(data => this.setState({employees: data}));
    }

    async remove(id) {
        await fetch(`/api/employees/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedEmployees = [...this.state.employees].filter(i => i.id !== id);
            this.setState({employees: updatedEmployees});
        });
    }

    render() {
        const {employees, isLoading} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        const employeeList = employees.map(employee => {
            return <tr key={employee.id}>
<<<<<<< HEAD
                <td style={{whiteSpace: 'nowrap'}}>{employee.name} {employee.surname}</td>
                <td>{employee.department}</td>
=======
                <td style={{whiteSpace: 'nowrap'}}>{employee.name}</td>
                <td>{employee.surname}</td>
>>>>>>> cee6b41 (add react)
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/api/employees/" + employee.id}>Edit</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(employee.id)}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <div className="float-right">
                        <Button color="success" tag={Link} to="/api/employees/new">Add Client</Button>
                    </div>
                    <h3>employees</h3>
                    <Table className="mt-4">
                        <thead>
                        <tr>
<<<<<<< HEAD
                            <th width="30%">Full name</th>
                            <th width="30%">Department</th>
=======
                            <th width="30%">Name</th>
                            <th width="30%">Surname</th>
>>>>>>> cee6b41 (add react)
                            <th width="40%">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {employeeList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}
export default EmployeeList;