import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCredits } from "../../api";
import {ActorsList} from "components/ActorsList/ActorsList";


const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => { getCredits(movieId).then(setCast) }, [movieId]);

    return (
        <ActorsList actors={cast} />
    )
}

export default Cast;