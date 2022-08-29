// import { Fragment, useState, useEffect } from 'react';
import React, { Fragment, Component } from 'react'

import Users from './Users';
import classes from './UserFinder.module.css'
import UsersContext from '../Store/users-context';
import ErrorBoundary from './ErrorBoundary';

const DUMMY_USERS = [
    { id: 'u1', name: 'Max' },
    { id: 'u2', name: 'Manuel' },
    { id: 'u3', name: 'Julie' },
  ];

export default class UserFinder extends Component {

    constructor() {
        super()
        this.state = {
            filteredUsers: DUMMY_USERS,
            searchTerm: "",
        }
    }

    searchChangeHandler(event) {
        this.setState({searchTerm: event.target.value});
    }

    componentDidMount() {
        // Http request...
        this.setState({filteredUsers: DUMMY_USERS})
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.filteredUsers.length === 0) {
             throw new Error("Invalid search")
       }
        if(prevState.searchTerm !== this.state.searchTerm) {
            this.setState({
                filteredUsers:  DUMMY_USERS.filter((user) => user.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
            })
        }

    }

    render() {
        return (
            <Fragment>
                <div className={classes.finder}>
                    <input type='search' onChange={this.searchChangeHandler.bind(this)} />
                </div>
                <ErrorBoundary>
                   <Users users={this.state.filteredUsers} />
                </ErrorBoundary>
            </Fragment>
        )
    }
}


// const UserFinder = () => {
//     const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//     const [searchTerm, setSearchTerm] = useState('');

//     useEffect(() => {
//         setFilteredUsers(
//             DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//         );
//     }, [searchTerm]);

//     const searchChangeHandler = (event) => {
//         setSearchTerm(event.target.value);
//     };

//     return (
//         <Fragment>
//             <div className={classes.finder}>
//                 <input type='search' onChange={searchChangeHandler} />
//             </div>
//             <Users users={filteredUsers} />
//         </Fragment>
//     );
// };

// export default UserFinder;