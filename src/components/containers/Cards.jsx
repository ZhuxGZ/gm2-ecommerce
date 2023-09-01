/* eslint-disable react/prop-types */
import { useCartUpdate } from '../hooks/CartContext';
import { AddCart, AddCartPlus } from './svg/addCart';
import { Delivery } from './svg/Delivery';
import { DiscountTag } from './svg/discountTag';
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
					<DiscountTag discount={props.discount} />
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
