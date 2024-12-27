import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserList.css';



function UserList() {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setListOfUsers(response.data);
      })
      .catch((error) => {
        console.error('Erreur lors du chargement des utilisateurs :', error);
      });
  }, []);

  return (
    <div>
      <h1>Liste des utilisateurs</h1>
      <ul>
        {listOfUsers.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
