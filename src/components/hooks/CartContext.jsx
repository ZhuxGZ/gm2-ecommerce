import { useState, useContext, createContext } from 'react';

export const CartContext = createContext();
export const CartUpdateContext = createContext();

export const useCart = () => {
	return useContext(CartContext);
};

export const useCartUpdate = () => {
	return useContext(CartUpdateContext);
};

const CartProvider = ({ children }) => {
	const [cartValue, setCartValue] = useState(localStorage.getItem('cartValue'));
	localStorage.setItem('cartValue', cartValue === null ? 0 : cartValue);
	const addCart = () => {
		setCartValue(Number(cartValue) + 1);
		return cartValue;
	};

	return (
		<CartContext.Provider value={cartValue}>
			<CartUpdateContext.Provider value={addCart}>{children}</CartUpdateContext.Provider>
		</CartContext.Provider>
	);
};

export default CartProvider;
