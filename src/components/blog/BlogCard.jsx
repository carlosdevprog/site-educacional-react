import { blog } from "../../dummydata"
import "./blog.css"

const BlogCard = () => {
    return (
        <>
            {blog.map((item) => {
                return (
                    <div key={item.id} className="items shadow">
                        <div className="img">
                            <img src={item.cover} alt="persons" />
                        </div>
                        <div className="text">
                            <div className="admin flexSB">
                                <span>
                                    <i className="fa fa-user"></i>
                                    <label htmlFor="">{item.type}</label>
                                </span>
                                <span>
                                    <i className="fa fa-calendar-alt"></i>
                                    <label htmlFor="">{item.date}</label>
                                </span>
                                <span>
                                    <i className="fa fa-comments"></i>
                                    <label htmlFor="">{item.com}</label>
                                </span>
                            </div>
                            <h1>{item.title}</h1>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default BlogCard