import Catalogue from "../components/catalogue/Catalogue";
import About from "../components/about/About";
import Photo from "../components/slideshow/Slideshow";

const Home = () => {
    return (
        <div className="Home">
            <Photo/>
            <About />
            <Catalogue />
        </div>
    );
}

export default Home;