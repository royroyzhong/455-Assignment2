import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Route from "./components/Route";
import About from "./components/About";
function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </div>
  );
}

export default App;
