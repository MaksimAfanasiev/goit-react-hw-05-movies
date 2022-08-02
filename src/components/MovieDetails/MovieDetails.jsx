import { useParams } from "react-router-dom"

export const MovieDetails = () => {
    const {movieId} = useParams();

    return (
        <>
            <h1>Title</h1>
            <img src="Poster" alt="Poster"></img>
        </>
    )
}