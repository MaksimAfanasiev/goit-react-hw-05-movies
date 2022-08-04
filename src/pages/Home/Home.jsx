import {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import { getTrendMovies } from "../../api"

const Home = () => {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        getTrendMovies().then(setFilms)
    }, [])

    return (
        <ul>
            {
                films.map(({ id, title }) => (
                    <li key={id}>
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