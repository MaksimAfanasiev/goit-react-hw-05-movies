import { useState, useEffect } from "react";
import { useParams, Link, Outlet, useNavigate } from "react-router-dom";
import { getMovieDetails } from "../../api";

export const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState({});
    const navigate = useNavigate();

    useEffect(() => { getMovieDetails(movieId).then(setMovie) }, [movieId]);
    
    return (
            movie.title &&
        <>
            <button type="button" onClick={() => navigate("/")}>Go back</button>
            <h1>{movie.title}</h1>
            <p>User score: {Math.round(movie.vote_average * 10)}%</p>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <h2>Genres</h2>
            <p>{movie.genres.join(", ")}</p>
            <img src={"https://image.tmdb.org/t/p/original"+movie.poster_path} alt="Poster"></img>

            <h3>Additional information</h3>
            <ul>
                <li><Link to={"cast"}>Cast</Link></li>
                <li><Link to={"reviews"}>Reviews</Link></li>
            </ul>
            <Outlet/>
        </>
    
    )
}