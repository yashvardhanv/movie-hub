import { SimpleGrid, Text } from '@chakra-ui/react';
import useMovies from '../hooks/useMovies';
import MovieCard from './MovieCard';
import MovieCardSkeleton from './MovieCardSkeleton';
import { Genre } from '../hooks/useGenres';
import { Item } from './PlateformSelector';
import useSearch from '../hooks/useSearch';

interface Props{
    selectedGenre: Genre | null,
    selectedFilter: Item | null,
    page : number,
    searchQuery: string
    
}

const MovieGrid = ({selectedGenre, selectedFilter, page, searchQuery}:Props) => {
    const {movies, error, isLoading}= searchQuery === '' ? useMovies(selectedGenre, selectedFilter, page): useSearch(searchQuery)
    
    const skeletons = [1,2,3,4,5,6,7,8]
   
  return (
   <>
   {error && <Text>{error}</Text>}
    <SimpleGrid columns={{sm:1, md: 2, lg:3 ,xl:4}} padding={10} spacing={10}>
        {isLoading && skeletons.map(skeleton => <MovieCardSkeleton key={skeleton}></MovieCardSkeleton>)}
        {movies.map(movie => <MovieCard key={movie.id} movie={movie}></MovieCard>)}
    </SimpleGrid>
  
    </>)
}

export default MovieGrid
