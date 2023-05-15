import DataProvider, { Datos } from "./Components/Provider/Provider";
import Button from "./Components/Button";
import Page1 from "./Components/Page-1";
import Page2 from "./Components/Page-2";

function App() {
  
  return (
    <DataProvider>
      <div className="container">
        <h1>Hola Mundo</h1>
        <Page1  />
        <Page2  />
        <Button  />
      </div>
    </DataProvider>
  );
}

export default App;
