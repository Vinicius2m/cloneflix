import { Featured } from "./style"

const FeaturedMovie = ({ item }) => {

    const firstDate = new Date(item.first_air_date)

    const genres = item.genres.map(item => item.name)

    let description = item.overview ? item.overview : "empty description"
    if (description.length > 200) {
        description = description.substring(0, 201) + "..."
    }
    return (
        <Featured backgroundUrl={`https://image.tmdb.org/t/p/original${item.backdrop_path}`} >
            <div className="featured__transparencyY" >
                <div className="featured__transparencyX" >
                    <div className="featured__name" >{item.name}</div>
                    <div className="featured__info">
                        <div className="featured__info__points">{item.vote_average} pontos</div>
                        <div className="featured__info__year">{firstDate.getFullYear()}</div>
                        <div className="featured__info__seasons">{item.number_of_seasons} temporada{item.number_of_seasons > 1 ? "s" : ""}</div>
                    </div>

                    <div className="featured__description" >{description}</div>
                    <div className="featured__buttons" >
                        <button className="featured__buttons__watch" >► Assistir</button>
                        <button className="featured__buttons__mylist" >+ Minha Lista</button>
                    </div>
                    <div className="featured__genres"><strong>Gêneros: </strong>{genres.join(", ")}</div>
                </div>
            </div>
        </Featured>
    )
}

export default FeaturedMovie