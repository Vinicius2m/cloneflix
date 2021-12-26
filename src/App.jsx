import { useEffect, useState } from 'react';
import './App.css';
import { Api } from './services/api';
import MovieRow from './components/MovieRow'
import GlobalStyle from './styles/GlobalStyle';

const App = () => {

  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    const loadAll = async () => {
      let list = await Api.getHomeList()
      setMovieList(list)
    }

    loadAll()
  }, [])


  return (
    <>
      <GlobalStyle />
      <div className="App">
        <main>
          <section>
            {movieList.map((item, key) => (
              <MovieRow topic={item} key={key} />
            ))}
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
