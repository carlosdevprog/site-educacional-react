import { testimonal } from "../../../dummydata"
import Title from "../../title/Title"
import "./testimonal.css"

const Testimonial = () => {
    return (
        <>
            <section className="testimonal padding">
                <div className="container">
                    <Title subtitle="DEPOIMENTOS" title="Nossos Alunos De Sucesso" />

                    <div className="content grid2">
                        {testimonal.map((item) => (
                            <div key={item.id} className="items shadow">
                                <div className="box flex">
                                    <div className="img">
                                        <img src={item.cover} alt="persons" />
                                        <i className="fa fa-quote-left icon"></i>
                                    </div>
                                    <div className="name">
                                        <h2>{item.name}</h2>
                                        <span>{item.post}</span>
                                    </div>
                                </div>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonial