import { useState } from "react"
import { faq } from "../../dummydata"
import Title from "../title/Title"
import "./price.css"

const Faq = () => {

    const [click, setCLick] = useState(false)
    const toggle = (index) => {
        if (click === index) {
            return setCLick(null)
        }
        setCLick(index)
    }

    return (
        <>
            <Title subtitle="FAQS" title="Perguntas Frequentes" />
            <section className="faq">
                <div className="container">
                    {faq.map((item, index) => (
                        <div key={item.id} className="box">
                            <button className="accordion" onClick={() => toggle(index)}>
                                <h2>{item.title}</h2>
                                <span>{click === index ? <i className="fa fa-chevron-down"></i> : <i className="fa fa-chevron-right"></i>}</span>
                            </button>
                            {click === index ? (
                                <div className="text">
                                <p>{item.desc}</p>
                            </div>
                            ) : null }
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Faq