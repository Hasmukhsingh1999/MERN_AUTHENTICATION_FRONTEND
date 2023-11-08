import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [err,setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/user/allUser");
        console.log(response.data);
        setUsers(response.data);
      } catch (error) {
        setError(true);
      }
    })();
  }, []);

  return (
    <>
      <h2>API</h2>
      <h1>USERS: {users.length}</h1>
    </>
  );
}

export default App;
