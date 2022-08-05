import css from "./ReviewsList.module.css";
import PropTypes from "prop-types";

export const ReviewsList = ({ reviews }) => {
    return (
        <ul className={css.reviewsList}>
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

ReviewsList.propTypes = {
    reviews: PropTypes.arrayOf(PropTypes.object),
}