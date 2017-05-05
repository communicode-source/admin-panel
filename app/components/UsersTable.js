import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';

export default class UsersTable extends React.Component {
    constructor(props) {
        super(props);
        this.gotoUser = this.gotoUser.bind(this);
    }
    gotoUser(id) {
        browserHistory.push('/users/' + id);
    }
    render() {
        const users = this.props.users;
        const userRows = users.map(user =>
            <tr onClick={()=>this.gotoUser(user._id)} style={{cursor: 'pointer'}}>
                <td>{user.name}</td>
                <td>{user._id}</td>
                <td>{user.email}</td>
                <td>{user.company}</td>
            </tr>
        );
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                { userRows }
                </tbody>
            </table>
        );
    }
};

UsersTable.propTypes = {
    users: PropTypes.array,
};
