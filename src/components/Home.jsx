import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";


const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =
  "https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const img3= 
  "https://images.unsplash.com/photo-1597762470488-3877b1f538c6?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"


  const img4=
  "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw64ba4aa5/images/Titan/Catalog/1806NM01_2.jpg?sw=800&sh=800" 







const Home = () => {
  const productList = [
    {
      name: "Mac Book",
      price: 12000,
      imgSrc: img1,
      id: "asdhajsdbhjabhsjdfdfv",
    },
    {
      name: "Titan Watch",
      price: 2000,
      imgSrc: img4,
      id: "asdhajsdbhjabhsrhrthbevrh",
    },
    {
      name: "Samsung Galaxy S22",
      price: 5000,
      imgSrc: img3,
      id: "asdhajsdbhjabhsy5yesrhbgvcknf",
    },
    {
      name: "Black Shoes",
      price: 490,
      imgSrc: img2,
      id: "sdjfdlaajsdbhjabhsjdfdfv",
    },
  ];

  const dispatch = useDispatch();

  const addToCartHandler = (options) => {
    console.log(options);
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice" });
   toast.success("Added To Cart");
  };
  return (
    <>
    <div className="home">
      {productList.map((i) => (
        <ProductCard
          key={i.id}
          imgSrc={i.imgSrc}
          name={i.name}
          price={i.price}
          id={i.id}
          handler={addToCartHandler}
        />
      ))}
    </div>
    <footer className="footer">
    © 2024 React Cart. All rights reserved.
    </footer></>
  );
};

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <div className="productCard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
      Add to Cart
    </button>
  </div>
);

export default Home;