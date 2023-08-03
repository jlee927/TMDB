import React, { useEffect, useState } from "react";
import { useHistory, BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Test from "./routes/Test";
import {
  TopMovies,
  Search,
  AccessBackend,
} from "./components"

function App() {
  let host = "/movies";

  const handleInputSubmit = (inputValue) => {
    console.log("Input value in App.js", inputValue);
    inputValue =
      "localhost:8000/search?keyword=" +
      inputValue;
    console.log(inputValue)

    host = inputValue;
  };

  const [backendData, setBackendData] = useState([]);
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    fetch(host)
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

 

  return (
    <div>
      {/* <h1 className="title">Top Movies</h1> */}
      {/* <Search onInputSubmit={handleInputSubmit}></Search> */}

      {/* <button onClick={handleButtonClick}>Load New Webpage</button> */}

      {/* <h1 className="title">Top Movies</h1>
      <Search onInputSubmit={handleInputSubmit}></Search> */}

      <BrowserRouter>
        <Routes>
          <Route path="/test" element={<Test />} />
          <Route
            path="/"
            element={
              backendData.length > 0 && (
                <div>
                  <h1 className="title">Top Movies</h1>
                  <Search onInputSubmit={handleInputSubmit} />
                  <div className="TopMovies">
                    {backendData.map((movie, index) => (
                      <TopMovies key={index} movie={movie} />
                    ))}
                  </div>
                </div>
              )
            }
          />

          <Route 
            path="/search/:host"
            element={
              <div>
                <AccessBackend />
                
              

              </div>
            }
          />

    
        </Routes>
      </BrowserRouter>

      {/* {backendData.length > 0 && (
        <div className="TopMovies">
          {backendData.map((movie, index) => (
            <TopMovies key={index} movie={movie} />
          ))}
        </div>
      )} */}
    </div>
  );
}

export default App;
