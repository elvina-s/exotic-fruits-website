import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { getCartItems } from "../../redux/cartSlice";
import "./styles.css";

const CartItemS = () => {
    const cartItems = useSelector(getCartItems);
    return (
        <div className="cartItemS">
        {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} cartItem={cartItem} /> 
    ))}
    </div>
    );
}

export default CartItemS;