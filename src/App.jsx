import axios from "axios";
import { useQuery } from "react-query";

function App() {
  const { data, error, isLoading } = useQuery("users", fetchUsers);

  if (error) {
    return <h1>Something went wrong</h1>;
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="app">
      <h2>API</h2>
      <h1>USERS:</h1>
      <ul>
        {Array.isArray(data) ? (
          data.map((user) => (
            <li key={user.id}>
              <h2>Name: {user.username}</h2>
              <p>Email: {user.email}</p>
           
            </li>
          ))
        ) : (
          <li>Data is not in the expected format</li>
        )}
      </ul>
    </div>
  );
}

const fetchUsers = async () => {
  try {
    const response = await axios.get("/api/user/allUser");
    console.log("Response from API:", response);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default App;

