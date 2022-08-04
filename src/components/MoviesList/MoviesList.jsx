import { useLocation, Link } from "react-router-dom"

export const MoviesList = ({ movies }) => {
    const location = useLocation();

    return (
        <ul>
            {
                movies.length > 0 && movies.map(({ id, title }) => (
                    <li key={id}>
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