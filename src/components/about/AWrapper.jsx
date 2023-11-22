import { awrapper } from "../../dummydata"

const AWrapper = () => {
    return (
        <>
            <section className="awrapper">
                <div className="container grid">
                    {awrapper.map((item) => (
                        <div key={item.id} className="box flex">
                            <div className="img">
                                <img src={item.cover} alt="imagem" />
                            </div>
                            <div className="text">
                                <h1>{item.data}</h1>
                                <h3>{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default AWrapper