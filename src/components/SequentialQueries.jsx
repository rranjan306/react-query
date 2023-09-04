import axios from "axios";
import { useQuery } from "react-query";

const fetchUsersFn = () => axios.get(`http://localhost:4000/users`);
const fetchCoursesFn = (id) => axios.get(`http://localhost:4000/courses/${id}`);

const SequentialQueries = ({email}) => {
  const {data: users} = useQuery('users', fetchUsersFn)

  const found = users?.data.find((user) => user.email === email);
  const {isLoading, data: courses} = useQuery(['courses', found?.email], () => fetchCoursesFn(found?.email), {
    enabled: !!found?.email
  });

  if(isLoading) {
    return <h4>Loading......</h4>
  }

  return (
    <div>
      {
        <ul>
          {
            courses?.data.books.map((book, index) => {
              return <li key={index}>{book}</li>
            })
          }
        </ul>
      }
    </div>
  )
}

export default SequentialQueries