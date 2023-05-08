import React from 'react';
import PersonForm from './PersonForm';
import PersonRow from './PersonRow';


class PeopleTable extends React.Component {
    render() {

        state = {
            firstName:'',
            lastName:'',
            age:'',
            people:[]

        }
        onFirstNameTextChange=(e)=> {
            this.setState({ firstName: e.target.value });
           
        }
        onLastNameTextChange = (e) => {
            this.setState({ lastName: e.target.value });

        }
        onAgeTextChange = (e) => {
            this.setState({ age: e.target.value });

        }

        onAddClick = () => {
            const copy = [...this.state.people];
            const person = {firstName:this.state.firstName,lastName:this.state.lastName,age:this.state.age}
            copy.push(person);
            this.setState({ people: copy, firstName: '', lastName: '', age: '' });
        }
        onClearClick = () => {
            this.setState({ firstName: '', lastName: '', age: '' })
            this.setState({people:[]})
        }
        return (<>

            <PersonForm firstName={this.state.firstName}
                lastName={this.state.lastName}
                age={this.state.age}
                onAddClick={this.onAddClick}
                onFirstNameTextChange={this.onFirstNameTextChange}
                onLastNameTextChange={this.onLastNameTextChange}
                onAgeTextChange={this.onAgeTextChange}
                onClearClick={this.onClearClick}
            />
            {this.state.people.length === 0 ? <h2> There is no one added yet,be the first to add!</h2> :

                <table className="table">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        <PersonRow people={this.state.people} />
                    </tbody>
                </table>
            }

        </>);

    };
};

export default PeopleTable;