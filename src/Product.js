import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  const setOpacityOver1 = () =>{
    const womenImage = document.getElementById(id);
    const zoomIn = womenImage.getElementsByTagName('img')[0];
    console.log(womenImage.getElementsByTagName('img')[0]);
    zoomIn.style.transform = "scale(1.3)";
  }
  
  const setOpacityOut1 = () =>{
    const womenImage = document.getElementById(id);
    const zoomIn = womenImage.getElementsByTagName('img')[0];
    console.log(womenImage.getElementsByTagName('img')[0]);
    zoomIn.style.transform = "scale(1)";
    // womenImage.style.transform = "scale(1)";
  }

  // onmouseover={setOpacityOver1()} onmouseout={setOpacityOut1()}

  return (
    <div id={id} className="product" onMouseOver={setOpacityOver1} onMouseOut={setOpacityOut1}>
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>

      <img src={image} alt="" />
      <section class="sec1">
          <button class="view_features" onClick={addToBasket}>Add to Basket</button>
        </section>
    </div>
  );
}

export default Product;
