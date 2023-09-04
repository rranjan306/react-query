import { useParams } from "react-router-dom";
import useFetchSingleSuperHero from "../hooks/useFetchSingleSuperHero";

const SuperHeroDetails = () => {
  const { id } = useParams()
  const {isLoading, isError, error, data} = useFetchSingleSuperHero(id);

  if(isLoading) {
    return <h3>Waiting......</h3>
  }

  if(isError) {
    return <h3>{error.message}</h3>
  }

  return (
    <div>
      {
        <h1>Welcome {data?.data?.name}</h1>
      }
    </div>
  )
}

export default SuperHeroDetails