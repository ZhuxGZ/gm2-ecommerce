import { useCart } from '../hooks/CartContext';
import { Cart } from './svg/Cart';
import { User } from './svg/User';

export default function Navbar() {
	const useCartValue = useCart();
	return (
		<nav>
			<div className="user">
				<User />
			</div>
			<div className="cart">
				<Cart />
				{useCartValue >= 1 && <span className="badge">{useCartValue}</span>}
			</div>
		</nav>
	);
}
