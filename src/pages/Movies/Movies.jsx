import { useState, useEffect, Suspense } from "react"
import { useSearchParams, Outlet, useParams} from "react-router-dom";
import { getMovies } from "api";
import { Searchbox } from "components/Searchbox/Searchbox";
import { MoviesList } from "../../components/MoviesList/MoviesList";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const { movieId } = useParams();
    const query = searchParams.get('query');

    useEffect(() => {
        if (!query) {
            setMovies([]);
            return;
        }

        getMovies(query).then(setMovies);

    }, [query])

    function onSubmit(e) {
        e.preventDefault();
        setSearchParams({ query: e.target.query.value })
        e.target.query.value = "";
    }

    return (
        
        movieId
            ?
        <Suspense>
            <Outlet />
        </Suspense>
            :
        <>
            <Searchbox onFormSubmit={onSubmit} />
        
            <MoviesList movies={movies}/>

        </>
    )
};

export default Movies;
