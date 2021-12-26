import { useEffect, useState } from 'react';
import './App.css';
import { Api } from './services/api';

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
    <div className="App">
      Olá mundo
    </div>
  );
}

export default App;
