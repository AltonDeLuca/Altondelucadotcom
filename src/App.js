import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./Components/NavBar/NavigationBar";
import ContactPage from "./Components/ContactPage/ContactPage";

function App() {
  return (
    <div>
      <NavigationBar className="App-header" />
      <Routes>
        <Route path="/"></Route>
        <Route path="/about"></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
      </Routes>
    </div>

    // <h1 className="App">

    //   <Router>
    //     </Router><Mailto email="altdeluca@gmail.com" subject="Hello" body="Hello World">
    //     Send Me an Email! Please!
    //   </Mailto>
    // </h1>
  );
}

export default App;
