import { blog } from "../../dummydata"
import "./footer.css"

const Footer = () => {
    return (
        <>
            <section className="newletter">
                <div className="container flexSB">
                    <div className="left row">
                        <h1>Newsletter - Fique ligado e receba as últimas atualizações</h1>
                        <span>Mantenha-se sempre atualizado e por dentro das novidades</span>
                    </div>
                    <div className="right row">
                        <input type="text" placeholder="Cadastre seu email aqui..." />
                        <i className="fa fa-paper-plane"></i>
                    </div>
                </div>
            </section>

            <footer>
                <div className="container padding">
                    <div className="box logo">
                        <h1>ACADEMIA</h1>
                        <span>EDUCAÇÃO E APRENDIZAGEM ONLINE</span>
                        <p>Iniciei a sua carreira na tecnologia e tenha muito sucesso na sua vida profissional.</p>                        
                        <i className="fab fa-instagram icon"></i>
                        <i className="fab fa-linkedin icon"></i>
                        <i className="fab fa-github icon"></i>
                    </div>
                    <div className="box link">
                        <h3>Explore</h3>
                        <ul>
                            <li>Sobre Nós</li>
                            <li>Serviços</li>
                            <li>Cursos</li>
                            <li>Blog</li>
                            <li>Fale Conosco</li>
                        </ul>
                    </div>
                    <div className="box link">
                        <h3>Links</h3>
                        <ul>
                            <li>Fale Conosco</li>
                            <li>Preços</li>
                            <li>Termos & Condições</li>
                            <li>Privacidade</li>
                            <li>Feedbacks</li>
                        </ul>
                    </div>
                    <div className="box">
                        <h3>Posts Recentes</h3>
                        {blog.slice(0, 3).map((item) => {
                            return (
                                <div key={item.id} className="items flexSB">
                                    <div className="img">
                                        <img src={item.cover} alt="icons" />
                                    </div>
                                    <div className="text">
                                        <span>
                                            <i className="fa fa-user"></i>
                                            <label htmlFor="">{item.type}</label>
                                        </span>
                                        <span>
                                            <i className="fa fa-calendar-alt"></i>
                                            <label htmlFor="">{item.date}</label>
                                        </span>
                                        <h4>{item.title}</h4>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="box last">
                        <h3>Tem alguma pergunta?</h3>
                        <ul>
                            <li>
                                <i className="fa fa-map"></i>
                                Cais do Apolo, 222 - Recife, PE, 50030-230
                            </li>
                            <li>
                                <i className="fa fa-phone-alt"></i>
                                (81)999003257
                            </li>
                            <li>
                                <i className="fa fa-paper-plane"></i>
                                carloseduardolima.dev@gmail.com
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
            <div className="legal">
                <p>Copyright @2023 Todos os direitos reservados | Este site for criado com muito <i className="fa fa-heart"></i> por Cadulimadev </p>
            </div>
        </>
    )
}

export default Footer