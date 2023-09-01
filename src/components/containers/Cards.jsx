/* eslint-disable react/prop-types */
import { useCartUpdate } from '../hooks/CartContext';
import { AddCart, AddCartPlus } from './svg/addCart';
import { Delivery } from './svg/Delivery';
/* eslint-disable react/no-unknown-property */
export const NewsCard = ({ props }) => {
	const addCart = useCartUpdate();
	let inDiscount = false;
	const discountPrice = (props.price - props.price * (props.discount / 100)).toFixed(0);
	const id = String(props.id).padStart(4, '0');

	if (props.discount > 0) {
		inDiscount = true;
	}

	return (
		<div className="news">
			<div className="prodInfo">
				<img
					src="https://cdn.motor1.com/images/mgl/RqgR3K/s1/mazda-cx-60-2022.jpg"
					alt=""
				/>
				<div className="prodData">
					<h3 className="name">{props.name}</h3>
					<div className="rate">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
						>
							<path
								d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
								fill={props.stars >= 1 ? '#FFD100' : 'none'}
								stroke="#FFD100"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
						>
							<path
								d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
								fill={props.stars >= 2 ? '#FFD100' : 'none'}
								stroke="#FFD100"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
						>
							<path
								d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
								fill={props.stars >= 3 ? '#FFD100' : 'none'}
								stroke="#FFD100"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
						>
							<path
								d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
								fill={props.stars >= 4 ? '#FFD100' : 'none'}
								stroke="#FFD100"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
						>
							<path
								d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
								fill={props.stars >= 5 ? '#FFD100' : 'none'}
								stroke="#FFD100"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
						<span className="numReviews">{props.reviews}</span>
					</div>
					<p className="id">{id}</p>
					{inDiscount && <p className="listPrice">{props.price}</p>}
				</div>
			</div>
			<p className="price">{inDiscount ? props.price : discountPrice}</p>
			<div className="btn">
				<button>
					<Delivery />
				</button>
				<button onClick={addCart}>
					<AddCart />
				</button>
			</div>
		</div>
	);
};

export const ProdCard = ({ props }) => {
	let inDiscount = false;
	const addCart = useCartUpdate();
	const discountPrice = (props.price - props.price * (props.discount / 100)).toFixed(0);
	const id = String(props.id).padStart(4, '0');

	if (props.discount > 0) {
		inDiscount = true;
	}

	return (
		<div className={`product ${inDiscount ? 'discount' : ''}`}>
			<div className="productInfo">
				<div className="info">
					<img
						src="https://cdn.motor1.com/images/mgl/RqgR3K/s1/mazda-cx-60-2022.jpg"
						alt=""
					></img>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="137"
						height="137"
						viewBox="0 0 137 137"
						fill="none"
						className={inDiscount && 'forSale'}
					>
						<path
							d="M59.4394 71.1926L64.7025 71.2927L62.2494 61.9546L59.4394 71.1926Z"
							fill="#941B0C"
						/>
						<path
							d="M129.405 61.9836L113.935 45.909C110.539 42.3801 104.043 39.5422 99.1471 39.4491L34.4301 38.2107C31.6641 38.1572 29.0381 39.1902 27.0343 41.1189C25.0305 43.0477 23.8985 45.633 23.8456 48.3987L23.1219 86.212C23.069 88.9777 24.1018 91.6049 26.0299 93.6084C27.9585 95.6123 30.5436 96.7444 33.3096 96.7979L98.0266 98.0353C102.923 98.1294 109.523 95.542 113.051 92.1457L129.125 76.6734C133.252 72.7006 133.377 66.1108 129.405 61.9836ZM111.27 71.9247C110.526 71.91 109.804 71.5944 109.289 71.0586C108.772 70.5222 108.486 69.7894 108.5 69.0468C108.513 68.3025 108.829 67.5808 109.365 67.0645C109.901 66.5488 110.633 66.2616 111.378 66.2769C112.12 66.2911 112.841 66.6061 113.357 67.1424C113.873 67.6783 114.161 68.4116 114.147 69.1548C114.133 69.898 113.818 70.6193 113.282 71.135C112.746 71.6512 112.012 71.9389 111.27 71.9247Z"
							fill="#941B0C"
						/>
						<text x="45" y="75" fill="black" className="forSaleText">
							{`${props.discount}%`}
						</text>
					</svg>
					<h3>{props.name}</h3>
					<p className="id"> {id}</p>
				</div>
			</div>
			<div className="bottom">
				<button className="addToCart" onClick={addCart}>
					<AddCartPlus />
				</button>
				<div className="prodPrice">
					{inDiscount && <p className="listPrice">{props.price}</p>}
					<p className="price">{inDiscount ? discountPrice : props.price}</p>
				</div>
			</div>
		</div>
	);
};
