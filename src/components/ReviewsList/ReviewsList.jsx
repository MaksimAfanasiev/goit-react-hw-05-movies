export const ReviewsList = ({reviews}) => {
    return (
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