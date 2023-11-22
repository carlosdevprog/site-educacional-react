import PropTypes from 'prop-types';
import "./back.css"

const Back = ({title}) => {
    return (
        <>
            <section className="back">                
                <h1>{title}</h1>
            </section>
            <div className="margin"></div>
        </>
    )
}

Back.propTypes = {
    title: PropTypes.string.isRequired    
};

export default Back