import React, { useEffect, useState } from "react";
import LoadingMask from "./components/LoadingMask";
import Laptops from "./components/Laptops";

const url = "https://demoapi.com/api/laptop";

const fetchLaptops = async () => {
  const res = await fetch(url);
  return res.json();
};

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLaptops().then((chars) => {
      setCharacters(chars);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingMask />
      ) : (
        characters.map((char) => <Laptops key={char.name} {...char} />)
      )}
    </div>
  );
};

export default App;
