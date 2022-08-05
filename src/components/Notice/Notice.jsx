import PropTypes from "prop-types"

export const Notice = ({ text }) => {
    return (
        <p>{text}</p>
    )
}

Notice.propTypes = {
    text: PropTypes.string.isRequired,
}