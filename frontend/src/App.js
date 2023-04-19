import './App.css';
import React from 'react';
import Home from './components/views/Home';
import Navigation from './components/UI/Navigation';
import { Routes , Route } from 'react-router-dom';
import AddArticle from './components/views/AddArticle';
import ArticleDetail from './components/views/ArticleDetail';

function App() {
  return (
   <>
    <Navigation/>
    


    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path='/add-article' element={<AddArticle />}/>
      <Route path='/article-detail/:articleId' element={<ArticleDetail />} />
    </Routes>

   </>
  );
}

export default App;
