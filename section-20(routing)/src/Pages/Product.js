import React from 'react'
import { Link } from 'react-router-dom'

export default function Product() {
    return (
        <div>
            <h1>The Product Page.</h1> 
            <ul>
                <li><Link to="/product/p1">A Book</Link></li>
                <li><Link to="/product/p2">A Carpet</Link></li>
                <li><Link to="/product/p3">A Tv</Link></li>
            </ul>
        </div>
    )
}
