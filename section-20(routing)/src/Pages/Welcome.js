import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Welcome() {
    return (
        <div>
            <h1>The Welcome Page.</h1>
            <h3><Link to="new-user" className="centered">New User</Link></h3>
            <Outlet />
        </div>
    )
}
