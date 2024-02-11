import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Protected from "./pages/Protected";
import Success from "./pages/Success";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/success"
            element={<Protected element={<Success />} />}
          />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
