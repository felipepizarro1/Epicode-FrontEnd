import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import ArticleList from './components/ArticleList';
import ArticleDetail from './components/ArticleDetail';


const App = () => {



  const [data, setData ] = useState();

  useEffect(()=>{
    fetch("https://api.spaceflightnewsapi.net/v4/articles/")
    .then((res)=>res.json())
    .then(data => {
      console.log(data.results)
      setData(data.results)})
    .catch(console.error);
  },[])



  return (
    <Router>
      <Routes>
        <Route path="/" element={<ArticleList articles={data} />} />
        <Route path="/articles/:articleId" element={<ArticleDetail />} />
      </Routes>
    </Router>
  );
};

export default App;