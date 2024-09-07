import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
    let {userId} = useParams();
    // console.log(userId)
    // const [user, setUsers] = useState({});

    // useEffect(() =>{
    //   fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    //    .then(response => response.json())
    //    .then(data => setUsers(data))
    //    .catch(error => console.log(error))  
  
    // }, [])
    return (
        <div>
            <h3>This is Users Details Components:{userId}</h3>
            {/* <h2>Name: {user.name}</h2> */}
        </div>
    );
};

export default UserDetails;