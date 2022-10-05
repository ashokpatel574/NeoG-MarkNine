import React from "react";
import CountryDatabase from "./CountryDatabase";
import "./App.css";
import { nanoid } from "nanoid";

function App() {
  const [selectedCountry, setSelectedCountry] = React.useState(() =>
    cityElements("India")
  );

  const countryArray = Object.keys(CountryDatabase);
  const countryElements = countryArray.map((data) => {
    return (
      <li
        className="country"
        key={nanoid()}
        onClick={(e) => handleClickEvent(e)}
      >
        {data}
      </li>
    );
  });

  function cityElements(value) {
    return CountryDatabase[value].map((data) => {
      const { name, country, population, size, poster, fact } = data;
      return (
        <div className="city" key={nanoid()}>
          <div className="image-box">
            <img src={poster} alt={name} />
          </div>
          <div className="text-box">
            <h3 className="cityName">City: {name}</h3>
            <h4 className="countryName">Country: {country}</h4>
            <h4 className="population">Population: {population}</h4>
            <h4 className="area">Area: {size}</h4>
            <p className="description">
              <strong>Description: </strong> {fact}
            </p>
          </div>
        </div>
      );
    });
  }

  function handleClickEvent(e) {
    const text = e.target.innerText;
    return setSelectedCountry(() => cityElements(text));
  }

  return (
    <div className="App">
      <header className="header">
        <nav className="nav">
          <h1>Major cities across the country</h1>
          <ul className="countries-container">{countryElements}</ul>{" "}
        </nav>
      </header>
      <hr />
      <main className="main-container">
        <section className="cities-container">{selectedCountry}</section>
      </main>
    </div>
  );
}

export default App;
