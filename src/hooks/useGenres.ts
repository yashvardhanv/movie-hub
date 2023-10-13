import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

export interface Genre{
    id: number,
    name: string
}

interface GenreList{
    genres: Genre[]

}


const useGenres = () => {
    const [genre, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setloading] = useState(false);


    useEffect(() => {
        const controller = new AbortController();

        setloading(true)
        apiClient.get<GenreList>('/genre/movie/list', { signal: controller.signal })
            .then(res => {
                setGenres(res.data.genres)
                setloading(false)
            })
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message)
                setloading(false)
            })

        return () => controller.abort()
    }, [])
    return { genre, error, isLoading }
}
export default useGenres;