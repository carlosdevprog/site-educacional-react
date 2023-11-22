import PriceCard from "../pricing/PriceCard"
import Title from "../title/Title"


const Hprice = () => {
    return (
        <>
            <section className="hprice padding">
                    <Title subtitle="NOSSO PREÇOS" title="Planos" />
                <div className="price container grid">
                    <PriceCard/>
                </div>
            </section>
        </>
    )
}

export default Hprice