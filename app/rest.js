import 'isomorphic-fetch';
import reduxApi from 'redux-api';;

const URL = 'http://localhost:3001';

export default reduxApi({
    users: `${URL}/api/users`,
    user: {
        url: `${URL}/api/users/:id`,
        virtual: true,
        postfetch: [
            ({ dispatch, actions }) => dispatch(actions.items())
        ]
    }
});
