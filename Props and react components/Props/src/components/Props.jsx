import React from 'react'
import "../components/Props.css"


function Props({name,image,types}) {    
    return (
        <div className="pokemon-card">
          <img src={image} alt={name} className="pokemon-image" />
          <h2 className="pokemon-name">{name}</h2>
          <div className="pokemon-types">
            {types.map((type, index) => (
              <span key={index} className="pokemon-type">
                {type}
              </span>
            ))}
          </div>
        </div>
      );
    }
export default Props
