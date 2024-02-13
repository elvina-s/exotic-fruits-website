import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import ItemPage from "./pages/ItemPage";
import CartPage from "./pages/CartPage";
import FAQPage from "./pages/FAQPage";
import ScrollToTop from "./ScrollToTop";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";

function App() {
	return (
		<div>
			<ScrollToTop/>
			<Navbar/>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/catalogue/:id" element={<ItemPage />} />
				<Route path="/cart" element={<CartPage />} />
				<Route path="/faq" element={<FAQPage />} />
			</Routes>
		</div>
	);
}

export default App;