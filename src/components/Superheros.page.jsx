import axios from "axios";
import { useEffect, useState } from "react"

const SuperherosPage = () => {
  const [loading, setLoading] = useState(false);
  const [superheros, setSuperheros] = useState([]);
  const [errors, setErros] = useState('');
  
  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:4000/superheros')
    .then((resp) => {
      setLoading(false);
      setSuperheros(resp.data)
    })
    .catch(error => {
      setLoading(false);
      setErros(error.message);
    })
  }, []);

  return (
    <div>
      <h1>SuperherosPage</h1>
      {
        loading ? 'Loading....' : superheros.map((hero) => <div key={hero.id}>{hero.name}</div>)
      }
      {
        errors ? <h3>{errors}</h3> : null
      }
    </div>
  )
}

export default SuperherosPage