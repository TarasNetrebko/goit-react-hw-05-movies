import { getTrending } from 'helpers/fetchHandler';
import {useState, useEffect} from "react" 

export const Home = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        getTrending().then(setMovies);
    }, [])
    return (
        <div>
            <ul>
                {movies && movies.map(({ id, poster_path, title }) => {
                    return (
                    <li key={id}>
                            <p>{title}</p>  
                            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="title" width="300" />
                    </li>
                )})}
            </ul>
        </div>
    )
}