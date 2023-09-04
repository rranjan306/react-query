import axios from "axios";
import { useQueries } from "react-query"

const fetchHeroFn = (id) => axios.get(`http://localhost:4000/friends/${id}`);


const DynamicParallelQuries = ({herosId}) => {
  const queryResult = useQueries(herosId.map((id) => {
    return {
      queryKey: ['friends', id],
      queryFn: () => fetchHeroFn(id)
    }
  }))
  //console.log(queryResult);
  return (
    <div>DynamicParallelQuries</div>
  )
}

export default DynamicParallelQuries