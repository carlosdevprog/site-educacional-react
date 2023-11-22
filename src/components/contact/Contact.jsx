import Back from "../back/Back"
import "./contact.css"

const Contact = () => {

    const map = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1174.4538142859471!2d-34.87354008123851!3d-8.063074532712719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18a3179eebef%3A0x7caecfbcc5347f69!2sPorto%20Digital%20-%20NGPD%20(N%C3%BAcleo%20de%20Gest%C3%A3o%20do%20Porto%20Digital)!5e0!3m2!1spt-BR!2sbr!4v1700638401974!5m2!1spt-BR!2sbr"

    return (
        <>
            <Back title="FALE CONOSCO" />
            <section className="contact padding">
                <div className="container shadow flexSB">
                    <div className="left row">
                        <iframe src={map} ></iframe>
                    </div>
                    <div className="right row">
                        <h1>Fale Conosco</h1>
                        <p>Nos envie uma mensagem!</p>

                        <div className="items grid2">
                            <div className="box">
                                <h4>Endereço:</h4>
                                <p>Cais do Apolo, 222 - Recife, PE, 50030-230</p>
                            </div>
                            <div className="box">
                                <h4>Email:</h4>
                                <p>carloseduardolima.dev@gmail.com</p>
                            </div>
                            <div className="box">
                                <h4>Celular:</h4>
                                <p>(81)999003257</p>
                            </div>
                        </div>

                        <form action="">
                            <div className="flexSB">
                                <input type="text" placeholder="Nome" />
                                <input type="email" placeholder="Email" />
                            </div>
                            <input type="text" placeholder="Assunto" />
                            <textarea cols="30" rows="10" placeholder="Escreva sua mensagem aqui..."></textarea>
                            <button className="primary-btn">ENVIAR</button>
                        </form>

                        <h3>Nos Siga Nas Redes Sociais</h3>
                        <span>FACEBOOK INSTAGRAM LINKEDIN</span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact