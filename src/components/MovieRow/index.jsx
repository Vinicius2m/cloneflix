import { MovieRowDiv } from "./style"
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from 'react-icons/md'
import { useState } from "react"

const MovieRow = ({ topic: { slug, title, items } }) => {

    const [scrollX, setScrollX] = useState(0)

    const handleLeft = () => {
        let x = scrollX + Math.round(window.innerWidth / 2)
        if (x > 0) {
            x = 0
        }
        setScrollX(x)
    }

    const handleRight = () => {
        let x = scrollX - Math.round(window.innerWidth / 2)
        let listW = items.results.length * 150
        if ((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 60
        }
        setScrollX(x)
    }

    return (
        <MovieRowDiv scrollX={scrollX} itemsLen={items.results.length} >
            <h2>{title}</h2>

            <div className="movieRow__left" onClick={handleLeft} >
                <MdOutlineNavigateBefore style={{ fontSize: 50 }} />
            </div>
            <div className="movieRow__right" onClick={handleRight} >
                <MdOutlineNavigateNext style={{ fontSize: 50 }} />
            </div>

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