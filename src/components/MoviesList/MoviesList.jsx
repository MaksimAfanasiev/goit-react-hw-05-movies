import { useLocation, Link } from "react-router-dom"
import css from "./MoviesList.module.css"
import PropTypes from "prop-types"

export const MoviesList = ({ movies }) => {
    const location = useLocation();

    return (
        <ul className={css.moviesList}>
            {
                movies.length > 0 && movies.map(({ id, title }) => (
                    <li key={id} className={css.moviesList_item}>
                        <Link to={`${id}`} state={{from: location}}>
                            {title}
                        </Link>
                    </li>
                    )
                )
            }
        </ul>
    )
}

MoviesList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object),
}