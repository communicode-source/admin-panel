import React, { PropTypes } from 'react';
// import { Link } from 'react-router';
import userList from '../../data/users';
import {createFilter} from 'react-search-input';

import _ from 'lodash';

class User extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.id}</td>
                <td>{this.props.email}</td>
                <td>{this.props.company}</td>
            </tr>
        );
    }
}

User.propTypes = {
    id: PropTypes.string,
    email: PropTypes.string,
    company: PropTypes.string,
    name: PropTypes.string,
};

export default class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userCount: userList.length,
            page: 1,
            searchTerm: ''
        };
        this.searchUpdated = this.searchUpdated.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.lastPage = this.lastPage.bind(this);
        this.updatePage = this.updatePage.bind(this);
    }

    searchUpdated(event) {
        this.setState({
            searchTerm: event.target.value,
        });
    }

    nextPage() {
        if(this.state.page === this.state.userCount / 10 + 1) {
            return;
        }
        this.setState({
            page: this.state.page + 1
        });
    }

    lastPage() {
        if(this.state.page === 1) {
            return;
        }
        this.setState({
            page: this.state.page - 1
        });
    }

    updatePage(page) {
        this.setState({
            page: page
        });
    }

    render() {
        const filteredUsers = userList.filter(createFilter(this.state.searchTerm, ['name', '_id', 'email', 'company'])).slice(0, 10);
        return (
            <div className="container">
                <div className="page-header">
                    <h1>Users <small>Manage users here</small></h1>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading">Users</div>
                    <div className="panel-body">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-4">
                                    <nav><ul className="pagination">
                                        <li className={this.state.page === 1 ? 'disabled' : ''}><a href="#" onClick={this.lastPage} aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                        </a></li>
                                            {
                                                _.range(1, this.state.userCount / 10 + 1).map(function m(num) {
                                                    return (
                                                        <li className={this.state.page === num ? 'active' : ''}><a href="#">{num}</a></li>
                                                    );
                                                }.bind(this))
                                            }
                                        <li className={this.state.page === this.state.userCount / 10 + 1 ? 'disabled' : ''}><a href="#" aria-label="Next" onClick={this.nextPage}>
                                            <span aria-hidden="true">&raquo;</span>
                                        </a></li>
                                    </ul></nav>
                                    Fix the pagination. It doesn't update the table, and does not disable the next button
                                </div>
                                <div className="col-xs-12 col-md-4 col-md-offset-4 col-lg-2">
                                    <div className="form-group">
                                        <input type="search" placeholder="Search Users" className="form-control" onChange={this.searchUpdated}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                        {filteredUsers.map(user => <User id={user._id} email={user.email} company={user.company} name={user.name}/>)}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
};
