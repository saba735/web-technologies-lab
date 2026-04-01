import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(result => {
        setData(result.slice(0, 5)); // show only 5
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch data");
        setLoading(false);
      });
  }, []);

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>{error}</h3>;

  return (
    <div>
      <h2>API Data</h2>

      {data.map(item => (
        <div key={item.id}>
          <h4>{item.title}</h4>
          <p>{item.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;