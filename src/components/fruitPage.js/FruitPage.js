import { useParams } from "react-router-dom";
import "./styles.css";
import fruitsData from "../../data/fruitsData";

const FruitPage = () => {
    const { id } = useParams();
    const fruit = fruitsData[id];

    return (
        <div className="FruitPage">
            <div className="fruitImg">
                <img alt={fruit.name} src={fruit.src} className="img"/>
            </div>
            <div className="fruitDetails">
                <h1 className="fruitName">{fruit.name}</h1>
                <p className="fruitDescription1">{fruit.description}</p>
                <p className="fruitDescription2">{fruit.preparation}</p>
                <p className="fruitPrice">€{fruit.price} <small>per item</small></p>
            </div>
        </div>
    );
}

export default FruitPage;
