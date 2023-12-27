import ProductImg1 from "/src/assets/images/image-product-1.jpg";
import ProductImg2 from "/src/assets/images/image-product-2.jpg";
import ProductImg3 from "/src/assets/images/image-product-3.jpg";
import ProductImg4 from "/src/assets/images/image-product-4.jpg";
import ProductThum1 from "/src/assets/images/image-product-1-thumbnail.jpg";
import ProductThum2 from "/src/assets/images/image-product-2-thumbnail.jpg";
import ProductThum3 from "/src/assets/images/image-product-3-thumbnail.jpg";
import ProductThum4 from "/src/assets/images/image-product-4-thumbnail.jpg";
import { useState } from "react";

const ImageSliderDark = () => {
	const images = [ProductImg1, ProductImg2, ProductImg3, ProductImg4];
	const thumbnails = [ProductThum1, ProductThum2, ProductThum3, ProductThum4];
	
	const [currentImage, setCurrentImage] = useState(0);
	
	const goToBack = () => {
		currentImage === 0
			? setCurrentImage(images.length - 1)
			: setCurrentImage(currentImage - 1);
		// setCurrentImage((prevState) =>
		//   prevState === 0 ? prevState.length - 1 : prevState - 1,
		// );
	};
	const goToNext = () => {
		currentImage === images.length - 1
			? setCurrentImage(0)
			: setCurrentImage(currentImage + 1);
	};
	
	const handleSelectImg = (selectedImg) => {
		if (currentImage !== selectedImg) setCurrentImage(selectedImg);
	};
	
	return (
		<>
			<div
				className={`flex flex-col mt-[68px] lg:w-[445px] lg:rounded-md lg:m-0`}
			>
				<div className={`overflow-hidden relative lg:rounded-[14px]`}>
					<button
						className={`absolute w-9 h-9 rounded-full ml-4 bg-white left-0 top-1/2 -translate-y-1/2 grid place-content-center pr-0.5 z-[1]`}
						onClick={goToBack}
					>
						<svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd" /></svg>
					</button>
					<div
						className={`flex transition ease-in-out duration-500 w-full h-full`}
						style={{
							transform: `translateX(-${currentImage * 100}%)`,
						}}
					>
						{images.map((productImage) => {
							return (
								<img src={productImage} alt={crypto.randomUUID()} key={crypto.randomUUID()} />
							);
						})}
					</div>
					<button
						className={`absolute w-9 h-9 rounded-full mr-4 bg-white top-1/2 right-0 -translate-y-1/2 grid place-content-center pr-0.5 z-[1]`}
						onClick={goToNext}
					>
						<svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd" /></svg>
					</button>
				</div>
				<div
					className={`md:mx-8 mt-8 md:flex md:gap-7 hidden lg:mt-[30px] lg:mx-0 lg:gap-0 lg:items-center lg:justify-between`}
				>
					{thumbnails.map((thumbnail, i) => {
						return (
							<div
								key={crypto.randomUUID()}
								className={`relative md:w-20 md:h-20 md:rounded-lg rounded-xl overflow-hidden lg:w-[92px] lg:h-[92px] hover:cursor-pointer ${
									currentImage === i
										? `border-orange border-2 transition-all duration-500 ease-in-out`
										: `border-none transition-all duration-500 ease-in-out`
								}`}
							>
								<img
									src={thumbnail}
									alt={crypto.randomUUID()}
								
								/>
								<div
									onClick={() => handleSelectImg(i)}
									className={`${
										currentImage === i
											? `absolute bg-[rgba(255,255,255,.7)] w-full h-full top-0`
											: `absolute bg-transparent w-full h-full top-0 after:content-[''] after:w-full after:h-full hover:after:bg-[rgba(255,255,255,.5)] after:absolute  after:top-0 after:left-0 after:overflow-hidden`
									}`}
								></div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};
export default ImageSliderDark;

