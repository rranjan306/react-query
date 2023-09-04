import { useMutation, useQuery, useQueryClient } from "react-query";
import { request } from "../utils/axios";
// import axios from "axios";

{/* useQuery Option Parameter
    cacheTime: 5 mins,
    staleTime: 0 min,
    refreshOnMount: true,
    refreshOnWindowsFocus: true // refreshOnMount and refreshOnWindowsFocus needs human interaction for fetching the data
    refetchInterval: time // Also known as Polling. Will fetch data on reqular time interval but if loss the window focus then it will stop.
    refetchIntervalInBackground: true // Will fetch data at regular interval even if you go to other page.
    enabled: false // Will tell useQuery to do not fire data fetching logic automatically. Will fetch on button click or some on other events or on boolean value
    onSuccess: callback fn // Will call on successfull call
    onError: callback fn // Will call on error call
    select: callback fn // will transform data before presenting to UI,
    useMutation: callback fn // POST Request
  */}

const fetchSuperHerosFn = () => {
  // return axios.get('http://localhost:4000/superheros')
  return request({url: '/superheros'});
}

const addSuperHerosFn = (hero) => {
  // return axios.post('http://localhost:4000/superheros', hero)
  return request({url: '/superheros', method: 'post', data: hero});
}

export const useSuperHerosData = (onSuccessFn, onErrorFn) => {
  return useQuery('super-heros', fetchSuperHerosFn, {
    onSuccess: onSuccessFn,
    onError: onErrorFn,
    select: (data) => {
      return data.data;
    }
  });
}

export const useSuperHeroMutation = () => {
  const client = useQueryClient();
  //sucess callback fn will fetch inserted data
  return useMutation(addSuperHerosFn, {
    onSuccess: () => {
      client.invalidateQueries('super-heros')
    }
  });
}

