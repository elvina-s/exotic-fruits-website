import "./styles.css";

import { useState } from "react";

const FAQItem = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);
    const hadnleIsOpen = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className="FAQItem">
            <div className={isOpen ? "open" : "close"}>
                <h2 className="h2">{`${item.id + 1}. `} {item.question}</h2>
                <button onClick={() => hadnleIsOpen()}>X</button>
            </div>
            <div>
                {
                    isOpen && <h3 className="FAQAnswer">{`- ${item.answer}`}</h3>
                }
            </div>
        </div>
    );
}

export default FAQItem;

