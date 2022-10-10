import React, {FunctionComponent, useState} from 'react';
import Pokemon from './models/pokemon';
import POKEMONS from './models/mock-pokemons';

  
const App: FunctionComponent = () => {
 const[pokemons] = useState<Pokemon[]>(POKEMONS);
    
 return (
    <div>
        <h1>Pokédex</h1>
        <p>Il y a {pokemons.length} pokemons dans votre application.</p>
  </div>
 )
}
  
export default App;