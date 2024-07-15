import styles from '../styles/Home.module.css'; 
import { useEffect, useState } from 'react'; 
import { getPokemons } from '../../lib/getPokemons'; 

export default function Home() { 
  const [pokemons, setPokemons] = useState<Array<any>>([]); 

  useEffect(() => { 
    const fetchPokemons = async () => { 
      console.log('Fetching pokemons...'); 
      const pokemonData = await getPokemons(); 
      console.log('Fetched pokemons:', pokemonData); 
      setPokemons(pokemonData); 
    };

    fetchPokemons(); 
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Pokemons</h1>
        <div className={styles.grid}>
          {pokemons.map(pokemon => ( 
            <div key={pokemon.id} className={styles.card}>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              <h3>{pokemon.name}</h3>
            </div> 
          ))}
        </div>
      </main>
    </div>
  );
}