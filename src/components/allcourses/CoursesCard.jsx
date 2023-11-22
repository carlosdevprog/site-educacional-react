import { coursesCard } from "../../dummydata"
import "./course.css"

const CoursesCard = () => {
    return (
        <>
            <section className="coursesCard">
                <div className="container grid2">
                    {coursesCard.map((item) => {
                        return (
                            <div key={item.id} className="items">
                                <div className="content flex">
                                    <div className="left">
                                        <div className="img">
                                            <img src={item.cover} alt="icons" />
                                        </div>
                                    </div>
                                    <div className="text">
                                        <h1>{item.coursesName}</h1>
                                        <div className="rate">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <label htmlFor="">(5.0)</label>
                                        </div>
                                        <div className="details">
                                            {item.courTeacher.map((details) => (
                                                <>
                                                    <div key={details.id} className="box">
                                                        <div className="dimg">
                                                            <img src={details.dcover} alt="image" /> 
                                                        </div>
                                                        <div className="para">
                                                            <h4>{details.name}</h4>
                                                        </div>
                                                    </div>
                                                    <span>{details.totalTime}</span>
                                                </>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="price">
                                    <h3>{item.priceAll} / {item.pricePer}</h3>
                                </div>
                                <button className="outline-btn">inscreva-se agora!</button>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default CoursesCard