import React, { PropTypes } from 'react';
import Navbar from './static/Navbar';

export default class App extends React.Component {

    render() {
        return (
            <div>
                <Navbar path={this.props.location}/>
                { this.props.children }
            </div>
        );
    }
};

App.propTypes = {
    children: PropTypes.object,
    location: PropTypes.object,
};
