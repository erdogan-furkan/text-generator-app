import "./App.css";
import Form from "./components/Form";
import Content from "./components/Content";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Text Generator App</h1>
        <Form />
        <Content />
      </div>
    </div>
  );
}

export default App;
