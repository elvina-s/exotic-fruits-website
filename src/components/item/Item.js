import "./styles.css"
import ChangeQuantity from "./ChangeQuantity";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Item = ({item}) => {
    const [quantity, setQuantity] = useState(1);
    const [buttonText, setButtonText] = useState("Add");
    const dispatch = useDispatch();
    const handleClick = () => {
        setButtonText("Added!");
        dispatch(addItemToCart({item, quantity}))
    }
    return (
        <div className="itemCard">
            <div className="itemImg">
                <NavLink to={`/catalogue/${item.id}`}>
                <img 
                src={item.src}
                alt={item.name}
                width={200}
                />
                </NavLink>
            </div>
            <div className="itemDetailsAndQuantity">
                <div className="itemDetails">
                    <NavLink to={`/catalogue/${item.id}`}>
                        <p className="itemName">{item.name}</p>
                    </NavLink>
                    <p className="itemPrice">$ {item.price}</p>
                </div>
                <div className="quantityAndBtn">
                    <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
                    <button
                    className="addToCartBtn"
                    onClick={() => {handleClick(item.id)}}
                    >
                        {buttonText}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Item;
