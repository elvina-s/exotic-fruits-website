import "./styles.css";
import { getCartItems } from "../../redux/cartSlice";
import { useSelector } from "react-redux";
import CartTotal from "./CartTotal";
import CartItemS from "./CartItemS";
import { Link } from "react-router-dom";

const Cart = () => {
    const cartItems = useSelector(getCartItems);

    let cartItemsContent = null;
    if (cartItems.length > 0) {
        cartItemsContent = (
            <div className="Cart">
                <CartTotal/>
                <CartItemS/>
            </div>
        ) 
    } else {
        cartItemsContent = (
            <div className="noItems">
                <h2 className="emptyCartText">
                    Your cart is empty
                </h2>
                <Link to="/"><button className="goToCatalogueBtn">GO TO CATALOGUE</button></Link>
            </div>
        )
    }
    return (
        <div>
            <div>
                {cartItemsContent}
            </div>
        </div>
    );
}

export default Cart;
