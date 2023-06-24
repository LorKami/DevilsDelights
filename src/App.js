import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import "./App.css";

import Home from "./pages/Home";
import Error from "./pages/Error";
import Gallery from "./pages/Gallery";

import LoadingImages from "./images/loading.gif"

function App() {

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 9);
  }, []);

  return (
    <>
    {loading ? (
      <div className="LoadingScreen">
        <h1 className="Phrase1">Patience and persistence...</h1>
        <h1 className="Phrase2">Will lead you to success and uncover wonderful things...</h1>
        <div className="Preloader">
        <img className="Motto" src={LoadingImages} /> 
        </div>
      </div>
    ) : (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  )}
  </>
  );
}

export default App;
