import { Movies } from '../hooks/useMovies'
import { Button, Card, CardBody, HStack, Heading, Image, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, useToast } from '@chakra-ui/react'
import Ratings from './Ratings'
import noimage from '../assets/No-image-found.jpg'
import {MdArrowDownward} from 'react-icons/md' 
interface Props {
  movie: Movies
}


const prefix = "https://image.tmdb.org/t/p/w300"
const MovieCard = ({ movie }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()

  return (
    <>
      <Card borderRadius={20} overflow='hidden' onClick={()=>{
        onOpen()
        toast({
          title: 'Scroll more here.',
          description: "There is more content to see.",
          status: 'success',
          duration: 2000,
          isClosable: true,
          icon: <MdArrowDownward fontSize={'50'} />
          
 
        })
        }}>
        <Image src={movie.poster_path ? prefix + movie.poster_path : noimage} />
        <CardBody >

          <Heading fontSize='2xl'>{movie.title}</Heading>
          <Ratings ratings={movie.vote_average}></Ratings>

        </CardBody>
      </Card>
      <Modal isOpen={isOpen} onClose={onClose} scrollBehavior='inside'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{movie.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image borderRadius={10} src={prefix + movie.poster_path} />
            <br />
            <Text ><b>Overview:</b>{movie.overview}</Text>
            <br />
            <Text><b>Released on:</b>{movie.release_date}</Text>
            <HStack>
              <Text fontWeight={'bold'}>Ratings.</Text><Ratings ratings={movie.vote_average}></Ratings></HStack>
              <br />
            <Link target='_blank' href={'https://vidsrc.to/embed/movie/'+movie.id}> <Button colorScheme='teal' variant='solid'>
              Watch for free
            </Button></Link>
            
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>

          </ModalFooter>
        </ModalContent>
      </Modal>

    </>
  )
}

export default MovieCard
