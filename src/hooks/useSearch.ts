import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { Genre } from "./useGenres";
import { Item } from "../componants/PlateformSelector";

export interface Movies{
  id: number,
  title: string,
  poster_path: string,
  vote_average : number,
  overview : string,
  release_date : string
}
interface MovieArray{
    page: number,
    results: Movies[]

}

const useSearch = (searchQuery:string) =>{
    const [movies, setMovies] =useState<Movies[]>([]);
    const [error, setError] = useState('');
    const [isLoading , setloading] = useState(false);
 
 
 useEffect(()=>{
    const controller = new AbortController();
    

    setloading(true)
    apiClient.get<MovieArray>('/search/movie',{signal: controller.signal,params:{'query':searchQuery}})
      .then(res => {
        setMovies(res.data.results)
        window.scrollTo(0, 0)
        setloading(false)
    })
      .catch(err => {
        if (err instanceof CanceledError) return;
         setError(err.message)
         setloading(false)
        })

      return () => controller.abort()
 },[searchQuery])
 return {movies, error, isLoading}
}
export default useSearch