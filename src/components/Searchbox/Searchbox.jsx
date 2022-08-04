export const Searchbox = ({onFormSubmit}) => {
    return (
        <form onSubmit={onFormSubmit}>
            <input type="text" name="query" />
            <button type="submit">Search</button>
        </form>
    )
}