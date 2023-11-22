import "./team.css"
import { team } from './../../dummydata';

const TeamCard = () => {
    return (
        <>
            {team.map((item) => (
                <div key={item.id} className="items shadow">
                    <div className="img">
                        <img src={item.cover} alt="persons" />
                        <div className="overlay">
                            <i className="fab fa-whatsapp icon"></i>
                            <i className="fab fa-instagram icon"></i>
                            <i className="fab fa-linkedin icon"></i>
                            <i className="fab fa-github icon"></i>
                        </div>
                    </div>
                    <div className='details'>
                        <h2>{item.name}</h2>
                        <p>{item.work}</p>                        
                    </div>
                </div>
            ))}
        </>
    )
}

export default TeamCard