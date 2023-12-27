const AddCart = ({currentQuantity,addQuantity,removeQuantity,addItemToCart}) => {
  const addItem = () => {
    addItemToCart();
  }
  
  return (
    <>
      <div
        className={`mt-6 flex items-center gap-4 flex-col pb-6 md:flex-row md:justify-between lg:mt-[38px]`}
      >
        <button
          className={`h-14  bg-light-grayish-blue text-black font-bold flex items-center justify-between w-full rounded-[12px] md:w-5/12 md:rounded-[6px] lg:rounded-xl`}
        >
          <span onClick={removeQuantity} className={`px-6 h-full flex items-center`}>
            <img src="/src/assets/images/icon-minus.svg" alt={crypto.randomUUID()} />
          </span>
          <span>{currentQuantity}</span>
          <span onClick={addQuantity} className={`px-6 h-full flex items-center`}>
            <img src="/src/assets/images/icon-plus.svg" alt={crypto.randomUUID()} />
          </span>
        </button>
        <button
          className={`px-6 w-full h-14 rounded-[12px] bg-orange text-white font-bold flex items-center justify-center gap-4 md:w-7/12 md:rounded-[6px] lg:rounded-xl`}
          onClick={addItem}
        >
          <span>
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#fff" /></svg>
          </span>
          Add to cart
        </button>
      </div>
    </>
  );
};
export default AddCart;
