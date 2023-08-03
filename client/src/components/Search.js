import React, { useState } from "react";

function Search({ onInputSubmit }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    onInputSubmit(inputValue);
    // window.location.href = "http://localhost:3000/search"
  };

  return (
    <div className="search">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter your input..."
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Search;
