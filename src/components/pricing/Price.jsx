import Back from '../back/Back';
import Faq from './Faq';
import PriceCard from './PriceCard';
import "./price.css"

const Price = () => {
    return (
        <>
            <Back title="Escolha O Seu Plano"/>            
            <section className='price padding'>
                <div className="container grid">
                    <PriceCard/>
                </div>
            </section>
            <Faq/>
        </>
    )
}

export default Price