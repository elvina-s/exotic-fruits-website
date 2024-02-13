import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setSearchedItem } from "../../redux/itemsSlice";
import { getSearchItem } from "../../redux/itemsSlice";
import fruitsData from "../../data/fruitsData";
import Item from "../item/Item";
import "./styles.css"

const Catalogue = () => {
    const dispatch = useDispatch();

    const searchedItem = useSelector(getSearchItem);  // the state of a searched item (1)

    const searchResult = fruitsData.filter(item => 
        item.name.toLocaleLowerCase().includes(searchedItem.toLocaleLowerCase())
    )
    return (
        <div className="Catalogue">
            <div className="catalogueInfoAndSearch">
                <h1 className="catalogueHeader"><strong>CATALOGUE</strong></h1>
                <input
                    className="searchInput"
                    type="text"
                    value={searchedItem}
                    onChange={(e) => dispatch(setSearchedItem(e.target.value))}
                    placeholder="Search Product"
                />
            </div>
            <div className="Item">
                {
                    searchResult.map(item => <Item key={item.id} item={item}/>)
                }
            </div>
        </div>
    );
}

export default Catalogue;
