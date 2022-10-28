import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './NavBar'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ArticlesListPage from './pages/ArticlesListPage'
import ArticlePage from './pages/ArticlePage'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <div id='page-body'>
        <NavBar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/articles' element={<ArticlesListPage />} />

            {/* Showing each article by adding URL parameter under articles directory */}
            <Route path='/articles/:articleId' element={<ArticlePage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
