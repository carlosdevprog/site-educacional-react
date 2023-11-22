import { online } from '../../dummydata';
import Title from './../title/Title';

const OnlineCourses = () => {
    return (
        <>
            <section className="online">
                <div className="container">
                    <Title subtitle='CURSOS' title='Navegue por nossos cursos on-line' />

                    <div className="content grid3">
                        {online.map((item) => (
                            <div key={item.id} className="box">
                                <div className="img">
                                    <img src={item.cover} alt="icons" />
                                    <img src={item.hoverCover} className='show' alt="icons" />
                                </div>
                                <h1>{item.courseName}</h1>
                                <span>{item.course}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default OnlineCourses