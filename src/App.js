import "./App.css";

import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    return axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUser(response.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <h1>User List Using Axios</h1>
      <ul>
        {user &&
          user.length > 0 &&
          user.map((userObj, index) => (
            <li key={userObj.id}>{userObj.name}</li>
          ))}
      </ul>
    </main>
  );
}

export default App;
