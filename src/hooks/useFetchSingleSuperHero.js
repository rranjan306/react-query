import axios from "axios";
import { useQuery } from "react-query";

const fetchSingleHerofn = ({queryKey}) => {
  const id = queryKey[1];
  
  return axios.get(`http://localhost:4000/superheros/${id}`)
}

const useFetchSingleSuperHero = (id) => {
  return useQuery(['super-hero', id], fetchSingleHerofn);
}

export default useFetchSingleSuperHero;
