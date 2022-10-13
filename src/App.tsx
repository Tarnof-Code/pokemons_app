import React, {FunctionComponent, useState,useEffect} from 'react';
import Pokemon from './models/pokemon';
import POKEMONS from './models/mock-pokemons';

  
const App: FunctionComponent = () => {
 const[pokemons, setPokemons] = useState<Pokemon[]>([]);

 useEffect(()=>{
    setPokemons(POKEMONS)
 },[])
 
    
 return (
    <div>
        <h1 className="center">Pokédex</h1>
        <p className="center">Il y a {pokemons.length} pokemons dans le Pokédex.</p>
        <div className="container">
            <div className="row">
            {pokemons.map(({name, id , picture, created}) => (
               <div className="col s6 m4" key={id}>
               <div className="card horizontal">
                  <div className="card-image">
                  <img src={picture} alt="name"/>
                  </div>
                  <div className="card-stacked">
                  <div className="card-content">
                     <p>{name}</p>
                     <p><small>{created.toString()}</small></p>
                  </div>
                  </div>
               </div>
               </div>                       
        ))}
            </div>
        </div>    
  </div>
 )
}
  
export default App;