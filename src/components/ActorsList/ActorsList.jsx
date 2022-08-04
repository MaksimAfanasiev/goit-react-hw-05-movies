export const ActorsList = ({ actors }) => {
    return (
        <ul>
            {actors.map(actor => {
                const { id, profile_path, name, character } = actor;
                const photoLink = profile_path ? "https://image.tmdb.org/t/p/w200" + profile_path : "";
                return (
            <li key={id}>
                    <img src={photoLink} alt={name} />
                    <h3>{name}</h3>
                    <p>Caracter: {character}</p>
            </li>
            )})}
        </ul>
    )
}