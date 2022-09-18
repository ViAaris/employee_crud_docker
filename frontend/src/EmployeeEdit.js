import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';

class EmployeeEdit extends Component {

    emptyItem = {
        name: '',
        surname: '',
        department: '',
        salary: ''
    };

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    /*Let's add the componentDidMount function to check whether we're dealing with the create or edit feature;
    in the case of editing, it'll fetch our client from the API:*/
    async componentDidMount() {
        if (this.props.match.params.id !== 'new') {
            const employee = await (await fetch(`/api/employees/${this.props.match.params.id}`)).json();
            this.setState({item: employee});
        }
    }
/*Then in the handleChange function, we'll update our component
state item property that will be used when submitting our form:*/
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
    }
/*In handeSubmit, we'll call our API, sending the request to a PUT or POST method depending on the feature we're invoking.
For that, we can check if the id property is filled:*/
    async handleSubmit(event) {
        event.preventDefault();
        const {item} = this.state;

        await fetch('/api/employees' + (item.id ? '/' + item.id : ''), {
            method: (item.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        this.props.history.push('/api/employees/');
    }

//our render function will be handling our form:
    render() {
        const {item} = this.state;
        const title = <h2>{item.id ? 'Edit employee' : 'Add employee'}</h2>;

        return <div>
            <AppNavbar/>
            <Container>
                {title}
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" name="name" id="name" value={item.name || ''}
                               onChange={this.handleChange} autoComplete="name"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="surname">Surname</Label>
                        <Input type="text" name="surname" id="surname" value={item.surname || ''}
                               onChange={this.handleChange} autoComplete="surname"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="department">Department</Label>
                        <Input type="text" name="department" id="department" value={item.department || ''}
                               onChange={this.handleChange} autoComplete="department"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="salary">Salary</Label>
                        <Input type="text" name="salary" id="salary" value={item.salary || ''}
                               onChange={this.handleChange} autoComplete="salary"/>
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary" type="submit">Save</Button>{' '}
                        <Button color="secondary" tag={Link} to="/api/employees">Cancel</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    }
}


export default withRouter(EmployeeEdit);