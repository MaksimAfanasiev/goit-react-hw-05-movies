import {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import { getTrendMovies } from "../../api"
import css from "./Home.module.css"

const Home = () => {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        getTrendMovies().then(setFilms)
    }, [])

    return (
        <ul className={css.trendFilmsList}>
            {
                films.map(({ id, title }) => (
                    <li key={id} className={css.trendFilmsList_item}>
                        <Link to={`movies/${id}`}>
                            {title}
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
};

export default Home;