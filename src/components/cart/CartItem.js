import "./styles.css";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/cartSlice";
import fruitsData from "../../data/fruitsData";
import { NavLink } from "react-router-dom";

const CartItem = ({ cartItem }) => {
    const items = fruitsData.find(item => item.id === cartItem.itemId)
    const dispatch = useDispatch();

    return (
        <div className="cartItemParts">
            <div className="cartItemCard">
                <NavLink to={`/catalogue/${items.id}`}>
                    <img
                        src={items.src}
                        alt={items.name}
                        className="cartItemImg"
                    />
                </NavLink>
                <div className="cartItemDetails">
                    <NavLink to={`/catalogue/${items.id}`}>
                        <p className="cartItemName">{items.name}</p>
                    </NavLink>
                    <p className="cartItemQuantity">Quantity: {cartItem.quantity}</p>
                    <p className="cartItemPrice">$ {(cartItem.quantity * items.price).toFixed(2)}</p>
                    <button
                        className="removeAnItemButton"
                        onClick={() => dispatch(removeItemFromCart({ cartItemId: cartItem.id }))}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
