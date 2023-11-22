import { price } from "../../dummydata"
import "./price.css"

const PriceCard = () => {
    return (
        <>
        {price.map((item)=>(
            <div key={item.id} className="items shadow">
                <h4>{item.name}</h4>
                <h1>
                    <span>R$</span>
                    {item.price}
                </h1>
                <p>{item.desc}</p>
                <button className="outline-btn">INICIAR</button>
            </div>
        ))}
        </>
    )
}

export default PriceCard