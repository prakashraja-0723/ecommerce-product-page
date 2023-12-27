const Price = () => {
	return (
		<>
			<div className={`mt-6 flex items-center justify-between lg:mt-7 lg:flex-col lg:items-start lg:justify-start`}>
				<div className={`flex items-center gap-4`}>
					<span className={`font-bold text-[28px]`}>$125.00</span>
					<span className={`py-1 px-2.5 rounded-[6px] bg-pale-orange font-bold text-orange`}>50%</span>
				</div>
				<span className={`line-through text-grayish-blue font-bold`}>$250.00</span>
			</div>
		</>
	)
}
export default Price
