import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";


interface FetchResponse<T>{
    genres: T[]

}


const useData = <T>(endpoint: string) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setloading] = useState(false);


    useEffect(() => {
        const controller = new AbortController();

        setloading(true)
        apiClient.get<FetchResponse<T>>(endpoint, { signal: controller.signal })
            .then(res => {
                setData(res.data.genres)
                setloading(false)
            })
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message)
                setloading(false)
            })

        return () => controller.abort()
    }, [])
    return { data, error, isLoading }
}
export default useData;