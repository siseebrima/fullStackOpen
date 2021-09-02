import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState("");
  const [toShow, setToShow] = useState([]);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      const data = response.data;
      console.log(data);
      setCountries(data);
    });
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    const show = countries.filter((c) => {
      return c.name.toLowerCase().includes(value.toLowerCase());
    });
    setFiltered(value);
    setToShow(show);
  };

  const handleButton = () => {
    console.log("i got clicked");
  };

  return (
    <div>
      <h1>hello</h1>
      <p>
        find countries
        <input value={filtered} onChange={handleChange} />
      </p>
      <div>
        {toShow.length > 10
          ? "Too many matches, specify another filter"
          : toShow.length === 1
          ? toShow.map((c) => {
              return (
                <div key={c.name}>
                  <h2>{c.name}</h2>
                  <div>
                    <p>capital {c.capital}</p>
                    <p>population {c.population}</p>
                    <h3>languages</h3>
                    <ul>
                      {c.languages.map((l) => {
                        return <li>{l.name}</li>;
                      })}
                    </ul>
                    <img src={c.flag} alt="flag of country" width="150px" />
                  </div>
                </div>
              );
            })
          : toShow.map((c) => {
              return (
                <p>
                  {c.name} <button onClick={handleButton}>show</button>
                </p>
              );
            })}
      </div>
    </div>
  );
};

export default App;
