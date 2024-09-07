import React, { useEffect, useState } from 'react';
import Users from '../Users/Users';

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() =>{
      fetch('https://jsonplaceholder.typicode.com/users')
       .then(response => response.json())
       .then(data => setUsers(data))
       .catch(error => console.log(error))  
  
    },[])

    return (
        <div>
            <h1>Users : {users.length}</h1>
            {
                users.map(user => <Users user={user}></Users>)
            }
        </div>
    );
};

export default Home;