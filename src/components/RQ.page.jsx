import { useState } from "react"
import { useSuperHeroMutation, useSuperHerosData } from "../hooks/useSuperHerosData"
import { NavLink } from "react-router-dom";


const RQPage = () => {
  const [name, setName] = useState('');
  const [alterEgo, setAlterEgo] = useState('');
  const {mutate} = useSuperHeroMutation();
  
  const onSuccess = (data) => {
    // console.log(data);
  }

  const onError = (error) => {
    console.log(error)
  }

  const handleSuperHero = (e) => {
    e.preventDefault();
    const hero = {name, alterEgo};
    mutate(hero) //POST request
    
  }

  const {isLoading, isFetching, data, isError, error, refetch } = useSuperHerosData(onSuccess, onError);

  if(isLoading || isFetching) {
    return <h2>Loading......</h2>
  }

  if(isError) {
    return <h2>{error.message}</h2>
  }

  return (
    <div>
      <h1>React Query Superheros</h1>
      {/* <button onClick={refetch}>Get SuperHeros</button> */}
      {/* {
        data?.data.map((hero) => <div key={hero.id}>{hero.name}</div>)
      } */}
      <div>
        <input type="text" name="" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" name="" placeholder="Enter alterEgo" value={alterEgo} onChange={(e) => setAlterEgo(e.target.value)} />
        <button onClick={handleSuperHero}>Add SuperHero</button>
      </div>
      {data.map((superheros) => {
        return <div key={superheros.id}><NavLink to={`/rq-superheros/${superheros.id}`}>{superheros.name}</NavLink></div>
      })}
    </div>
  )
}

export default RQPage