import React from 'react'
import { useParams } from "react-router-dom";
import '../style/SingleProduct.css';

export default function SingleProduct({data}) {
    let {id} = useParams();
    id = parseInt(id);
    const shows = data;
    console.log(id,typeof(id));
    console.log(shows);
    const temp = shows.filter((show) => show.show.id === id);
    console.log("temp",temp)
    return (
        <div>
            {temp.map((show) => {
        return (
          <div className="show-center" key={show.show.id}>
            <img className="show-photo" src={show.show.image.medium} alt={show.show.name} style={{height:"65vh",width:"65%",marginLeft:"3.7rem",marginRight:"2rem"}} />
            <section className="content-prod">
              <h2>{show.show.name}</h2>
              <br/>
              <h5>Rating: {show.show.rating.average}</h5> 
              <br />
               <p className="description"><b> {show.show.summary}</b></p> 
               <p>
               <h6>More Details : </h6> 
               <button className="link-detail">
               <a href={show.show.url}>Here</a>
               </button>
               </p>
            </section>
          </div>
        );
      })}
        </div>
    )
}
