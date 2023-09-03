/* eslint-disable react/prop-types */
import { useCartUpdate } from "../hooks/CartContext";
import Rating from "./Rate";
import { AddCart, AddCartPlus } from "./svg/addCart";
import { Delivery } from "./svg/Delivery";
import { DiscountTag } from "./svg/discountTag";
/* eslint-disable react/no-unknown-property */
export const NewsCard = ({ props }) => {
	const addCart = useCartUpdate();
	let inDiscount = false;
	const discountPrice = (props.price - props.price * (props.discount / 100)).toFixed(0);
	const id = String(props.id).padStart(4, "0");

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
						<Rating stars={props.stars} />
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
	const id = String(props.id).padStart(4, "0");

	if (props.discount > 0) {
		inDiscount = true;
	}

	return (
		<div className={`product ${inDiscount ? "discount" : ""}`}>
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
