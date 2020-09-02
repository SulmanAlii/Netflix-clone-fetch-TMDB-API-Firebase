import React from 'react';
import '../css/EachMovie.css';

const EachMovie = (props) => {

    function StringLenght(str,n){
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

        
    return [        
        <div className="Movies" key={props.key}>
            <a href={`/movie/${props.movieid}`}>
                  <img
                    onClick={props.onClick}
                   className={props.className}
                    src={props.src}
                    alt={props.alt}   
                />
            
     
            </a>,                
                <h3 className="MovieNames"> {props.name}</h3>,
                <h3 className="OriginalNames"> {StringLenght(props.originalTitle, 20)}</h3>

        </div>
    
    ]
}

export default EachMovie;