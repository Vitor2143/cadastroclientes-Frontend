import React from 'react';
import { Link } from 'react-router-dom';

export default function Home(){
    return(
        <div className="container">
            <h1>Welcome to Startdev Course</h1>
            <Link to="/allusers">
                <button className="button"> List All Users</button>
            </Link>
        </div>
    );
}



