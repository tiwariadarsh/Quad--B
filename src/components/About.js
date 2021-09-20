import React from 'react'
import '../style/SingleProduct.css';

export default function About() {
    return (
        <div className="show-center">
            <img className="show-photo" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mv5bmge0ytixnmqtytmyms00zdjjltkwndctzjnhmte4yzjimjk4xkeyxkfqcgdeqxvymjgyoti4mgatat-v1-1589918053.jpg?crop=0.75xw:1xh;center,top&resize=480:*" alt="Adarsh" style={{height:"65vh",width:"65%",marginLeft:"3.7rem",marginRight:"2rem"}}  />
            <section className="content-prod">
              <h2>Adarsh Tiwari</h2>
              <br/>
              <p>
             <b>adarshtiwari532000@gmail.com</b></p>
              <br />
               <p className="description"><b>Expert in implementation of each step of the project. Eager to learn new technologies and methodologies.</b></p> 
               <p>
               <h6>More Details : </h6> 
               <button className="link-detail">
               <a href="https://www.linkedin.com/in/adarsh-tiwari-333487189/">Here</a>
               </button>
               </p>
            </section>
          </div>
    )
}
