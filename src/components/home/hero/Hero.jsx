import Title from "../../title/Title"
import "./hero.css"

const Hero = () => {
    return (
        <>
            <section className="hero">
                <div className="container">
                    <div className="row">
                        <Title subtitle='BEM VINDO(A) À ACADEMIA' title='A Melhor Experiência Em Educação Online' />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, voluptatum molestiae. Delectus voluptate consequuntur dolorum ea pariatur veritatis possimus nisi ipsa quidem. Dolores nemo at ducimus consequatur quisquam autem velit, quidem, exercitationem id ipsum rerum!</p>
                        <div className="button">
                            <button className="primary-btn">
                                COMECE AGORA <i className="fa fa-long-arrow-alt-right"></i>
                            </button>
                            <button>
                                VER CURSO <i className="fa fa-long-arrow-alt-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <div className="margin"></div>
        </>
    )
}

export default Hero