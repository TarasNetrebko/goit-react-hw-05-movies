import { searchMoviesByWord } from "helpers/fetchHandler"
import { useState, useEffect } from "react"
import { List, ListItem } from "../Home/Home.styled"
import {Link} from "react-router-dom"
export const Movies = () => {
    const [keyword, setKeyword] = useState("");
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        if (page > 1) {
            searchMoviesByWord(keyword.toLowerCase(), page).then(res => {
            setMovies([...movies, ...res]);
            });
        }
        // eslint-disable-next-line
    }, [page])
    const keywordChanger = (e) => {
        setKeyword(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        searchMoviesByWord(keyword.toLowerCase(), page).then(res => {
            setMovies(res);
        });
    }
    const pageChanger = () => {
        setPage(prevPage => {
            setPage(prevPage + 1);
        })
    }
    return (
        <>
        <form action="" onSubmit={submitHandler}>
            <input type="text" onChange={keywordChanger} />
            <button type="submit">Find Movie</button>
        </form>
        <List>
                {movies && movies.map(({ id, poster_path, title }) => (
                    <Link to={`/movies/${id}`}>
                    <ListItem key={id}> 
                            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="title" width="300" height="450" />
                            <p>{title}</p> 
                        </ListItem>
                        </Link>
                ))}
        </List>
        {movies.length > 0 && <button type="button" onClick={pageChanger}>Load More</button>}    
        </>
    )
}