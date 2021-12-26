import './style.css'

const MovieRow = ({ topic: { slug, title, items } }) => {
    return (
        <div>
            <h2>{title}</h2>
            <div className='listArea' >
                <div className='list' >
                    {items.results.length > 0 && items.results.map((movie, key) => (
                        <div className='item' key={key}>

                            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.original_name} />
                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
}

export default MovieRow