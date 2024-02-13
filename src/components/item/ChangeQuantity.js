const ChangeQuantity = ({quantity, setQuantity}) => {
    const increase = () => {
        if(quantity >= 0) {
            setQuantity(quantity + 1)
        } else {return}
    }

    const decrease = () => {
        if(quantity > 0) {
            setQuantity(quantity - 1)
        }
        else {return}
    }
    return (
        <div className="changeQuantity">
            <button
            onClick={decrease}
            className="decreaseBtn">
                -
            </button>
            <p className="quantity">{quantity}</p>
            <button 
            onClick={increase}
            className="increaseBtn">
                +
            </button>
        </div>
    );
}

export default ChangeQuantity;