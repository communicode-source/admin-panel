import React from 'react';
// import { Link } from 'react-router';
import userList from '../../data/users';
import {createFilter} from 'react-search-input';

import UsersTable from '../UsersTable';
import Pagination from '../Pagination';

export default class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            searchTerm: ''
        };
        this.searchUpdated = this.searchUpdated.bind(this);
        this.updatePage = this.updatePage.bind(this);
    }

    searchUpdated(event) {
        this.setState({
            searchTerm: event.target.value,
        });
    }

    updatePage(page) {
        this.setState({
            page: page
        });
    }

    render() {
        const filteredUsers = userList.filter(createFilter(this.state.searchTerm, ['name', '_id', 'email', 'company']));
        return (
            <div className="container">
                <div className="page-header">
                    <h1>Users / <small>Manage users here</small></h1>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading">Users</div>
                    <div className="panel-body">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-2">
                                    <div className="form-group">
                                        <input type="search" placeholder="Search Users" className="form-control" onChange={this.searchUpdated}/>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <Pagination page={this.state.page} pages={Math.ceil(filteredUsers.length / 10)} onPageChanged={this.updatePage}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <UsersTable users={filteredUsers.slice((this.state.page - 1) * 10, this.state.page * 10)} />
                </div>
            </div>
        );
    }
};
