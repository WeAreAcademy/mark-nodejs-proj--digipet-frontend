import { useEffect, useState } from "react";

interface Digipet {
  happiness: number;
  nutrition: number;
  discipline: number;
}

function App() {
  const [message, setMessage] = useState<string>();
  const [digipetStats, setDigipetStats] = useState<Digipet>();

  useEffect(() => {
    const loadInitialData = async () => {
      const res = await fetch("http://localhost:4000");
      const body = await res.json();
      setMessage(body.message);
      setDigipetStats(body.digipet);
    };
    loadInitialData();
  }, []);

  return (
    <main>
      <h1>Digipet</h1>
      {message && <p>{message}</p>}
      {digipetStats && (
        <>
          <h2>Stats</h2>
          <ul>
            {Object.entries(digipetStats).map(([key, value]) => (
              <li key={key}>
                <b>{key}:</b> {value}
              </li>
            ))}
          </ul>
        </>
      )}
    </main>
  );
}

export default App;
