import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useSearchParams, Outlet, useParams } from "react-router-dom";
import { getMovies } from "api";

export const Movies = () => {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const { movieId } = useParams();

    useEffect(() => {
        if (query === "") {
            setMovies([]);
            return;
        }
        getMovies(query).then(setMovies)
    }, [query])

    function onFormSubmit(e) {
        e.preventDefault();
        setQuery(e.target.query.value);
        setSearchParams({query: e.target.query.value})
        e.target.query.value = "";
    }

    return (
        
        movieId  ?
            
            <Outlet/>
        :
        <>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="query" />
                <button type="submit">Search</button>
            </form>
    
            <ul>
                {
                    movies.length > 0 && movies.map(({ id, title }) => (
                        <li key={id}>
                            <Link to={`${id}`}>
                                {title}
                            </Link>
                        </li>
                        )
                    )
                }
            </ul>
        </>
    )
}
