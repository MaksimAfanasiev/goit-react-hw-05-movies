import { useState, useEffect, Suspense } from "react";
import { useParams, Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import { getMovieDetails } from "../../api";

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState({});
    const navigate = useNavigate();
    const location = useLocation();

    const backLink = location.state?.from ?? "/movies";

    useEffect(() => { getMovieDetails(movieId).then(setMovie) }, [movieId]);

    const { title, vote_average, overview, genres, poster_path, release_date } = movie;
    const releaseYear = new Date(release_date).getFullYear();
    const posterLink = poster_path ? "https://image.tmdb.org/t/p/w500" + poster_path : "";
    
    return (
        title &&
        <>
            <button type="button" onClick={() => navigate(backLink)}>Go back</button>
            <h1>{title} ({releaseYear})</h1>
            <p>User score: {Math.round(vote_average * 10)}%</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h2>Genres</h2>
            <p>{genres.join(", ")}</p>
            <img src={posterLink} alt="Poster"></img>

            <h3>Additional information</h3>
            <ul>
                <li><Link to={"cast"}>Cast</Link></li>
                <li><Link to={"reviews"}>Reviews</Link></li>
            </ul>
            <Suspense>
                <Outlet />
            </Suspense>
        </>
    )
};

export default MovieDetails;
