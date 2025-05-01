import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <Card name="Vipin Yadav">
        <h1>Child H1</h1>
        <p>Child P</p>
      </Card>

      <Button />
    </div>
  );
}

export default App;
