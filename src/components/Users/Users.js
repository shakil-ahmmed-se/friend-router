import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Users = (props) => {
    const { name, email, id } = props.user;
    
    // const navigate = useNavigate();
    // console.log(name)

    // const handleCliked =(userId) =>{
    //     navigate(userId);
    //     navigate(`/users/${userId}`); // with id
        
    // }

    const userStyle={
        backgroundColor: '#ddd',
        padding: '15px',
        margin: '15px',
        borderRadius: '10px'
    };

    return (
        <div style={userStyle}>
            <h2>Name: {name}</h2>
            <h4>Email: {email} </h4>
            <Link to={`users/${id}`}>show details {id}</Link>
            
        </div>
    );
};

export default Users;