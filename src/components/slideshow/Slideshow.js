import "./styles.css"
import CarouselData from "../../data/CarouselData";
import { useState, useEffect } from "react"; 

const Slideshow = () => {
    const [photo, setPhoto] = useState(0);
    const { img } = CarouselData[photo]

    useEffect(() => {
        const interval = setInterval(() => {
            Change();
        }, 2500);

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
        <div className="Photo"
            style={{
                backgroundImage: `url(${img})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                filter: "brightness(80%)",
                height: "350px",
                transition: "1s",
            }}>
        </div>
    );
}

export default Slideshow;