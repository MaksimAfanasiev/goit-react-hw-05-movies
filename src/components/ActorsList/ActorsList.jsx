import css from "./ActorsList.module.css"
import PropTypes from "prop-types"

export const ActorsList = ({ actors }) => {
    return (
        <ul>
            {actors.map(actor => {
                const { id, profile_path, name, character } = actor;
                const photoLink = profile_path ? "https://image.tmdb.org/t/p/w200" + profile_path : "https://cdn3.iconfinder.com/data/icons/feather-5/24/image-512.png";
                return (
            <li key={id} className={css.actorsList_item}>
                        <img src={photoLink} alt={name} className={css.actorsList_item__photo} />
                    <h3 className={css.actorName}>{name}</h3>
                    <p className={css.actorRole}>Caracter: {character}</p>
            </li>
            )})}
        </ul>
    )
}

ActorsList.propTypes = {
    actors: PropTypes.arrayOf(PropTypes.object).isRequired,
}