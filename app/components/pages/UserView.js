import React, { PropTypes } from 'react';

export default class UserView extends React.Component {
    render() {
        return (
            <div>
                {this.props.params.id}
            </div>
        );
    }
};

UserView.propTypes = {
    params: {
        id: PropTypes.string
    }
};
