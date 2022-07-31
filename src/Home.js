import React from "react";
import "./Home.css";
import Product from "./Product";
import backgroundImage from './assets/main_image.jpg'
import 'animate.css';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="zoomout">
        <img
          className="home__image"
          src={backgroundImage}
          alt=""
        /><div id="shopgiftify" class="animate__animated animate__fadeInUp">EXPLICIT GIFTS</div></div>

        <div className="home__row">
          <Product
            id="12321341"
            title="100 Red and Pink Rose Bouquet"
            price={4.00}
            rating={5}
            image="https://cdn.shopify.com/s/files/1/0583/3175/8777/products/product_1195_1_fb86f171-1622-4b26-bc8e-b7f98e4bd538_360x.jpg?v=1657886300"
          />
          <Product
            id="49538094"
            title="Brown Teddy Bear with Golden Paws - 50CM"
            price={12.0}
            rating={4}
            image="https://cdn.shopify.com/s/files/1/0583/3175/8777/products/MG_9392_360x.jpg?v=1652937970"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Pink Bird School Bag"
            price={20}
            rating={3}
            image="https://cdn.shopify.com/s/files/1/0583/3175/8777/products/8907089607088-_1_360x.jpg?v=1631862419"
          />
          <Product
            id="23445930"
            title="Chocolate dropping Cake 500 GM"
            price={10}
            rating={5}
            image="https://cdn.shopify.com/s/files/1/0583/3175/8777/products/product_403_1_0b9884ac-ac3d-44a4-a317-69a391c1b6e8_360x.jpg?v=1657884475"
          />
          <Product
            id="3254354345"
            title="Bottle 365 days"
            price={8}
            rating={4}
            image="https://cdn.shopify.com/s/files/1/0583/3175/8777/products/7A_8ffc2179-aaa9-4008-8106-4d8061021759_360x.jpg?v=1635593109"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Saxxyy Pillow"
            price={10}
            rating={4}
            image="https://cdn.shopify.com/s/files/1/0583/3175/8777/products/001_5_360x.jpg?v=1638441289"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
