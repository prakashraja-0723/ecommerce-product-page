import { CartCard, Menu } from "../../import-files.js";

const Navbar = ({cartItems,deleteItem,isMenuOpen,setIsMenuOpen,isCartOpen,setIsCartOpen,currentQuantity}) => {
  
  const openCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <>
      <nav
        className={`flex items-center justify-between bg-white px-6 h-[68px] w-screen z-10 fixed top-0 lg:relative lg:w-full lg:h-[112px] lg:py-2 lg:border-b border-b-grayish-blue lg:px-6`}
      >
        <div className={`flex items-center gap-4 lg:gap-[56px]`}>
          <div className={`cursor-pointer lg:hidden lg:w-6`} onClick={openMenu}>
            <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg"><path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill="#69707D"/></svg>
          </div>
          <img src="/src/assets/images/logo.svg" alt={crypto.randomUUID()} />
        <div className={`${isMenuOpen ? `absolute top-0 left-0 w-20 h-20 bg-[rgba(0,0,0,0.75)] scale-[50] transition-all duration-500 rounded-full`:`absolute top-0 left-0 w-0 h-0  scale-[1] transition-all duration-500 delay-75`} lg:hidden`}></div>
          <div
            className={`${isMenuOpen ? `absolute w-screen h-screen  left-0 top-0 transition-all duration-500 delay-75`:'absolute w-screen h-screen top-0 -left-[200%] transition-all duration-500'} lg:relative lg:w-auto lg:h-auto lg:top-auto lg:left-auto lg:transition-none lg:delay-0`}
          >
            <Menu openMenu={openMenu} />
          </div>
        </div>
        <div className={`flex items-center gap-6`}>
          <div onClick={openCart} className={`cursor-pointer relative`}>
            <span className={`absolute bg-orange -top-2 -right-2 w-fit h-fit text-[10px] grid place-items-center px-1.5 py-0.5 rounded-full text-white font-bold  leading-none ${currentQuantity === 0 && 'hidden'}`}>{currentQuantity}</span>
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#1D2025"/></svg>
          </div>
          <div className={`w-8 h-8  rounded-full lg:border-2 lg:border-orange lg:w-12 lg:h-12`}>
            <img src="/src/assets/images/avatar.png" alt={crypto.randomUUID()}/>
          </div>
        </div>
      </nav>
      <CartCard isCartOpen={isCartOpen} cartItems={cartItems} setIsCartOpen={setIsCartOpen} deleteItem={deleteItem} />
    </>
  );
};
export default Navbar;
