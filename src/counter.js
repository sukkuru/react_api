import React, { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);
  console.log("ji",users)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/')
    .then(response => response.json())
    .then(data => setUsers(data))
  }, []);

  return (
    <table class="table">
      <thead>
          <tr>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
      </thead>
      <tbody>
      {users.map((user) => (
        <tr>
          <td>{user.id}</td>
          <td>{user.title}</td>
          <td>{user.userId} </td>
        </tr>    
        ))}
      </tbody>
    </table>
  );
};

export default App;
