import { useEffect, useState } from 'react';
import { Api } from './services/api';
import MovieRow from './components/MovieRow'
import GlobalStyle from './styles/GlobalStyle';
import FeaturedMovie from './components/FeaturedMovie';
import { AppStyle } from './AppStyle';
import Header from './components/Header';
import { FaGithubSquare } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

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

        <footer>
          Feito com base na aula a seguir:&nbsp;
          <a href='https://www.youtube.com/watch?v=tBweoUiMsDg'>
            YouTube
          </a><br />
          Dados pegues do site <a href='https://Themoviedb.org'>Themoviedb.org</a><br />
          Direitos de imagem para Netflix<br />
          <div style={{ margin: "10px 0 10px 0" }}></div>
          Vinícius de Freitas
          <div style={{ margin: "10px 0 10px 0" }}></div>
          <span className='footer__social' >
            <a href='https://www.linkedin.com/in/vinicius-de-freitas/' ><FaGithubSquare /></a>
            <a href='https://github.com/Vinicius2m' ><FaLinkedin /></a>
          </span>
        </footer>
      </AppStyle>
    </>
  );
}

export default App;
