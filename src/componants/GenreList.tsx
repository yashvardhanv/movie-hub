import { BiMoviePlay} from "react-icons/bi"
import useGenres, { Genre } from '../hooks/useGenres'
import { useColorModeValue } from '@chakra-ui/react'
import { List, ListItem,  ListIcon} from '@chakra-ui/react'
import GenreListSkeleton from './GenreListSkeleton'

interface Props{
  selectedGenre: Genre | null,
  onSelectGenre: (genre : Genre) => void,

}

const GenreList = ({selectedGenre,onSelectGenre}: Props ) => {
  

  const bg = useColorModeValue('white', 'gray.700')
  const color = useColorModeValue('orange.500', 'cyan.500')
 const skeletons = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    const {genre, error,isLoading} = useGenres();
  return (
    <List spacing={2}>
      {isLoading && skeletons.map(skeleton => <GenreListSkeleton key={skeleton}></GenreListSkeleton>)}
      {genre.map((genre) => <ListItem fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}  _hover={{background: {bg},textDecoration: "underline", cursor: "pointer"}} onClick={() => onSelectGenre(genre)} boxShadow={'md'} key={genre.id} bg={bg} borderRadius={8} padding={2}><ListIcon key={genre.id} fontSize={25} as={BiMoviePlay} color={color} />{genre.name}</ListItem>)}
     </List>
  )
}

export default GenreList
