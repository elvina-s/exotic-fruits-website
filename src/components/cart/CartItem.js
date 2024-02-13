import "./styles.css";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/cartSlice";
import fruitsData from "../../data/fruitsData";

const CartItem = ({ cartItem }) => {
    const items = fruitsData.find(item => item.id === cartItem.itemId)
    const dispatch = useDispatch();

    return (
        <div className="cartItemParts">
            <div className="cartItemCard">
                <img
                    src={items.src}
                    alt={items.name}
                    className="cartItemImg"
                />
                <div className="cartItemDetails">
                    <p className="cartItemName">{items.name}</p>
                    <p className="cartItemQuantity">{items.quantity}</p>
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
