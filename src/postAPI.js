import axios from "axios";
import { useState, useEffect } from "react";


function PostAPI() {
  const [users, setUsers] = useState([])
  console.log(users.name);

  const [name, setName] = useState("")
  //const [ trigger,setTrigger]=useState(false)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      .then(data => setUsers(data))
  }, []);

  //post
  //updateUsers
  const deleteUsers = () => {
    //   put                                                     {name:name})
    axios.delete(`https://jsonplaceholder.typicode.com/users/${1}`,)
      .then(response => setUsers(response.data))
    // .then((Response)=>setUsers([...users,Response.data])) post
  }


  return (
    <>
      <br />
      {users === null ? <h2>no users</h2> : users.name}
      <button onClick={deleteUsers}>delete</button>
      <br />
      <input type="text" value={name} onChange={(event => setName(event.target.value))} />
      {/*update*/}
      {/*{users.map((user) => (
    <>
        <li>{user.id}</li>
        <li>{user.name}</li>
        </>

))}*/}

    </>
  )
}

export default PostAPI;
