import { getReviews } from "../../api";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        getReviews(movieId).then(setReviews)
    }, [movieId]);

    return (
        reviews.length > 0 &&
        <ul>
                {reviews.map(review => {
                    const { author, content, id } = review;
                    return(
                    <li key={id}>
                        <h3>{author}</h3>
                        <p>{content}</p>
                        </li>
                    )
            })
            }
        </ul>
    )
}