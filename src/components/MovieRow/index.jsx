import { MovieRowDiv } from "./style"

const MovieRow = ({ topic: { slug, title, items } }) => {
    return (
        <MovieRowDiv>
            <h2>{title}</h2>
            <div className='movieRow__listArea' >
                <div className='movieRow__list' >
                    {items.results.length > 0 && items.results.map((movie, key) => (
                        <div className='movieRow__item' key={key}>

                            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.original_name} />
                        </div>

                    ))}
                </div>
            </div>
        </MovieRowDiv>
    )
}

export default MovieRow