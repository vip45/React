import reactImg from "./assets/react-core-concepts.png";
import CoreCocept from "./components/CoreConcept.jsx";
import Header from "./components/Header/Header.jsx";
import TabButton from "./components/TabButton.jsx";
import { CORE_CONCEPTS } from "./data.js";

function App() {
  function handleSelect(selectedButton) {
    console.log(selectedButton);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concept</h2>

          <ul>
            <CoreCocept {...CORE_CONCEPTS[0]} />
            <CoreCocept {...CORE_CONCEPTS[1]} />
            <CoreCocept {...CORE_CONCEPTS[2]} />
            <CoreCocept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={()=> handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={()=> handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={()=> handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={()=> handleSelect('state')}>State</TabButton>
          </menu>
          
        </section>
      </main>
    </div>
  );
}

export default App;
