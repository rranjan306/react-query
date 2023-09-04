import axios from "axios";
import { useQuery } from "react-query"

const fetchSuperHeroFn = () => axios.get('http://localhost:4000/superheros');
const fetchHeroFn = () => axios.get('http://localhost:4000/friends');


const ParallelQueries = () => {
  const { isLoading: isSuperHeroLoading, data: superHeros } = useQuery('super-hero', fetchSuperHeroFn);
  const { isLoading: isFriendLoading, data: friends } = useQuery('friends', fetchHeroFn);

  if(isSuperHeroLoading || isFriendLoading) {
    return <p>Loading .....</p>
  }

  return (
    <div>
      <h3>SuperHeros</h3>
      {
        superHeros.data.map((hero) => {
          return <p key={hero.id}>{hero.name}</p>
        })
      }

      <h3>Friends</h3>

      {
        friends.data.map((friend) => {
          return <p key={friend.id}>{friend.name}</p>
        })
      }
    </div>
  )
}

export default ParallelQueries