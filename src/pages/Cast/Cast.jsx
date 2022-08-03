import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCredits } from "../../api";


export const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => { getCredits(movieId).then(setCast) }, [movieId]);

    console.log(cast)

    return (
        <ul>
            {cast.map(actor => (
                <li key={actor.id}>
                    <img src={"https://image.tmdb.org/t/p/original"+actor.profile_path} alt={actor.name} />
                    <h3>{actor.name}</h3>
                    <p>Caracter: {actor.character}</p>
            </li>
            ))}
        </ul>
    )
}