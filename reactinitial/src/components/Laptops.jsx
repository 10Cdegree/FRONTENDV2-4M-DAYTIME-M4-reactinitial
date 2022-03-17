import { useState } from "react";

const Laptops = (props) => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  }

  return (
    <div>
      <h2>{props.name}</h2>
      <button onClick={handleClick}>
        {show ? "Show less" : "Show more"}
      </button>
      {show && <p>weight in kg: {props.weigth}</p>}
      {show && <p>type of brand: {props.brand}</p>}
    </div>
  );
};

export default Laptops;
