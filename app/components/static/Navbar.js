import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class MenuItem extends React.Component {
    render() {
        return (
            <li className={this.props.location.pathname === this.props.url ? 'active' : ''}>
                <Link to={this.props.url}>{this.props.name}</Link>
            </li>
        );
    }
}

MenuItem.propTypes = {
    name: PropTypes.string,
    url: PropTypes.string,
    location: PropTypes.object,
};

export default class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand">
                            <img src={require('../../styles/images/logo/CommunicodeLogoNew.svg')} style={{height: '35px'}}/>
                        </Link>
                    </div>

                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <MenuItem name="Dashboard" url="/" location={this.props.path}/>
                            <MenuItem name="Users" url="/users" location={this.props.path}/>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

Navbar.propTypes = {
    path: PropTypes.object,
};
