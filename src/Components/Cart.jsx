const Cart = ({openCart}) => {
	return (
		<>
		<div onClick={openCart}>
			<img src="/src/assets/images/icon-cart.svg" alt='' className={`cursor-pointer`}/>
		</div>
		</>
	)
}
export default Cart
