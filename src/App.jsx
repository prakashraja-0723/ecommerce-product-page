
import { useState } from "react";
import Navbar from "./Components/Navbar.jsx";
import { AddCart, ImageSlider, Price, ProductDetail } from "/src/import-files.js";
import productImg from '/src/assets/images/image-product-1-thumbnail.jpg';

let cartItems = [];
const App = () => {
  let productDetails = [
    {
      productImage: productImg,
      price: 125,
      title: `Fall Limited Edition Sneakers`,
    },
  ];
  const [currentQuantity, setCurrentQuantity] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleAddQuantity = () => {
    setCurrentQuantity(currentQuantity + 1);
    cartItems.pop(cartItems[0]);
    cartItems.push({
      productImg: productDetails[0].productImage,
      title: productDetails[0].title,
      quantity: currentQuantity + 1,
      price: productDetails[0].price * (currentQuantity + 1),
    });
    console.log(cartItems);
  };
  const handleRemoveQuantity = () => {
    setCurrentQuantity(
      currentQuantity === 0 ? currentQuantity : currentQuantity - 1,
    );
    cartItems.pop(cartItems[0]);
    cartItems.push({
      productImg: productDetails[0].productImage,
      quantity: currentQuantity - 1,
      title: currentQuantity !== 1 && productDetails[0].title,
      price: productDetails[0].price * (currentQuantity - 1),
    });
    console.log(currentQuantity);
    currentQuantity <= 1 && cartItems.pop(cartItems[0]);
    console.log(cartItems);
  };
  // let editCart = () => {
  //   cartItems.pop(cartItems[0]);
  //   cartItems.push({
  //     title: productDetails[0].title,
  //     quantity: currentQuantity + 1,
  //     price: productDetails[0].price * (currentQuantity + 1),
  //   });
  //   console.log(cartItems);
  // };
  const addToCart = () => {
    cartItems.pop(cartItems[0]);
    cartItems.push({
      productImg: productDetails[0].productImage,
      title: productDetails[0].title,
      quantity: currentQuantity,
      price: productDetails[0].price * currentQuantity,
    });
    cartItems[0].quantity !== 0 &&
      setTimeout(() => {
        setIsCartOpen(false);
      }, 100);
  };

  const deleteItem = () => {

    cartItems.pop(cartItems[0]);
    setIsCartOpen(!isCartOpen);
    setCurrentQuantity(0);
  };

  return (
    <>
      <div
        className={`w-full h-full lg:w-full xl:w-[1110px] xl:h-full lg:m-auto`}
      >
        <Navbar
          cartItems={cartItems}
          deleteItem={deleteItem}
          isCartOpen={isCartOpen}
          isMenuOpen={isMenuOpen}
          setIsCartOpen={setIsCartOpen}
          setIsMenuOpen={setIsMenuOpen}
          currentQuantity={currentQuantity}
        />
        <div className={`w-full h-full lg:flex lg:items-center lg:justify-around xl:justify-between lg:px-12 lg:mt-[90px]`}>
          <div className={`lg:w-[445px] h-full`}>
            <ImageSlider />
          </div>
          <section className={`m-6 lg:w-[445px] lg:h-fit lg:m-0`}>
            <ProductDetail productDetails={productDetails} />
            <Price />
            <AddCart
              addQuantity={handleAddQuantity}
              removeQuantity={handleRemoveQuantity}
              currentQuantity={currentQuantity}
              addItemToCart={addToCart}
            />
          </section>
        </div>
      </div>
    </>
  );
};
export default App;
