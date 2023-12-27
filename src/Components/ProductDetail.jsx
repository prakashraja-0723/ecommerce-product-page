const ProductDetail = ({productDetails}) => {
  return (
    <>
        <span
          className={`text-orange text-[12px] font-bold tracking-[.125rem]`}
        >
          SNEAKER COMPANY
        </span>
        <h1 className={`mt-3 font-bold text-3xl leading-[2.65rem] lg:text-[42px] lg:leading-[48px]`}>
          {productDetails[0].title}
        </h1>
        <p className={`mt-2 text-[14px] tracking-wide lg:mt-[38px]`}>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        
    </>
  );
};
export default ProductDetail;
