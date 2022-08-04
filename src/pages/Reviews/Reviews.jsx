import { getReviews } from "../../api";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ReviewsList } from "../../components/ReviewsList/ReviewsList";
import { Notice } from "components/Notice/Notice";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        getReviews(movieId).then(setReviews)
    }, [movieId]);

    return (
        reviews.length > 0
            ?
            <ReviewsList reviews={reviews} />
            :
            <Notice text={"We don`t have any reviews for this movie!"} />
    )
};

export default Reviews;