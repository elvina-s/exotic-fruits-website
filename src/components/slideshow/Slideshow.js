import "./styles.css"
import CarouselData from "../../data/CarouselData";
import { useState, useEffect } from "react"; 

const Slideshow = () => {
    const [photo, setPhoto] = useState(0);
    const { img } = CarouselData[photo]

    useEffect(() => {
        const interval = setInterval(() => {
            Change();
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const Change = () => {
        setPhoto((photo => {
            photo++;
        if (photo > CarouselData.length - 1) {
            return photo = 0;
        }
        return photo;}))
    };

    return (
        <div className="Photo">
            <img
                src={img}
                alt="fruit"
                className="slideshowImg"
            />
            <h1 className="header">EXOTIC FRUITS SHOP</h1>
        </div>
    );
}

export default Slideshow;
