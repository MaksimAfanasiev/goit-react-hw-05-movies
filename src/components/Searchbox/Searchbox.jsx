import css from "./Searchbox.module.css"
import PropTypes from "prop-types"

export const Searchbox = ({ onFormSubmit }) => {
    return (
        <form className={css.form} onSubmit={onFormSubmit}>
            <input type="text" name="query" className={css.form_input} />
            <button type="submit" className={css.form_button}>Search</button>
        </form>
    )
}

Searchbox.propTypes = {
    onFormSubmit: PropTypes.func.isRequired,
}