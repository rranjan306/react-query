import axios from "axios";

const client = axios.create({baseURL: "http://localhost:4000"});

const token = 'ejjckddhkdjkdkmckndcjhudcuyuchjnjn';

export const request  = ({...options}) => {
  client.defaults.headers.common.Authorization = `Bearer ${token}`
  const onSuccess = (response) => {
    console.log('success interceptor', response);
    response.headers.my_custom = 'deepak';
    return response
  }

  const onError = (error) => {
    console.log('error interceptor', error);
    return error
  }

  return client(options).then(onSuccess).catch(onError);
}
