import { useEffect, useState } from "react";
import DigipetActions from "./components/DigipetActions";
import DigipetData from "./components/DigipetData";

export interface Digipet {
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
      <hr />
      <DigipetData digipet={digipetStats} />
      <hr />
      <DigipetActions actions={[{ name: "Hatch" }, { name: "Walk" }]} />
    </main>
  );
}

export default App;
