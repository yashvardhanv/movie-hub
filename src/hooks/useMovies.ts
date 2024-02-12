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

const useMovies = (selectedGenre: Genre | null, selectedFilter: Item | null, page:number) =>{
    const [movies, setMovies] =useState<Movies[]>([]);
    const [error, setError] = useState('');
    const [isLoading , setloading] = useState(false);
 
 
 useEffect(()=>{
    const controller = new AbortController();
    const vc = 300

    setloading(true)
    apiClient.get<MovieArray>('/discover/movie',{signal: controller.signal, params:{with_genres:selectedGenre?.id, sort_by: selectedFilter?.value, "vote_count.gte":vc, "page":page}})
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
 },[selectedGenre?.id, selectedFilter?.value,page])
 return {movies, error, isLoading}
}
export default useMovies