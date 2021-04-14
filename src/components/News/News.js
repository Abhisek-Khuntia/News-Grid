import React,{useState,useEffect} from 'react'
import NewSingle from './NewSingle'

function News() {

  const[news,setNews] = useState([]) ;
  const[search,setSearch] = useState('');
  const[query,setQuery] = useState('America');

  const url= `https://newsapi.org/v2/top-headlines?q=${query}&from=2021-03-14&sortBy=publishedAt&apiKey=c1188de200b6458d9dc341caa4c38d3a`;

 

  useEffect(()=>{
      loadData();
  },[query])


   const loadData= async () =>{
    const response = await fetch(url);
    const resData = await response.json();
    setNews(resData.articles)  
  }

  function searchUpdate(e){
    const{value} = e.target;
    setSearch(value)
  }

  function getSearch(e){
    e.preventDefault();
    setQuery(search)
  }

  const recentNews = news.map(item=>(<NewSingle key={item.url} item={item}/>))
  console.log(news)
  
  return (
    <div className="App">
      
      <form onSubmit={getSearch} className="search-form">

      <input 
      name="search" 
      placeholder="Search Menu" 
      onChange={searchUpdate} 
      className="search-bar" 
      type="text"/>
     
  

      <button 
      className="search-button btn waves-effect waves-light" 
      type ="submit">Search</button>
      </form>
      
      <h1>{query} News</h1>
      <div className="row">{recentNews}</div>
    </div>
  );
}

export default News;
