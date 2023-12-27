const CartCard = ({ isCartOpen, cartItems, deleteItem }) => {
  const cartCard = ` w-[362px] min-h-[256px]  bg-white  left-1/2 fixed -translate-x-1/2 lg:translate-x-[16rem] rounded-[10px] flex flex-col z-[2] lg:z-[50] `;

  return (
    <>
      <div
        style={{ boxShadow: '0px 3px 6px rgba(0,0,0,.40)' }}
        className={
          isCartOpen
            ? `${cartCard} md:-translate-x-0 invisible -top-1/2 lg:top-0 lg:opacity-0 transition-all duration-200 ease-linear`
            : `${cartCard} md:-translate-x-0 visible top-20 lg:top-[86px] lg:translate-x-[40%] xl:translate-x-[16rem] transition-all duration-300 `
        }
      >
        <div className={`p-6 border-b w-full border-b-grayish-blue`}>
          <h3 className={`font-bold text-base`}>Cart</h3>
        </div>
        <div className={` flex-1 w-full h-full pb-2`}>
          <p
            className={`font-bold absolute left-1/2 translate-y-1/2 -translate-x-1/2 top-1/2`}
          >
            {(cartItems.length === 0 || cartItems[0].quantity === 0) &&
              "Your cart is empty."}
          </p>
          {cartItems.length > 0 && (
            <>
              {cartItems[0].quantity !== 0 && (
                <div className={`cursor-pointer absolute right-6 top-1/2 -translate-y-4`} onClick={deleteItem}>

                  <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a" fill="#C3CAD9" fill-rule="nonzero" /></svg>
                </div>
              )}
              <div className={`flex flex-col gap-6 p-6`}>
                {cartItems[0].quantity !== 0 &&
                  cartItems.map((item) => (
                    <div
                      className={`flex items-center justify-start gap-5`}
                      key={crypto.randomUUID()}
                    >
                      <div
                        className={`w-[50px] h-[50px] rounded-[3px] overflow-hidden`}
                      >
                        <img
                          src={item.productImg}
                          alt=""
                          className={`w-full h-full`}
                        />
                      </div>
                      <div className={`flex flex-col gap-1.5`}>
                        <h3 className={`text-base text-dark-grayish-blue`}>
                          {item.title}
                        </h3>
                        <div className={`flex items-center gap-2`}>
                          <span
                            className={`text-base text-dark-grayish-blue tracking-wide`}
                          >
                            ${item.price / item.quantity}.00&nbsp;&times;&nbsp;
                            {item.quantity}
                          </span>
                          <span className={`font-bold tracking-wide`}>
                            ${item.price}.00
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                {cartItems[0].quantity !== 0 && (
                  <button
                    className={`w-full bg-orange h-[56px] rounded-[10px] text-white text-base font-bold tracking-wide`}
                  >
                    Checkout
                  </button>
                )}
              </div>
            </>
          )}
          {/*{cartItems.length > 0 && (*/}
          {/*  <div className={`flex flex-col gap-6 p-6`}>*/}
          {/*    {cartItems.map((item) => (*/}
          {/*      <div*/}
          {/*        className={`flex items-center justify-start gap-5`}*/}
          {/*        key={crypto.randomUUID()}*/}
          {/*      >*/}
          {/*        <div*/}
          {/*          className={`w-[50px] h-[50px] rounded-[3px] overflow-hidden`}*/}
          {/*        >*/}
          {/*          <img*/}
          {/*            src={item.productImg}*/}
          {/*            alt=""*/}
          {/*            className={`w-full h-full`}*/}
          {/*          />*/}
          {/*        </div>*/}
          {/*        <div className={`flex flex-col gap-1.5`}>*/}
          {/*          <h3 className={`text-base text-dark-grayish-blue`}>*/}
          {/*            {item.title}*/}
          {/*          </h3>*/}
          {/*          <div className={`flex items-center gap-2`}>*/}
          {/*            <span*/}
          {/*              className={`text-base text-dark-grayish-blue tracking-wide`}*/}
          {/*            >*/}
          {/*              ${item.price / item.quantity}.00&nbsp;&times;&nbsp;*/}
          {/*              {item.quantity}*/}
          {/*            </span>*/}
          {/*            <span className={`font-bold tracking-wide`}>*/}
          {/*              ${item.price}.00*/}
          {/*            </span>*/}
          {/*          </div>*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*    ))}*/}
          {/*    */}
          {/*  </div>*/}
          {/*)}*/}
        </div>
      </div>
    </>
  );
};
export default CartCard;
