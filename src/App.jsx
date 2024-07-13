import "./App.css";
import ButtonItems from "./Components/ButtonItems";
import Header from "./Components/Header";
import Items from "./Components/Items";

function App() {
  return (
    <>
      <div>
        <div>
          <Header />
        </div>
        <div>
          <h2>Wlcome in home pagee</h2>
        </div>
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <ButtonItems/>
      </div>
    </>
  );
}

export default App;
