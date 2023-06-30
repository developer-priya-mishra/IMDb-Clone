import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import Home from './pages/home/home';
import Movie_List from '../src/components/movie_list/movie_list'
import Movie from './pages/movie_detail/movie_detail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />} exact />
          <Route path='movie/:id' element={<Movie />} />
          <Route path='movies/:type' element={<Movie_List />} />
          <Route path='/*' element={<h1>Error Page</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
