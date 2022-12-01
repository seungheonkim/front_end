import {Component} from 'react';
import User from './User';

import classes from './Users.module.css';

class Users extends Component {
    constructor(props) {
        super(props);
        //이름도 state 여야 함
        //state 는 무조건 객체형태!!
        this.state = {
            showUsers: true,
            more: 'test'
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.users.length === 0) {
            throw new Error('No users Provided!');
        }
    }

    toggleUsersHandler() {
        //doesn't override the state
        //덮어쓰지 않기 때문에 두번째 more 값은 살아있음
        this.setState((curState) => {
            return {showUsers: !curState.showUsers};
        });
    }

    render() {
        const usersList = (
            <ul>
                {this.props.users.map((user) => (
                    <User key={user.id} name={user.name}/>
                ))}
            </ul>
        );

        return (
            <div className={classes.users}>
                <button onClick={this.toggleUsersHandler.bind(this)}>
                    {this.state.showUsers ? 'Hide' : 'Show'} Users
                </button>
                {this.state.showUsers && usersList}
            </div>
        );
    }
}

// const Users = () => {
//     const [showUsers, setShowUsers] = useState(true);
//
//     const toggleUsersHandler = () => {
//         setShowUsers((curState) => !curState);
//     };
//
//     const usersList = (
//         <ul>
//             {DUMMY_USERS.map((user) => (
//                 <User key={user.id} name={user.name}/>
//             ))}
//         </ul>
//     );
//
//     return (
//         <div className={classes.users}>
//             <button onClick={toggleUsersHandler}>
//                 {showUsers ? 'Hide' : 'Show'} Users
//             </button>
//             {showUsers && usersList}
//         </div>
//     );
// };

export default Users;
