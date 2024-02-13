import "./styles.css";
import FAQData from "../../data/FAQData";
import FAQItem from "./FAQItem";

const FAQ = () => {
    return (
        <div className="FAQ">
            <h1 className="FAQHeader">FREQUENTLY ASKED QUESTIONS</h1>
            <ul className="questionUl">
                <li className="questionLi">
                    {
                        FAQData.map((item) => (
                            <FAQItem key={item.id} item={item}/>
                        ))
                    }
                </li>
            </ul>
        </div>
        );
    }

export default FAQ;