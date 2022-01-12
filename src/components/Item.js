import React, {useState} from "react";

function Item({ name, category }) {
  const [isIn, setIsIn] = useState(false)

  function handleClick (){
    setIsIn((isIn) => !isIn)
  }

  const stuff = isIn ? "Remove From Cart" : "Add to Cart"
  const classCart = isIn ? "in-cart" : ""

  return (
    <li className={classCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{stuff}</button>
    </li>
  );
}

export default Item;
