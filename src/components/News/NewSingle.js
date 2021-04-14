import React from 'react'

const NewSingle = ({item}) => {
    
       return (
       <div className="col s12 m4 l4">
               <div className="card medium">
                       <div className="card-image">
                              <h5>{item.title}</h5>
                              <img src={item.urlToImage} alt={item.title}/>
                              <span className="card-title">{item.source.name}</span> 
                       </div>
                       <div className="card-content">
                               <p>{item.title}</p>
                       </div>
                       <div className="card-action">
                               <a href={item.url} rel="noreferrer" target="_blank">Full Article</a>
                       </div>
               </div>
       </div>
       
       
       )
    
}

export default NewSingle
