import PropTypes from 'prop-types';
import "./title.css"

const Title = ({title, subtitle}) => {
    return (
        <>
            <div id="heading">
                <h3>{subtitle}</h3>
                <h1>{title}</h1>                
            </div>
        </>
    )
}

Title.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
};

export default Title