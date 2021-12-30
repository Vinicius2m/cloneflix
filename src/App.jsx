import { useEffect, useState } from 'react';
import { Api } from './services/api';
import MovieRow from './components/MovieRow'
import GlobalStyle from './styles/GlobalStyle';
import FeaturedMovie from './components/FeaturedMovie';
import { AppStyle } from './AppStyle';
import Header from './components/Header';

const App = () => {

  const [movieList, setMovieList] = useState([])
  const [featureData, setFeatureData] = useState(null)
  const [blackHeader, setBlackHeader] = useState(false)

  useEffect(() => {
    const loadAll = async () => {
      let list = await Api.getHomeList()
      setMovieList(list)

      let originals = list.filter(item => item.slug === "originals")
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      let chosen = originals[0].items.results[randomChosen]
      let chosenInfo = await Api.getMovieInfo(chosen.id, 'tv')
      setFeatureData(chosenInfo)
    }

    loadAll()
  }, [])

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }
    }


    window.addEventListener("scroll", scrollListener)

    return () => {
      window.removeEventListener("scroll", scrollListener)
    }
  }, [])

  return (
    <>
      <GlobalStyle />
      <AppStyle>
        <Header black={blackHeader} />

        {featureData && <FeaturedMovie item={featureData} />}

        <section className='lists' >
          {movieList.map((item, key) => (
            <MovieRow topic={item} key={key} />
          ))}
        </section>
      </AppStyle>
    </>
  );
}

export default App;
