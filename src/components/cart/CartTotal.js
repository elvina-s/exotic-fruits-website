import { getTotalPrice } from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { removeAllItemsFromCart } from "../../redux/cartSlice";
import "./styles.css";

const CartTotal = () => {
    const dispatch = useDispatch();
    const totalPrice = useSelector(getTotalPrice);

    return (
        <div className="cartTotalContainer">
            <p className="cartTotal"><strong>Total: ${totalPrice.toFixed(2)}</strong></p>
            <button
                className="removeAllItemsButton"
                onClick={() => dispatch(removeAllItemsFromCart())}>
                Clear the cart
            </button>
        </div>
    );
}

export default CartTotal;
