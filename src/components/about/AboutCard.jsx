
import Title from './../title/Title';
import { homeAbout } from './../../dummydata';
import AWrapper from './AWrapper';
import "./about.css"

const AboutCard = () => {
    return (
        <>
            <section className="aboutHome">
                <div className="container flexSB">
                    <div className="left row">
                        <img src="./images/about.webp" alt="moça" />
                    </div>
                    <div className="right row">
                        <Title subtitle='APRENDA QUALQUER COISA' title='Benefícios Da Experiência Em Aprendizagem Online'/>
                        <div className="items">
                            {homeAbout.map((item)=> (
                                <div key={item.id} className="item flexSB">
                                    <div className="img">
                                        <img src={item.cover} alt="icones" />
                                    </div>
                                    <div className="text">
                                        <h2>{item.title}</h2>
                                        <h2>{item.desc}</h2>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <AWrapper/>
        </>
    )
}

export default AboutCard