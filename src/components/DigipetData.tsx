import { Digipet } from "../App";

interface Props {
  digipet?: Digipet;
}

function DigipetData({ digipet }: Props) {
  if (digipet) {
    const digipetEntries = Object.entries(digipet);
    const digipetStats = digipetEntries.map(([key, val]) => (
      <li key={key}>
        {key}: {val}
      </li>
    ));

    return (
      <>
        <h2>Your digipet:</h2>
        <ul>{digipetStats}</ul>
      </>
    );
  } else {
    return <p>No digipet to see 😢</p>;
  }
}

export default DigipetData;
