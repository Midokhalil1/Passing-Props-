import Welcome from "./components/Welcome.jsx/Welcome";

const names = ["Brad", "Gabby", "Art"];

function App() {
  return (
    <>
      <h1>Passing Props</h1>
      <Welcome name="Fanessa" />
      <Welcome name={names[4]} />

      <hr />
      {names.map((fname) => (
        <Welcome key={fname} name={fname} />
      ))}
    </>
  );
}

export default App;
