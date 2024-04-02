import Header from "./components/Header/Header";
import CoreConcepts from './components/Core-concept/Core-concepts'
import Examples from "./components/Examples";
function App() {
 
  return (
    <div>
      <Header />
      <main>
        <CoreConcepts></CoreConcepts>
        <Examples></Examples>
      </main>
    </div>
  );
}

export default App;
